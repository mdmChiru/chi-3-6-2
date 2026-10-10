import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-lg border-2 border-amber-500 px-6 py-2.5 font-semibold text-amber-600 transition-colors hover:bg-amber-50"
    >
      <span aria-hidden="true">←</span> Вернуться на главную
    </Link>
  );
}
