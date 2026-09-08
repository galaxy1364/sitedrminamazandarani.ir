import { NextResponse } from "next/server";

const allowedServices = new Set(["ایمپلنت", "جراحی", "زیبایی", "ترمیم و روکش", "ویزیت تخصصی"]);
const allowedTimes = new Set(["صبح", "ظهر", "عصر"]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: "INVALID_JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, code: "INVALID_PAYLOAD" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const service = typeof data.service === "string" ? data.service : "";
  const preferredTime = typeof data.preferredTime === "string" ? data.preferredTime : "";
  const note = typeof data.note === "string" ? data.note.trim() : "";

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ ok: false, code: "INVALID_NAME" }, { status: 422 });
  }
  if (!/^09\d{9}$/.test(phone)) {
    return NextResponse.json({ ok: false, code: "INVALID_PHONE" }, { status: 422 });
  }
  if (!allowedServices.has(service) || !allowedTimes.has(preferredTime) || note.length > 1000) {
    return NextResponse.json({ ok: false, code: "INVALID_SELECTION" }, { status: 422 });
  }

  return NextResponse.json(
    {
      ok: false,
      code: "CLINIC_INTEGRATION_NOT_CONFIGURED",
      message: "سامانه نوبت‌دهی کلینیک هنوز به API واقعی متصل نشده است و هیچ داده‌ای ذخیره نشد."
    },
    { status: 503 }
  );
}
