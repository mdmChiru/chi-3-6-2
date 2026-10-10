"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FormValues = {
  founderName: string;
  contact: string;
  projectName: string;
  projectStage: string;
  problem: string;
  demoUrl: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  founderName: "",
  contact: "",
  projectName: "",
  projectStage: "",
  problem: "",
  demoUrl: "",
};

const draftStorageKey = "vibe-venture-application-draft";
const applyEndpoint = "/api/apply";

const projectStages = [
  { value: "idea", label: "Идея" },
  { value: "prototype", label: "Прототип" },
  { value: "mvp", label: "MVP" },
];

function validateField(field: keyof FormValues, value: string): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case "founderName":
      if (!trimmed) return "Укажите ваше имя.";
      if (trimmed.length < 2) return "Имя должно быть не короче двух символов.";
      return undefined;

    case "contact": {
      if (!trimmed) return "Укажите контакт для связи, чтобы мы могли ответить.";
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
      const isTelegram = /^@[\w]{3,}$/.test(trimmed);
      const isPhone = trimmed.replace(/\D/g, "").length >= 7;
      if (!isEmail && !isTelegram && !isPhone) {
        return "Введите email, телефон или ник в Telegram (например, @username).";
      }
      return undefined;
    }

    case "projectName":
      if (!trimmed) return "Укажите название проекта.";
      return undefined;

    case "projectStage":
      if (!value) return "Выберите текущую стадию проекта.";
      return undefined;

    case "problem":
      if (!trimmed) return "Расскажите, какую проблему решает проект.";
      if (trimmed.length < 20) {
        return `Добавьте пару предложений — сейчас слишком коротко (${trimmed.length} из 20 символов).`;
      }
      if (trimmed.length > 1000) return "Сократите описание до 1000 символов.";
      return undefined;

    case "demoUrl":
      if (!trimmed) return undefined; // поле необязательное
      if (!/^https?:\/\/\S+$/i.test(trimmed)) {
        return "Ссылка должна начинаться с http:// или https://.";
      }
      return undefined;

    default:
      return undefined;
  }
}

function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(values) as Array<keyof FormValues>).forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
}

const fieldClassNames = (hasError: boolean) =>
  `mt-1.5 w-full rounded-lg border-2 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
    hasError
      ? "border-orange-500 focus:border-orange-500"
      : "border-neutral-200 focus:border-amber-500"
  }`;

