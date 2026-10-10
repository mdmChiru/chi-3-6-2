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
  return (
    <section id="faq" className="px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral-900">Вопросы</h2>
      <p className="mt-4 max-w-2xl text-neutral-700">
        Ответы на то, что чаще всего спрашивают основатели перед подачей
        заявки.
      </p>

      <dl className="mt-8 space-y-6">
        {faqItems.map((item) => (
          <div
            key={item.question}
            className="border-l-4 border-amber-500 pl-4"
          >
            <dt className="font-semibold text-neutral-900">{item.question}</dt>
            <dd className="mt-2 text-sm text-neutral-700">{item.answer}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-12 text-xl font-bold text-neutral-900">
        Сроки рассмотрения
      </h3>
      <ol className="mt-4 grid gap-3 sm:grid-cols-3">
        {timeline.map((item, index) => (
          <li
            key={item.step}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <span className="text-sm font-semibold text-amber-600">
              Шаг {index + 1}
            </span>
            <p className="mt-1 font-semibold text-neutral-900">{item.step}</p>
            <p className="mt-1 text-sm text-neutral-700">{item.duration}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
