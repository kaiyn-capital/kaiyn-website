import type { NextRequest } from "next/server";
import type { RedirectLink } from "./redirect-links";

const SITE_ORIGIN = "https://kaiyn.org";

const BOT_RE =
  /bot|crawler|spider|facebookexternalhit|twitterbot|slackbot|discordbot|linkedinbot|telegrambot|whatsapp|line|kakao|embedly|pinterest|skype/i;

function buildOgHtml(link: RedirectLink): string {
  const pageUrl = `${SITE_ORIGIN}/${link.slug}`;
  const imageUrl = link.ogImage ? `${SITE_ORIGIN}${link.ogImage}` : null;
  const ogImageTags = imageUrl
    ? `
<meta property="og:image" content="${imageUrl}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">`
    : "";
  const twitterImageTag = imageUrl
    ? `
<meta name="twitter:image" content="${imageUrl}">`
    : "";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${link.title}</title>
<meta name="description" content="${link.description}">
<meta name="robots" content="noindex,follow">
<meta property="og:type" content="website">
<meta property="og:title" content="${link.title}">
<meta property="og:description" content="${link.description}">
<meta property="og:url" content="${pageUrl}">${ogImageTags}
<meta name="twitter:card" content="${imageUrl ? "summary_large_image" : "summary"}">
<meta name="twitter:title" content="${link.title}">
<meta name="twitter:description" content="${link.description}">${twitterImageTag}
</head>
<body></body>
</html>`;
}

export function createRedirectRoute(link: RedirectLink) {
  const ogHtml = buildOgHtml(link);

  return function GET(req: NextRequest) {
    const ua = req.headers.get("user-agent") ?? "";
    if (BOT_RE.test(ua)) {
      return new Response(ogHtml, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    return Response.redirect(link.target, 307);
  };
}
