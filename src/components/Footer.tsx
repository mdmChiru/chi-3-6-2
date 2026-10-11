const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "X (бывший Twitter)", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-bold text-foreground">Контакты</h3>
          <dl className="mt-3 space-y-1.5 text-sm text-neutral-600">
            <div>
              <dt className="inline text-neutral-400">Email: </dt>
              <dd className="inline">
                <a
                  href="mailto:hello@vibeventure.io"
                  className="transition-colors hover:text-amber-600"
                >
                  hello@vibeventure.io
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline text-neutral-400">Телефон: </dt>
              <dd className="inline">
                <a
                  href="tel:+79135209055"
                  className="transition-colors hover:text-amber-600"
                >
                  +7 (913) 520-90-55
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline text-neutral-400">Адрес: </dt>
              <dd className="inline">
                г. Новосибирск, ул. Красный проспект, 220, офис 415
              </dd>
            </div>
          </dl>

          <h3 className="mt-6 text-lg font-bold text-foreground">
            Социальные сети
          </h3>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-medium text-amber-600 transition-colors hover:text-amber-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm leading-relaxed text-neutral-600">
            Присоединяйтесь к сообществу инновационных стартапов!
          </p>
          <a
            href="#form"
            className="btn-primary mt-5 inline-block w-fit rounded-lg px-6 py-3 font-semibold"
          >
            Оставить заявку
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-200/70">
        <p className="mx-auto max-w-5xl px-6 py-4 text-xs text-neutral-400">
          © 2026 Vibe Venture. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
