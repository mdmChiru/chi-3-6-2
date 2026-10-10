const navItems = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#benefits", label: "Плюсы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#form", label: "Форма" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <a href="#hero" className="font-bold tracking-tight text-neutral-900">
          Vibe&nbsp;<span className="text-amber-500">Venture</span>
        </a>
        <nav aria-label="Навигация по странице">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-amber-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
