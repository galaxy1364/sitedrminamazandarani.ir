import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      code: "CLINIC_INTEGRATION_NOT_CONFIGURED",
      message: "رزرو آنلاین تا زمان اتصال سامانه رسمی غیرفعال است و هیچ داده بیماری پردازش یا ذخیره نمی‌شود."
    },
    {
      status: 503,
      headers: {
        "Cache-Control": "no-store, max-age=0"
      }
    }
  );
}
