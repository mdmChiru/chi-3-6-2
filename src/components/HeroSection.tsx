export default function HeroSection() {
  return (
    <section id="hero" className="px-6 py-20 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-neutral-900">
        Vibe&nbsp;
        <span className="text-amber-500">Venture</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-700">
        Венчурная фирма для ИИ-стартапов на ранней стадии. Мы помогаем командам,
        у которых есть понятная проблема, прототип или MVP, пройти путь от
        первой версии продукта до пилотных внедрений.
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-600">
        <li>Микрогрант</li>
        <li aria-hidden="true" className="text-amber-500">
          •
        </li>
        <li>Продуктовая обратная связь</li>
        <li aria-hidden="true" className="text-amber-500">
          •
        </li>
        <li>Упаковка питча</li>
        <li aria-hidden="true" className="text-amber-500">
          •
        </li>
        <li>Пилотные интро</li>
      </ul>
      <a
        href="#form"
        className="mt-10 inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-neutral-900 transition-colors hover:bg-amber-400"
      >
        Оставить заявку на первичный отбор
      </a>
    </section>
  );
}
