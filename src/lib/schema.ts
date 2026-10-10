import { z } from "zod";

/**
 * Схема валидации заявки на первичный отбор.
 * Повторяет правила клиентской валидации в ApplicationForm.
 */
export const applicationSchema = z.object({
  founderName: z
    .string({ error: "Укажите ваше имя." })
    .trim()
    .min(1, "Укажите ваше имя.")
    .min(2, "Имя должно быть не короче двух символов."),

  contact: z
    .string({ error: "Укажите контакт для связи, чтобы мы могли ответить." })
    .trim()
    .min(1, "Укажите контакт для связи, чтобы мы могли ответить.")
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || // email
        /^@[\w]{3,}$/.test(value) || // ник в Telegram
        value.replace(/\D/g, "").length >= 7, // телефон
      "Введите email, телефон или ник в Telegram (например, @username).",
    ),

  projectName: z
    .string({ error: "Укажите название проекта." })
    .trim()
    .min(1, "Укажите название проекта."),

  projectStage: z.enum(["idea", "prototype", "mvp"], {
    error: "Выберите текущую стадию проекта.",
  }),

  problem: z
    .string({ error: "Расскажите, какую проблему решает проект." })
    .trim()
    .min(1, "Расскажите, какую проблему решает проект.")
    .min(20, "Добавьте пару предложений — описание слишком короткое.")
    .max(1000, "Сократите описание до 1000 символов."),

  // Необязательное поле: отсутствие значения трактуется как пустая строка
  demoUrl: z.preprocess(
    (value) => (value === undefined || value === null ? "" : value),
    z
      .string()
      .trim()
      .refine(
        (value) => value === "" || /^https?:\/\/\S+$/i.test(value),
        "Ссылка должна начинаться с http:// или https://.",
      ),
  ),
});

export type ApplicationData = z.infer<typeof applicationSchema>;

/** Ключи полей формы, по которым фронтенд сопоставляет ошибки. */
export const applicationFields = [
  "founderName",
  "contact",
  "projectName",
  "projectStage",
  "problem",
  "demoUrl",
] as const;
