import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Общий модуль путей к данным (БД и CSV).
 * Используется и приложением (src/lib/database.ts), и Node.js-скриптом
 * выгрузки (scripts/export-applications.mjs), чтобы пути не расходились.
 *
 * Пути считаются от корня проекта (scripts/..), а не от process.cwd(),
 * поэтому скрипт можно запускать из любой директории.
 */

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

/** Каталог данных (в .gitignore, не коммитится) */
export const dataDir = path.join(projectRoot, "data");

/** Файл базы SQLite */
export const dbPath = path.join(dataDir, "applications.db");

/** Файл CSV-выгрузки заявок */
export const csvPath = path.join(dataDir, "applications-export.csv");