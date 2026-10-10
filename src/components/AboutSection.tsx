import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral-900">О нас</h2>

      <div className="mt-6 space-y-4 text-neutral-700">
        <p>
          <strong className="text-neutral-900">Наша миссия</strong> — дать
          ранним ИИ-командам ресурсы и поддержку, которые обычно доступны
          проектам уже на поздних стадиях: финансирование, экспертизу и первые
          контакты с рынком.
        </p>
        <p>
          <strong className="text-neutral-900">Кто мы</strong> — небольшая
          команда практиков с опытом в машинном обучении, продуктовой
          разработке и венчурных инвестициях. Мы сами проходили путь от
          прототипа до работающего продукта и понимают, где стартапы теряют
          время.
        </p>
        <p>
          <strong className="text-neutral-900">Специализация</strong> —
          прикладной ИИ: модели и сервисы на их основе, автоматизация
          бизнес-процессов, инструменты для разработчиков. Работаем с командами
          от идеи с прототипом до готового MVP.
        </p>
        <p>
          <strong className="text-neutral-900">Чем отличаемся</strong> —
          небольшим числом проектов в работе: каждой команде выделяем заметное
          время, даём конкретную продуктовую обратную связь и не ограничиваемся
          деньгами.
        </p>
      </div>

      {/* Второй экран /about реализован в фазе 4 */}
      <Link
        href="/about"
        className="mt-8 inline-block rounded-lg border-2 border-amber-500 px-6 py-2.5 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
      >
        Подробнее о компании
      </Link>
    </section>
  );
}
