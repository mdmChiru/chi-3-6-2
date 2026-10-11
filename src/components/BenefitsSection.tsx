const benefits = [
  {
    title: "Микрогрант",
    text: "Безвозмездное финансирование на раннем этапе, чтобы вы могли сосредоточиться на продукте, а не на немедленном поиске денег.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Продуктовая обратная связь",
    text: "Конкретный разбор прототипа или MVP: что уже работает, что лишнее, куда двигаться дальше. Не абстрактные советы, а практические шаги.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Упаковка питча",
    text: "Поможем сформулировать проблему, решение и ценность для клиента так, чтобы питч был понятен инвесторам и первым заказчикам.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    title: "Пилотные интро",
    text: "Первые знакомства с компаниями, которым может быть полезен ваш продукт, — шанс получить пилотного клиента уже на старте.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
          Плюсы
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
          Что получает команда ИИ-стартапа на ранней стадии, пройдя первичный
          отбор.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li key={benefit.title} className="card-lift p-7">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-[0_8px_20px_-6px_rgba(249,115,22,0.55)]">
                  {benefit.icon}
                </span>
                <span className="text-sm font-bold text-neutral-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {benefit.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
