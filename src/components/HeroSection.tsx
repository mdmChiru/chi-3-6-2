const highlights = [
  {
    label: "Микрогрант",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "Продуктовая обратная связь",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "Упаковка питча",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    label: "Пилотные интро",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden px-6 py-28 text-center"
    >
      {/* Фон на всю ширину: градиент плавно переходит в светлый фон сайта */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 w-full"
      >
        <div className="absolute inset-0 w-full bg-gradient-to-b from-orange-100/70 via-orange-50/30 to-transparent" />
        <div
          className="absolute inset-0 w-full opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(17,24,39,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          Vibe&nbsp;
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            Venture
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Венчурная фирма для ИИ-стартапов на ранней стадии. Мы помогаем
          командам, у которых есть понятная проблема, прототип или MVP, пройти
          путь от первой версии продукта до пилотных внедрений.
        </p>

        {/* Чипы: единый ряд, каждый пункт — иконка + текст одним целым */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {highlights.map((item) => (
            <li key={item.label} className="chip">
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>

        <a
          href="#form"
          className="btn-primary mt-12 inline-block rounded-lg px-6 py-3 text-lg font-semibold"
        >
          Оставить заявку на первичный отбор
        </a>
      </div>
    </section>
  );
}