export default function ApplicationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [serverErrors, setServerErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Восстановление черновика при возврате на страницу (сохранение состояния при навигации).
  // setState вызывается в колбэке setTimeout, а не синхронно в теле эффекта,
  // чтобы не вызывать каскадные рендеры (react-hooks/set-state-in-effect).
  useEffect(() => {
    let saved: Partial<FormValues> | undefined;
    try {
      const raw = window.localStorage.getItem(draftStorageKey);
      if (raw) saved = JSON.parse(raw) as Partial<FormValues>;
    } catch {
      // повреждённый черновик игнорируем
    }
    if (!saved) return;
    const timer = window.setTimeout(() => {
      setValues((prev) => ({ ...prev, ...saved }));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  // Сохранение черновика при каждом изменении
  useEffect(() => {
    try {
      window.localStorage.setItem(draftStorageKey, JSON.stringify(values));
    } catch {
      // localStorage недоступен — не критично
    }
  }, [values]);

  const errors = validateAll(values);
  const errorFor = (field: keyof FormValues): string | undefined =>
    (touched[field] || submitted ? errors[field] : undefined) ??
    serverErrors[field];

  const handleChange = useCallback(
    (field: keyof FormValues) => (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
      // Ошибка исчезает сразу, как только поле становится корректным
      if ((touched[field] || submitted) && !validateField(field, value)) {
        setNetworkError(false);
      }
      // Серверная ошибка поля сбрасывается при правке поля
      if (serverErrors[field]) {
        setServerErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [touched, submitted, serverErrors],
  );

  const handleBlur = useCallback((field: keyof FormValues) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTouched({
      founderName: true,
      contact: true,
      projectName: true,
      projectStage: true,
      problem: true,
      demoUrl: true,
    });

    const clientErrors = validateAll(values);
    if (Object.keys(clientErrors).length > 0) {
      setServerErrors({});
      setNetworkError(false);
      setShowSuccess(false);
      const firstErrorField = (
        Object.keys(clientErrors) as Array<keyof FormValues>
      )[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[data-field="${firstErrorField}"]`)
        ?.focus();
      return;
    }

    setIsSubmitting(true);
    setNetworkError(false);
    setServerErrors({});
    setShowSuccess(false);

    try {
      const response = await fetch(applyEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        status?: string;
        errors?: FormErrors;
      };

      if (response.ok && data.status === "success") {
        // Успех показывается ТОЛЬКО после ответа сервера 200
        setShowSuccess(true);
      } else if (response.status === 400 && data.errors) {
        // При 400 — показать ошибки у соответствующих полей, без успеха
        setServerErrors(data.errors);
        const firstErrorField = Object.keys(data.errors)[0] as
          | keyof FormValues
          | undefined;
        if (firstErrorField && firstErrorField in initialValues) {
          formRef.current
            ?.querySelector<HTMLElement>(`[data-field="${firstErrorField}"]`)
            ?.focus();
        }
      } else {
        setNetworkError(true);
      }
    } catch {
      // Сетевая ошибка
      setNetworkError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputProps = (field: keyof FormValues) => {
    const error = errorFor(field);
    return {
      value: values[field],
      onChange: handleChange(field),
      onBlur: handleBlur(field),
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${field}-error` : undefined,
      "data-field": field,
    };
  };

  const errorMessage = (field: keyof FormValues) => {
    const error = errorFor(field);
    if (!error) return null;
    return (
      <p
        id={`${field}-error`}
        role="alert"
        className="mt-1.5 text-sm font-medium text-orange-600"
      >
        {error}
      </p>
    );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="founderName"
            className="block text-sm font-semibold text-neutral-900"
          >
            Ваше имя <span className="text-orange-500">*</span>
          </label>
          <input
            id="founderName"
            name="founderName"
            type="text"
            autoComplete="name"
            placeholder="Иван Иванов"
            className={fieldClassNames(Boolean(errorFor("founderName")))}
            {...inputProps("founderName")}
          />
          {errorMessage("founderName")}
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-semibold text-neutral-900"
          >
            Контакт для связи <span className="text-orange-500">*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            autoComplete="email"
            placeholder="email, телефон или @username"
            className={fieldClassNames(Boolean(errorFor("contact")))}
            {...inputProps("contact")}
          />
          {errorMessage("contact")}
        </div>

        <div>
          <label
            htmlFor="projectName"
            className="block text-sm font-semibold text-neutral-900"
          >
            Название проекта <span className="text-orange-500">*</span>
          </label>
          <input
            id="projectName"
            name="projectName"
            type="text"
            placeholder="Название вашего ИИ-продукта"
            className={fieldClassNames(Boolean(errorFor("projectName")))}
            {...inputProps("projectName")}
          />
          {errorMessage("projectName")}
        </div>

        <div>
          <label
            htmlFor="projectStage"
            className="block text-sm font-semibold text-neutral-900"
          >
            Текущая стадия <span className="text-orange-500">*</span>
          </label>
          <select
            id="projectStage"
            name="projectStage"
            className={fieldClassNames(Boolean(errorFor("projectStage")))}
            {...inputProps("projectStage")}
          >
            <option value="" disabled>
              Выберите стадию
            </option>
            {projectStages.map((stage) => (
              <option key={stage.value} value={stage.value}>
                {stage.label}
              </option>
            ))}
          </select>
          {errorMessage("projectStage")}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="problem"
            className="block text-sm font-semibold text-neutral-900"
          >
            Какую проблему решает проект?{" "}
            <span className="text-orange-500">*</span>
          </label>
          <p className="mt-1 text-xs text-neutral-500">
            Два-три предложения: кто столкнулся с проблемой и чем она болезненна.
          </p>
          <textarea
            id="problem"
            name="problem"
            rows={4}
            placeholder="Например: команды разработки тратят часы на ручное код-ревью рутинных изменений…"
            className={fieldClassNames(Boolean(errorFor("problem")))}
            {...inputProps("problem")}
          />
          {errorMessage("problem")}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="demoUrl"
            className="block text-sm font-semibold text-neutral-900"
          >
            Ссылка на демо или репозиторий{" "}
            <span className="text-sm font-normal text-neutral-500">
              (необязательно)
            </span>
          </label>
          <input
            id="demoUrl"
            name="demoUrl"
            type="url"
            placeholder="https://github.com/team/project"
            className={fieldClassNames(Boolean(errorFor("demoUrl")))}
            {...inputProps("demoUrl")}
          />
          {errorMessage("demoUrl")}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-amber-500 px-8 py-3 font-semibold text-neutral-900 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Отправка…" : "Отправить заявку"}
        </button>
        <p className="text-xs text-neutral-500">
          Поля, отмеченные <span className="text-orange-500">*</span>,
          обязательны. Черновик сохраняется автоматически.
        </p>
      </div>

      {submitted && networkError && (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-orange-300 bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700"
        >
          Не получилось отправить заявку, попробуйте ещё раз.
        </p>
      )}

      {submitted && showSuccess && !networkError && (
        <p
          role="status"
          className="mt-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-neutral-900"
        >
          Заявка успешно отправлена. Мы свяжемся с вами по указанному контакту.
        </p>
      )}
    </form>
  );
}
