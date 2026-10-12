import Database from "better-sqlite3";
import fs from "node:fs";
import type { ApplicationData } from "@/lib/schema";
import { dataDir, dbPath } from "../../scripts/db-path.mjs";

/**
 * Конфигурация SQLite (better-sqlite3).
 *
 * Почему better-sqlite3: самая быстрая нативная реализация SQLite для Node.js,
 * синхронный API без лишней асинхронной обвязки, минимум кода для интеграции
 * и защита от SQL-инъекций через prepared statements.
 *
 * Модуль только для сервера (используется в API-роуте), не импортировать
 * в клиентские компоненты.
 */

// Файл БД лежит в data/ (в .gitignore) и не коммитится.
// Пути берутся из общего модуля scripts/db-path.mjs — тот же путь
// использует скрипт CSV-выгрузки (scripts/export-applications.mjs).
fs.mkdirSync(dataDir, { recursive: true });

// Один экземпляр подключения на процесс
const db = new Database(dbPath);

// WAL — быстрые записи и чтение без блокировок
db.pragma("journal_mode = WAL");

/**
 * Миграция: таблица заявок.
 * CREATE TABLE IF NOT EXISTS — миграция идемпотентна и выполняется при
 * каждом старте сервера, применяясь только один раз.
 */
const createApplicationsTable = `
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    project_name TEXT NOT NULL,
    project_stage TEXT NOT NULL,
    problem_description TEXT NOT NULL,
    demo_link TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`;

db.exec(createApplicationsTable);

export interface ApplicationRow {
  id: number;
  name: string;
  contact: string;
  project_name: string;
  project_stage: string;
  problem_description: string;
  demo_link: string | null;
  created_at: string;
}

/**
 * Сохраняет заявку после успешной валидации Zod.
 * Значения подставляются через prepared statement — защита от SQL-инъекций.
 * Возвращает id сохранённой записи.
 */
export function saveApplication(data: ApplicationData): number {
  const insert = db.prepare(`
    INSERT INTO applications (
      name, contact, project_name, project_stage, problem_description, demo_link
    ) VALUES (
      @founderName, @contact, @projectName, @projectStage, @problem, @demoUrl
    );
  `);

  const result = insert.run({
    founderName: data.founderName,
    contact: data.contact,
    projectName: data.projectName,
    projectStage: data.projectStage,
    problem: data.problem,
    // Необязательное поле: пустая строка превращается в NULL
    demoUrl: data.demoUrl === "" ? null : data.demoUrl,
  });

  return Number(result.lastInsertRowid);
}

/** Возвращает все сохранённые заявки (для проверки содержимого БД). */
export function getAllApplications(): ApplicationRow[] {
  return db
    .prepare("SELECT * FROM applications ORDER BY id;")
    .all() as ApplicationRow[];
}

export default db;
