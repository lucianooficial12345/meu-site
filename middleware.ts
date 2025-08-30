import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")

  if (
    request.nextUrl.pathname.includes("/images/") ||
    request.nextUrl.pathname.includes(".jpg") ||
    request.nextUrl.pathname.includes(".png") ||
    request.nextUrl.pathname.includes(".gif")
  ) {
    const referer = request.headers.get("referer")
    if (referer && !referer.includes(request.nextUrl.hostname)) {
      return new NextResponse("Forbidden", { status: 403 })
    }
  }

  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"
  const userAgent = request.headers.get("user-agent") || ""

  // Bloquear bots suspeitos
  const suspiciousBots = ["curl", "wget", "python", "scrapy", "bot"]
  if (suspiciousBots.some((bot) => userAgent.toLowerCase().includes(bot))) {
    return new NextResponse("Forbidden", { status: 403 })
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
