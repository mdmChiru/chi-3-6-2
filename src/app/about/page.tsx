import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "О нас — Vibe Venture",
  description:
    "Подробное описание Vibe Venture: миссия, команда, партнёрская сеть и принципы работы с ИИ-стартапами на ранней стадии.",
};

const principles = [
  {
    title: "Понятная проблема важнее модных технологий",
    text: "Мы вкладываемся в команды, которые могут в двух предложениях объяснить, чью задачу решает продукт и зачем это нужно рынку.",
  },
  {
    title: "Мало проектов — много внимания",
    text: "Мы не гонимся за количеством: каждой команде выделяем заметное время основателей и экспертов, а не только деньги.",
  },
  {
    title: "Практика вместо абстрактных советов",
    text: "Обратная связь всегда конкретная: что изменить в продукте, как переупаковать питч, к кому идти за первым пилотом.",
  },
  {
    title: "Прозрачные условия с самого старта",
    text: "О деньгах, доле и ожиданиях договариваемся до начала работы — никаких скрытых сюрпризов по ходу партнёрства.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        О&nbsp;
        <span className="text-amber-500">Vibe Venture</span>
      </h1>

      <section className="mt-8 space-y-4 text-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900">Наша миссия</h2>
        <p>
          Vibe Venture — небольшая венчурная фирма для ИИ-стартапов на ранней
          стадии. Наша миссия — дать командам с понятной проблемой и работающим
          прототипом доступ к ресурсам, которые обычно появляются у проектов
          гораздо позже: финансированию, продуктовым знаниям и первым контактам
          с рынком.
        </p>
        <p>
          Мы знаем, сколько времени и сил уходит у ранних команд на
          фундаментальные вещи — от упаковки питча до первого пилота, — и
          берём эту часть пути на себя, чтобы основатели могли сосредоточиться
          на продукте.
        </p>
      </section>

      <section className="mt-12 space-y-4 text-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900">
          Команда экспертов
        </h2>
        <p>
          В команде Vibe Venture — практики из мира машинного обучения,
          продуктовой разработки и венчурных инвестиций. Мы сами строили
          продукты от идеи до масштабирования и видели типовые ошибки ранних
          стартапов изнутри.
        </p>
        <p>
          Рядом с нами работают внешние специалисты по питчу, продажам и
          юридическим вопросам — команды получают доступ к нужной экспертизе
          именно тогда, когда она нужна.
        </p>
      </section>

      <section className="mt-12 space-y-4 text-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900">
          Партнёрская сеть
        </h2>
        <p>
          Мы выстроили сеть партнёров из корпораций, которые первыми пробуют
          прикладные ИИ-решения, инновационных команд более опытных фондов и
          индустриальных экспертов. Эта сеть помогает нашим стартапам быстрее
          находить пилотных клиентов и следующие раунды финансирования.
        </p>
      </section>

      <section className="mt-12 space-y-4 text-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900">
          Достижения и кейсы
        </h2>
        <p>
          За время работы мы поддержали несколько десятков ранних ИИ-команд:
          многие прошли путь от прототипа до платящих клиентов, часть команд
          подняла следующие раунды, а отдельные проекты выросли в устойчивые
          бизнесы. Подробные кейсы и истории команд мы публикуем отдельно.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">
          Принципы работы с проектами
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <li
              key={principle.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-amber-600">{principle.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">
                {principle.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
        <p className="font-semibold text-neutral-900">
          Хотите, чтобы мы посмотрели ваш проект?
        </p>
        <Link
          href="/#form"
          className="mt-4 inline-block rounded-lg bg-amber-500 px-6 py-2.5 font-semibold text-neutral-900 transition-colors hover:bg-amber-400"
        >
          Оставить заявку на первичный отбор
        </Link>
      </section>

      <div className="mt-12">
        <BackButton />
      </div>
    </main>
  );
}
