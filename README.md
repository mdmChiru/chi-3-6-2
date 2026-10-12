# Vibe Venture

Лендинг-сайт (MVP) для [Vibe Venture](https://example.com) — небольшой
венчурной фирмы, которая помогает ИИ-стартапам на ранней стадии.

## О проекте

Vibe Venture ищет команды с понятной проблемой, прототипом или MVP и может
предоставить:

- микрогрант;
- продуктовую обратную связь;
- помощь с упаковкой питча;
- первые пилотные интро.

Пользователи сайта — основатели ИИ-стартапов. Они должны понять предложение
фирмы, открыть подробное описание компании и оставить заявку на первичный
отбор. Заявка проходит проверку на клиенте и на сервере (Zod), сохраняется
в локальную базу SQLite и может быть выгружена в CSV локальным Node.js-скриптом.

> Текущее состояние: инициализация проекта (фаза 1). Главная страница
> отображает заголовок Vibe Venture; форма, база данных и CSV-выгрузка
> будут добавлены в следующих фазах.

## Стек технологий

- [Next.js](https://nextjs.org/) (App Router) — фреймворк
- [React](https://react.dev/) — UI
- [TypeScript](https://www.typescriptlang.org/) — типизация
- [Tailwind CSS](https://tailwindcss.com/) — стили
- [Zod](https://zod.dev/) — валидация на сервере
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) — SQLite-база заявок
- Node.js — среда выполнения (в следующих фазах: CSV-скрипт)

## Требования

- **Node.js 20.9.0 или новее** (LTS-версия рекомендована Next.js).
- npm (устанавливается вместе с Node.js).

Проверить версию:

```bash
node -v
```

## Запуск проекта

### macOS

```bash
# 1. Перейти в каталог проекта
cd vibe-venture-mvp

# 2. Установить зависимости
npm install

# 3. Запустить dev-сервер
npm run dev
```

### Windows

```bat
:: 1. Перейти в каталог проекта
cd vibe-venture-mvp

:: 2. Установить зависимости
npm install

:: 3. Запустить dev-сервер
npm run dev
```

Откройте в браузере [http://localhost:3000](http://localhost:3000) —
на главной странице должен быть виден заголовок **Vibe Venture**.

## Структура проекта

```
vibe-venture-mvp/
├── src/
│   ├── app/              # страницы (App Router)
│   │   ├── layout.tsx    # корневой layout (шапка и подвал)
│   │   ├── page.tsx      # главная страница (секции лендинга)
│   │   ├── about/
│   │   │   └── page.tsx  # второй экран «О нас»
│   │   └── globals.css   # глобальные стили (Tailwind CSS)
│   ├── api/
│   │   └── apply/
│   │       └── route.ts  # API-роут: валидация Zod + сохранение в SQLite
│   ├── components/       # переиспользуемые компоненты (секции, шапка, подвал, форма)
│   └── lib/
│       ├── schema.ts     # схема валидации заявки (Zod)
│       └── database.ts   # подключение к SQLite и работа с таблицей заявок
├── scripts/
│   ├── db-path.mjs       # общие пути к данным (БД и CSV) для приложения и скриптов
│   └── export-applications.mjs  # CSV-выгрузка заявок
├── public/               # статические файлы
├── .gitignore
├── next.config.ts        # конфигурация Next.js
├── package.json
├── tsconfig.json         # конфигурация TypeScript
└── eslint.config.mjs     # конфигурация ESLint
```

## Скрипты

| Команда            | Описание                                |
| ------------------ | --------------------------------------- |
| `npm run dev`      | Запуск dev-сервера (порт 3000)          |
| `npm run build`    | Продакшен-сборка                        |
| `npm run start`    | Запуск продакшен-сборки                 |
| `npm run lint`     | Проверка кода линтером (ESLint)         |
| `npm run db:show`  | Вывод всех сохранённых заявок из SQLite |
| `npm run export:csv` | Выгрузка заявок из SQLite в CSV       |

## База данных (SQLite)

Заявки на первичный отбор сохраняются в локальную базу SQLite **после
успешной валидации Zod** на сервере (роут `POST /api/apply`).

Библиотека — `better-sqlite3`: быстрая нативная реализация SQLite для
Node.js, синхронный API без лишней обвязки, минимум кода для интеграции
и защита от SQL-инъекций через prepared statements.

- Файл БД: `data/applications.db` — создаётся автоматически, находится
  в `.gitignore` и не коммитится.
- Конфигурация подключения и миграция: [`src/lib/database.ts`](src/lib/database.ts).
- Таблица создаётся при старте сервера (`CREATE TABLE IF NOT EXISTS`).

### Структура таблицы `applications`

| Поле                  | Тип      | Описание                            |
| --------------------- | -------- | ----------------------------------- |
| `id`                  | INTEGER  | Автоинкремент, первичный ключ       |
| `name`                | TEXT     | Имя основателя                      |
| `contact`             | TEXT     | Контактные данные                   |
| `project_name`        | TEXT     | Название проекта                    |
| `project_stage`       | TEXT     | Стадия проекта (idea/prototype/mvp) |
| `problem_description` | TEXT     | Описание решаемой проблемы          |
| `demo_link`           | TEXT     | Ссылка на демо (опционально, NULL)  |
| `created_at`          | DATETIME | Время создания записи (UTC)         |

### Как проверить сохранение заявки

1. Запустите сервер (`npm run dev`) и отправьте форму на
   http://localhost:3000/#form.
2. Посмотрите содержимое базы:

   ```bash
   npm run db:show
   ```

3. SQL-запрос для проверки вручную (в утилите sqlite3 или через Node.js):

   ```sql
   SELECT * FROM applications ORDER BY id;
   ```

4. Повторная отправка формы создаёт новую запись со следующим `id` —
   данные не дублируются и не перезаписываются.

## CSV-выгрузка заявок

Локальный Node.js-скрипт читает заявки из SQLite и записывает их в CSV-файл.
Запускается вручную из терминала, без веб-интерфейса.

```bash
npm run export:csv
```

- Файл выгрузки: `data/applications-export.csv` (перезаписывается при каждом
  запуске; каталог `data/` и `*.csv` в `.gitignore` — файл не коммитится).
- Скрипт: [`scripts/export-applications.mjs`](scripts/export-applications.mjs).
- БД открывается в read-only режиме — не мешает работающему dev-серверу.
- Формат: UTF-8 с BOM (корректно открывается в Excel на Windows и macOS),
  перевод строки CRLF, значения с запятыми/кавычками/переносами корректно
  экранируются, `NULL` выводится как пустая строка.
- Заголовки: `id,name,contact,project_name,project_stage,problem_description,demo_link,created_at`,
  строки отсортированы по `id ASC`.
- Если заявок нет — создаётся файл только с заголовками.

### Как проверить выгрузку

1. Запустите сервер (`npm run dev`) и отправьте заявку через форму на
   http://localhost:3000/#form.
2. Выполните выгрузку:

   ```bash
   npm run export:csv
   ```

3. Откройте файл `data/applications-export.csv`:

   - **macOS:** `open data/applications-export.csv` (откроется в Numbers)
   - **Windows:** `start data\applications-export.csv` (откроется в Excel)

4. Убедитесь, что строка с вашей заявкой на месте, все поля заполнены,
   а русский текст отображается без «кракозябр» (BOM гарантирует корректную
   кодировку).
