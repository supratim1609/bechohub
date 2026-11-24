import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://bechohub.com"),
    title: {
        default: "bechoHub | Building India's Next B2B Trade Network (Pre-Launch)",
        template: "%s | bechoHub",
    },
    description:
        "bechoHub is an upcoming Indian B2B commerce and trade infrastructure platform connecting businesses with verified manufacturers and suppliers. Currently in pre-launch development.",
    keywords: [
        "B2B Marketplace India",
        "Indian Manufacturing Network",
        "Industrial Procurement Platform",
        "B2B Trade Infrastructure",
        "Chemicals Sourcing",
        "Construction Materials Procurement",
        "Factory Direct India",
    ],
    authors: [{ name: "bechoHub Team" }],
    creator: "bechoHub",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://bechohub.com",
        title: "bechoHub | Building India's Next B2B Trade Network (Pre-Launch)",
        description:
            "A new approach to connecting Indian businesses, discovering verified suppliers, and making trade transparent. In pre-launch development.",
        siteName: "bechoHub",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "bechoHub - Building India's Next B2B Trade Network",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "bechoHub | Building India's Next B2B Trade Network (Pre-Launch)",
        description:
            "A new approach to connecting Indian businesses, discovering verified suppliers, and making trade transparent. In pre-launch development.",
        creator: "@bechohub",
        images: ["/opengraph-image"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

import { Analytics } from "@vercel/analytics/react";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import { PHProvider } from "./providers";
import PostHogPageview from "./PostHogPageview";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <PHProvider>
                <body
                    className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased font-sans bg-zinc-950 text-[#f0f0fa] selection:bg-cyan-600/30 selection:text-white`}
                    suppressHydrationWarning
                >
                    <PostHogPageview />
                    <SmoothScroll>
                        <Preloader />
                        {children}
                        <Analytics />
                    </SmoothScroll>
                </body>
            </PHProvider>
        </html>
    );
}
