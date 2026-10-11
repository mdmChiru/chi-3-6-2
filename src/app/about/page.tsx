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
    <main className="mx-auto max-w-5xl px-6 py-28">
      <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
        О&nbsp;
        <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          Vibe Venture
        </span>
      </h1>

      <section className="mt-10 max-w-3xl space-y-4 leading-relaxed text-neutral-600">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
          Наша миссия
        </h2>
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

      <section className="mt-16 max-w-3xl space-y-4 leading-relaxed text-neutral-600">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
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

      <section className="mt-16 max-w-3xl space-y-4 leading-relaxed text-neutral-600">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
          Партнёрская сеть
        </h2>
        <p>
          Мы выстроили сеть партнёров из корпораций, которые первыми пробуют
          прикладные ИИ-решения, инновационных команд более опытных фондов и
          индустриальных экспертов. Эта сеть помогает нашим стартапам быстрее
          находить пилотных клиентов и следующие раунды финансирования.
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 leading-relaxed text-neutral-600">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
          Достижения и кейсы
        </h2>
        <p>
          За время работы мы поддержали несколько десятков ранних ИИ-команд:
          многие прошли путь от прототипа до платящих клиентов, часть команд
          подняла следующие раунды, а отдельные проекты выросли в устойчивые
          бизнесы. Подробные кейсы и истории команд мы публикуем отдельно.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
          Принципы работы с проектами
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.title} className="card-lift p-7">
              <span className="text-sm font-bold text-amber-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {principle.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-50 to-orange-50 p-8 text-center shadow-[0_20px_50px_-24px_rgba(249,115,22,0.4)]">
        <p className="text-xl font-bold text-foreground">
          Хотите, чтобы мы посмотрели ваш проект?
        </p>
        <Link
          href="/#form"
          className="btn-primary mt-6 inline-block rounded-lg px-6 py-3 text-lg font-semibold"
        >
          Оставить заявку на первичный отбор
        </Link>
      </section>

      <div className="mt-16">
        <BackButton />
      </div>
    </main>
  );
}
