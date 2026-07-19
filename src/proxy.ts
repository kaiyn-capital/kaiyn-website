import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

function mapChineseToken(tag: string): "zh-TW" | "zh-CN" | null {
  const lower = tag.toLowerCase();
  if (!lower.startsWith("zh")) return null;

  if (
    lower.includes("hant") ||
    lower === "zh-tw" ||
    lower.startsWith("zh-tw-") ||
    lower === "zh-hk" ||
    lower.startsWith("zh-hk-") ||
    lower === "zh-mo" ||
    lower.startsWith("zh-mo-")
  ) {
    return "zh-TW";
  }

  if (
    lower.includes("hans") ||
    lower === "zh-cn" ||
    lower.startsWith("zh-cn-") ||
    lower === "zh-sg" ||
    lower.startsWith("zh-sg-") ||
    lower === "zh-my" ||
    lower.startsWith("zh-my-")
  ) {
    return "zh-CN";
  }

  // Bare "zh" without script/region — fallback to zh-CN (larger global population).
  if (lower === "zh") return "zh-CN";

  return null;
}

function normalizeAcceptLanguage(header: string | null): string | null {
  if (!header) return header;
  return header
    .split(",")
    .map((entry) => {
      const [rawTag, ...params] = entry.trim().split(";");
      const mapped = mapChineseToken(rawTag.trim());
      return [mapped ?? rawTag.trim(), ...params].join(";");
    })
    .join(",");
}

export default function middleware(request: NextRequest) {
  const original = request.headers.get("accept-language");
  const normalized = normalizeAcceptLanguage(original);
  if (normalized && normalized !== original) {
    request.headers.set("accept-language", normalized);
  }
  return intlMiddleware(request);
}

export const config = {
  matcher:
    "/((?!(?:api|trpc|_next|_vercel|bitget|bg|binance|bn|telegram|tg|twitter|tweet|x)(?:/|$)|.*\\..*).*)",
};
