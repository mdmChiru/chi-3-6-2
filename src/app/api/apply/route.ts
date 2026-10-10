import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/schema";
import { saveApplication } from "@/lib/database";

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

  // Сохраняем заявку в SQLite только после успешной валидации Zod
  try {
    const id = saveApplication(result.data);
    return NextResponse.json({ status: "success", id }, { status: 200 });
  } catch (error) {
    // Ошибка БД не должна маскироваться под успех
    console.error("Ошибка при сохранении заявки в БД:", error);
    return NextResponse.json(
      { error: "Не получилось сохранить заявку. Попробуйте ещё раз." },
      { status: 500 },
    );
  }
}
