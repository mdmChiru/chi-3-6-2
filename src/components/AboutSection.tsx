import Link from "next/link";

export default function AboutSection() {
  return (
    // Контейнер секции «О нас»
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F9FA] py-24"
    >
      {/* Фоновые абстрактные элементы (не перехватывают клики) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Размытая оранжевая сфера 1 */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500 opacity-10 mix-blend-multiply blur-3xl" />
        {/* Размытая желто-оранжевая сфера 2 */}
        <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-amber-400 opacity-10 mix-blend-multiply blur-3xl" />
        {/* Технологичная сетка (точки) */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(#FF6B00 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Существующий контент (заголовок и текст) — поверх фона */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
            О нас
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-neutral-600">
            <p>
              <strong className="font-semibold text-foreground">
                Наша миссия
              </strong>{" "}
              — дать ранним ИИ-командам ресурсы и поддержку, которые обычно
              доступны проектам уже на поздних стадиях: финансирование,
              экспертизу и первые контакты с рынком.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Кто мы</strong>{" "}
              — небольшая команда практиков с опытом в машинном обучении,
              продуктовой разработке и венчурных инвестициях. Мы сами
              проходили путь от прототипа до работающего продукта и понимают,
              где стартапы теряют время.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Специализация
              </strong>{" "}
              — прикладной ИИ: модели и сервисы на их основе, автоматизация
              бизнес-процессов, инструменты для разработчиков. Работаем с
              командами от идеи с прототипом до готового MVP.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Чем отличаемся
              </strong>{" "}
              — небольшим числом проектов в работе: каждой команде выделяем
              заметное время, даём конкретную продуктовую обратную связь и не
              ограничиваемся деньгами.
            </p>
          </div>

          {/* Второй экран /about реализован в фазе 4 */}
          <Link
            href="/about"
            className="btn-ghost mt-8 inline-block rounded-xl px-7 py-3 font-semibold"
          >
            Подробнее о компании
          </Link>
        </div>
      </div>
    </section>
  );
}
