import Database from "better-sqlite3";
import fs from "node:fs";
import { dataDir, dbPath, csvPath } from "./db-path.mjs";

/**
 * CSV-выгрузка заявок из SQLite (фаза 8).
 * Запуск: npm run export:csv
 *
 * - БД открывается в read-only режиме, чтобы не мешать работающему dev-серверу;
 * - строки сортируются по id ASC;
 * - файл перезаписывается при каждом запуске;
 * - UTF-8 с BOM (\uFEFF) — корректное открытие в Excel на Windows и macOS;
 * - перевод строки CRLF (\r\n) — совместимость с Excel и RFC 4180;
 * - значения с запятой, кавычкой, переводом строки или краевыми пробелами
 *   оборачиваются в двойные кавычки, внутренние кавычки удваиваются;
 * - NULL/undefined выводятся как пустая строка.
 */

const HEADERS = [
  "id",
  "name",
  "contact",
  "project_name",
  "project_stage",
  "problem_description",
  "demo_link",
  "created_at",
];

/** Экранирование значения по правилам CSV (RFC 4180). */
function escapeCsvValue(value) {
  if (value === null || value === undefined) return "";
  const str = String(value);
  const needsQuotes =
    /[",\r\n]/.test(str) || /^\s|\s$/.test(str);
  if (!needsQuotes) return str;
  return `"${str.replace(/"/g, '""')}"`;
}

/** Собирает CSV-строку (заголовки + строки, CRLF). */
function toCsv(rows) {
  const lines = [HEADERS.join(",")];
  for (const row of rows) {
    lines.push(HEADERS.map((header) => escapeCsvValue(row[header])).join(","));
  }
  return lines.join("\r\n") + "\r\n";
}

let db;
try {
  if (!fs.existsSync(dbPath)) {
    throw new Error(
      `Файл БД не найден: ${dbPath}. Сначала запустите сервер (npm run dev) и отправьте заявку.`,
    );
  }

  // read-only: не блокируем и не изменяем БД работающего сервера
  db = new Database(dbPath, { readonly: true });

  const rows = db
    .prepare("SELECT * FROM applications ORDER BY id ASC")
    .all();

  fs.mkdirSync(dataDir, { recursive: true });
  // BOM в начале файла — чтобы Excel корректно определил UTF-8
  fs.writeFileSync(csvPath, "\uFEFF" + toCsv(rows), "utf8");

  console.log(`CSV создан: ${csvPath}`);
  console.log(`Выгружено строк: ${rows.length}`);
  if (rows.length === 0) {
    console.log("Заявок в базе нет — создан файл только с заголовками.");
  }
} catch (error) {
  console.error(`Ошибка выгрузки CSV: ${error.message}`);
  process.exitCode = 1;
} finally {
  if (db) db.close();
}