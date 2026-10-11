import ApplicationForm from "@/components/ApplicationForm";

export default function FormSection() {
  return (
    <section id="form" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
          Заявка на первичный отбор
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
          Расскажите о проекте в одной заявке — этого достаточно, чтобы мы
          поняли, чем можем быть полезны. Отправить заявку можно один раз.
        </p>

        <ApplicationForm />
      </div>
    </section>
  );
}
