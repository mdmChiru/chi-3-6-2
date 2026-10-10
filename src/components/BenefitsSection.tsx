const benefits = [
  {
    title: "Микрогрант",
    text: "Безвозмездное финансирование на раннем этапе, чтобы вы могли сосредоточиться на продукте, а не на немедленном поиске денег.",
  },
  {
    title: "Продуктовая обратная связь",
    text: "Конкретный разбор прототипа или MVP: что уже работает, что лишнее, куда двигаться дальше. Не абстрактные советы, а практические шаги.",
  },
  {
    title: "Упаковка питча",
    text: "Поможем сформулировать проблему, решение и ценность для клиента так, чтобы питч был понятен инвесторам и первым заказчикам.",
  },
  {
    title: "Пилотные интро",
    text: "Первые знакомства с компаниями, которым может быть полезен ваш продукт, — шанс получить пилотного клиента уже на старте.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral-900">Плюсы</h2>
      <p className="mt-4 max-w-2xl text-neutral-700">
        Что получает команда ИИ-стартапа на ранней стадии, пройдя первичный
        отбор.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <li
            key={benefit.title}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h3 className="font-bold text-amber-600">{benefit.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{benefit.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
