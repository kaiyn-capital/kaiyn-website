export interface RedirectLink {
  slug: string;
  target: string;
  title: string;
  description: string;
  ogImage?: string;
  aliases?: readonly string[];
}

// Every slug and alias needs a matching src/app/<path>/route.ts and a manual
// exclusion in the src/proxy.ts matcher (it must stay a static string).
// Alias routes reuse the canonical entry, so their OG og:url points at the
// canonical slug.
export const REDIRECT_LINKS = {
  binance: {
    slug: "binance",
    target: "https://www.binance.com/join?ref=148898758",
    title: "Binance Referral | kaiyn",
    description: "Sign up for Binance through kaiyn's referral link.",
    ogImage: "/og/binance.png",
    aliases: ["bn"],
  },
  bitget: {
    slug: "bitget",
    target: "https://partner.bitget.site/bg/JZQT5S",
    title: "Bitget Referral | kaiyn",
    description: "Sign up for Bitget through kaiyn's referral link.",
    ogImage: "/og/bitget.png",
    aliases: ["bg"],
  },
  telegram: {
    slug: "telegram",
    target: "https://t.me/kaiyncapital",
    title: "Telegram Community | kaiyn",
    description: "Join kaiyn's public Telegram community.",
    aliases: ["tg"],
  },
  twitter: {
    slug: "x",
    target: "https://x.com/kaiyncapital",
    title: "kaiyn on X",
    description: "Follow kaiyn on X.",
    aliases: ["twitter", "tweet"],
  },
} satisfies Record<string, RedirectLink>;
