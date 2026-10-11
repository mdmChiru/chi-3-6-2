import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="btn-ghost inline-flex items-center gap-2 rounded-xl px-7 py-3 font-semibold"
    >
      <span aria-hidden="true">←</span> Вернуться на главную
    </Link>
  );
}
