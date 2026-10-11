"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Какие проекты попадают в отбор?",
    answer:
      "Мы ищем ИИ-команды с понятной проблемой, у которых есть прототип или MVP. Важнее всего — ясность, кому и какую задачу решает продукт.",
  },
  {
    question: "Как проходит процесс работы с заявками?",
    answer:
      "Вы отправляете одну заявку через форму на этой странице. Мы читаем каждую заявку, после чего связываемся с командой для короткого разговора о проекте.",
  },
  {
    question: "Что происходит после подачи заявки?",
    answer:
      "После первичного отбора — беседа с командой и разбор продукта. Дальше вместе решаем, чем полезно партнёрство: микрогрант, обратная связь, упаковка питча или пилотные интро.",
  },
];

const timeline = [
  { step: "Первичный отбор", duration: "2 недели" },
  { step: "Детальный анализ", duration: "до 4 недель" },
  { step: "Принятие решения", duration: "2–3 недели" },
];

export default function FaqSection() {
  // Аккордеон: по умолчанию все ответы закрыты, открывается по клику
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
          Вопросы
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
          Ответы на то, что чаще всего спрашивают основатели перед подачей
          заявки.
        </p>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  isOpen
                    ? "border-amber-500/40 shadow-[0_12px_32px_-16px_rgba(249,115,22,0.35)]"
                    : "border-neutral-200/70 shadow-[0_4px_16px_-8px_rgba(17,24,39,0.08)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-amber-50/60"
                >
                  <span className="font-semibold text-foreground">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-amber-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-amber-500/10" : "bg-neutral-100"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`accordion-panel ${isOpen ? "open" : ""}`}
                  role="region"
                >
                  <div>
                    <p className="px-6 pb-6 leading-relaxed text-neutral-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="mt-20 text-2xl font-extrabold tracking-tight text-foreground">
          Сроки рассмотрения
        </h3>
        {/* Единый timeline: линия через весь блок, точка под каждым шагом */}
        <ol className="timeline mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {timeline.map((item) => (
            <li key={item.step} className="timeline-step">
              <span className="timeline-dot" aria-hidden="true" />
              <div>
                <p className="font-bold text-foreground">{item.step}</p>
                <p className="mt-1 text-sm text-neutral-500">
                  {item.duration}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
