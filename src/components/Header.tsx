import Link from "next/link";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/#about", label: "О нас" },
  { href: "/#benefits", label: "Плюсы" },
  { href: "/#faq", label: "Вопросы" },
  { href: "/#form", label: "Форма" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-foreground"
        >
          Vibe&nbsp;<span className="text-amber-500">Venture</span>
        </Link>
        <nav aria-label="Навигация по странице">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-neutral-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
