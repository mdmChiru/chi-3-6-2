import ApplicationForm from "@/components/ApplicationForm";

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

      <ApplicationForm />
    </section>
  );
}
