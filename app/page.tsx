"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

const categories = [
    {
        href: "/browse?category=chemicals",
        src: "/images/chemicals_trade.png",
        alt: "Industrial chemicals",
        title: "Chemicals",
        subtitle: "Industrial & specialty chemicals",
    },
    {
        href: "/browse?category=industrial",
        src: "/images/hero_industrial.png",
        alt: "Industrial goods",
        title: "Industrial Goods",
        subtitle: "Machinery, components & supplies",
    },
    {
        href: "/browse?category=construction",
        src: "/images/construction_materials.png",
        alt: "Construction materials",
        title: "Construction",
        subtitle: "Materials & building supplies",
    },
    {
        href: "/browse?category=agriculture",
        src: "/images/agriculture_supplies.png",
        alt: "Agriculture supplies",
        title: "Agriculture",
        subtitle: "Seeds, fertilizers & farm supplies",
    },
    {
        href: "/browse?category=textiles",
        src: "/images/textile_mill.png",
        alt: "Textiles",
        title: "Textiles",
        subtitle: "Fabrics, yarn & garment supplies",
    },
];

const plannedSteps = [
    {
        n: "01",
        title: "Verified Discovery",
        body: "Direct discovery of verified manufacturers, wholesalers and distributors across key industrial clusters, free from opaque intermediaries.",
    },
    {
        n: "02",
        title: "Structured RFQs & Quotes",
        body: "Standardized technical specifications, comparable price structures, and transparent timelines that remove ambiguity from quoting.",
    },
    {
        n: "03",
        title: "Accountable Fulfilment",
        body: "Clear digital purchase orders, delivery milestone tracking, and documented compliance for every commercial transaction.",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans overflow-x-hidden">
            <Navbar />

            <main>
                <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-zinc-950">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Image
                            src="/images/hero_industrial.png"
                            alt="Industrial scale B2B trade"
                            fill
                            className="object-cover opacity-20 grayscale mix-blend-luminosity"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6 md:mb-8">
                                The Next Chapter of Indian B2B Trade
                            </p>

                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.04] max-w-4xl mb-6 md:mb-8">
                                India&apos;s next trade network <br />
                                <span className="text-zinc-400">is being built.</span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 md:mb-12 font-normal">
                                A new approach to connecting businesses, discovering suppliers and making trade more
                                transparent. We&apos;re building something different.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-colors duration-200 w-full sm:w-auto"
                                >
                                    Discover Our Vision
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                                <Link
                                    href="/browse"
                                    className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 border border-zinc-700 text-white font-semibold text-sm hover:border-zinc-500 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto"
                                >
                                    Explore Focus Areas
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 border-t border-zinc-900 pt-8 text-xs text-zinc-500 font-medium"
                        >
                            <span>Rigorous supplier credentialing by design</span>
                            <span className="text-zinc-800 hidden sm:inline">/</span>
                            <span>Standardized RFQ & quotation protocols</span>
                            <span className="text-zinc-800 hidden sm:inline">/</span>
                            <span>Initial focus: Chemicals · Industrial · Construction</span>
                        </motion.div>
                    </div>
                </section>

                <section id="how-it-works" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <FadeIn className="mb-14 md:mb-20 max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 md:mb-4">
                                Planned Workflow
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 md:mb-4">
                                Procurement designed for structure and transparency.
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                How business trade will execute on bechoHub when the platform opens for commercial
                                onboarding.
                            </p>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
                            {plannedSteps.map((step, i) => (
                                <FadeIn key={step.n} delay={i * 0.1}>
                                    <div className="bg-zinc-950 p-8 sm:p-10 md:p-12 hover:bg-zinc-900 transition-colors duration-300 h-full">
                                        <span className="block text-xs font-mono font-semibold text-zinc-600 mb-6">
                                            {step.n}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 md:mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{step.body}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="categories" className="py-20 md:py-32 bg-zinc-950 border-t border-zinc-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <FadeIn className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 md:mb-4">
                                    Focus Sectors
                                </p>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                                    Initial categories in development.
                                </h2>
                                <p className="text-sm text-zinc-500 max-w-xl">
                                    We are curating vetted manufacturers and standardizing product catalogs across these
                                    core supply sectors ahead of launch.
                                </p>
                            </div>
                            <Link
                                href="/browse"
                                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group shrink-0"
                            >
                                Explore Our Focus Areas
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-800">
                            {categories.map((cat, i) => (
                                <FadeIn key={cat.href} delay={i * 0.05}>
                                    <Link
                                        href={cat.href}
                                        className="group relative block aspect-[4/5] sm:aspect-[3/4] bg-zinc-900 overflow-hidden"
                                    >
                                        <Image
                                            src={cat.src}
                                            alt={cat.alt}
                                            fill
                                            className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-5">
                                            <h3 className="text-sm font-semibold text-white mb-1">{cat.title}</h3>
                                            <p className="text-[11px] text-zinc-500 leading-tight">{cat.subtitle}</p>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <FadeIn>
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 md:mb-6">
                                    Our Philosophy
                                </p>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-snug">
                                    The old way is broken.
                                    <br />
                                    <span className="text-zinc-400">We&apos;re building the infrastructure.</span>
                                </h2>
                                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 md:mb-10">
                                    Traditional B2B procurement in India relies on personal networks, unverified
                                    contacts and phone calls. It&apos;s slow, opaque and difficult to scale. bechoHub is
                                    engineering a trust-first digital rail connecting verified enterprises across the
                                    country.
                                </p>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors group"
                                >
                                    Read our manifesto
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </FadeIn>

                            <FadeIn delay={0.12}>
                                <div className="space-y-px bg-zinc-800">
                                    {[
                                        {
                                            label: "01",
                                            title: "Verification by design",
                                            body: "Developing strict business credentialing and documentation standards before any supplier can list or quote.",
                                        },
                                        {
                                            label: "02",
                                            title: "Standardized product catalogs",
                                            body: "Building consistent digital specifications to eliminate ambiguous inquiries and price disputes.",
                                        },
                                        {
                                            label: "03",
                                            title: "Asset-light infrastructure",
                                            body: "Engineering software and workflow rails that facilitate trade at scale without warehouse or inventory burdens.",
                                        },
                                    ].map((item) => (
                                        <div key={item.title} className="p-6 sm:p-7 bg-zinc-900">
                                            <div className="flex items-baseline justify-between mb-2">
                                                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                                                <span className="text-[11px] font-mono text-zinc-600">
                                                    {item.label}
                                                </span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                <section className="relative py-20 md:py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <Image
                            src="/images/container_ship.png"
                            alt="Global logistics"
                            fill
                            className="object-cover opacity-15 grayscale mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <FadeIn>
                            <div className="max-w-2xl mb-12 md:mb-16">
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 md:mb-6">
                                    Upcoming Platform
                                </p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">
                                    Be part of India&apos;s next trade infrastructure.
                                </h2>
                                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                                    We are currently collaborating with select founding manufacturing partners and
                                    enterprise procurement teams ahead of public launch.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 max-w-3xl">
                                <div className="bg-zinc-950 hover:bg-zinc-900 transition-colors duration-300 p-8 sm:p-10">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 md:mb-4">
                                        For buyers
                                    </p>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 md:mb-3">
                                        Enterprise Sourcing
                                    </h3>
                                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-6 md:mb-8">
                                        Learn how our standardized procurement workflows will help your team source
                                        directly from verified Indian producers.
                                    </p>
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center min-h-[44px] text-sm font-semibold text-white hover:text-cyan-400 transition-colors group"
                                    >
                                        Read Our Approach
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                <div className="bg-zinc-950 hover:bg-zinc-900 transition-colors duration-300 p-8 sm:p-10">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 md:mb-4">
                                        For suppliers
                                    </p>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 md:mb-3">
                                        Manufacturing Partners
                                    </h3>
                                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-6 md:mb-8">
                                        Explore the sectors we are opening and our criteria for founding manufacturer
                                        onboarding.
                                    </p>
                                    <Link
                                        href="/browse"
                                        className="inline-flex items-center min-h-[44px] text-sm font-semibold text-white hover:text-cyan-400 transition-colors group"
                                    >
                                        View Focus Sectors
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
