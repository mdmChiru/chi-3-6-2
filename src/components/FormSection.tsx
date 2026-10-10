export default function FormSection() {
  return (
    <section id="form" className="px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral-900">
        Заявка на первичный отбор
      </h2>

      <p className="mt-4 max-w-2xl text-neutral-700">
        Расскажите о проекте в одной заявке — этого достаточно, чтобы мы
        поняли, чем можем быть полезны. Отправить заявку можно один раз.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-neutral-900">
        Что потребуется указать:
      </h3>
      <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-neutral-700">
        <li>ваше имя и контакт для связи;</li>
        <li>название проекта и его текущую стадию (идея, прототип, MVP);</li>
        <li>
          короткое описание проблемы, которую решает продукт, — в двух-трёх
          предложениях;
        </li>
        <li>
          ссылку на демо или репозиторий —{" "}
          <span className="text-neutral-500">необязательно, но поможет</span>.
        </li>
      </ul>

      <h3 className="mt-8 text-lg font-semibold text-neutral-900">
        Что вы получите:
      </h3>
      <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-neutral-700">
        <li>рассмотрение заявки нашей командой в течение нескольких дней;</li>
        <li>ответ по итогам первичного отбора;</li>
        <li>
          при прохождении отбора — приглашение на созвон и разбор проекта.
        </li>
      </ul>

      {/* Рабочий компонент формы заявки будет добавлен в фазе 5 */}
    </section>
  );
}
