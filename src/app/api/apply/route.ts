import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/schema";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { errors: { form: "Не удалось прочитать заявку. Попробуйте ещё раз." } },
      { status: 400 },
    );
  }

  const result = applicationSchema.safeParse(payload);

  if (!result.success) {
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path.join(".") || "form";
      // Первое сообщение об ошибке для каждого поля
      if (!errors[field]) errors[field] = issue.message;
    }
    return NextResponse.json({ errors }, { status: 400 });
  }

  // Сохранение заявки в базу будет добавлено в фазе 7
  return NextResponse.json({ status: "success" }, { status: 200 });
}
