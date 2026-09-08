import { NextResponse } from "next/server";

function isIranianMobile(value: unknown): value is string {
  return typeof value === "string" && /^09\d{9}$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body || typeof body.name !== "string" || body.name.trim().length < 2 || !isIranianMobile(body.phone)) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  // STOP_BLOCKER: No clinic scheduling API/database credential has been provided.
  // Do not persist patient data until a real, approved backend and privacy policy are connected.
  return NextResponse.json({ ok: true, mode: "integration_pending" }, { status: 202 });
}
