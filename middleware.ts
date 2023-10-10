import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
): Promise<Response | undefined> {
  const ip = request.ip ?? "127.0.0.1";

  const url = new URL("/ip", request.url);

  url.searchParams.set("ip", ip);

  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
