export interface RedirectLink {
  slug: string;
  target: string;
  title: string;
  description: string;
  ogImage?: string;
}

// Every entry needs a matching src/app/<slug>/route.ts and a manual
// exclusion in the src/proxy.ts matcher (it must stay a static string).
export const REDIRECT_LINKS = {
  binance: {
    slug: "binance",
    target: "https://www.binance.com/join?ref=148898758",
    title: "Binance Referral | kaiyn",
    description: "Sign up for Binance through kaiyn's referral link.",
    ogImage: "/og/binance.png",
  },
  bitget: {
    slug: "bitget",
    target: "https://partner.bitget.site/bg/JZQT5S",
    title: "Bitget Referral | kaiyn",
    description: "Sign up for Bitget through kaiyn's referral link.",
    ogImage: "/og/bitget.png",
  },
  telegram: {
    slug: "telegram",
    target: "https://t.me/kaiyncapital",
    title: "Telegram Community | kaiyn",
    description: "Join kaiyn's public Telegram community.",
  },
  twitter: {
    slug: "x",
    target: "https://x.com/kaiyncapital",
    title: "kaiyn on X",
    description: "Follow kaiyn on X.",
  },
} satisfies Record<string, RedirectLink>;
