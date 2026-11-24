"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animators";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans">
            <Navbar />

            <main className="pt-36 md:pt-48 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <FadeIn>
                        <div className="mb-28 max-w-4xl">
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
                                Pre-Launch Manifesto
                            </p>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8">
                                Building infrastructure for{" "}
                                <span className="text-zinc-400">India&apos;s B2B trade.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
                                bechoHub is an upcoming B2B trade infrastructure platform connecting businesses with
                                verified manufacturers, wholesalers and distributors across India. We are currently in
                                our pre-launch phase.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Mission block */}
                    <FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 mb-28">
                            <div className="bg-zinc-950 p-12 md:p-16">
                                <h2 className="text-xl font-semibold text-white mb-5">
                                    The problem we&apos;re solving
                                </h2>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    B2B procurement in India has long depended on personal networks, unverified contacts
                                    and manual phone inquiries. Finding the right supplier is slow. Verifying their
                                    technical credibility is harder. Comparing pricing is nearly impossible. The result
                                    is inefficiency, opacity and unnecessary risk across the industrial supply chain.
                                </p>
                            </div>
                            <div className="bg-zinc-900 p-12 md:p-16">
                                <h2 className="text-xl font-semibold text-white mb-5">What we&apos;re building</h2>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    bechoHub introduces structure and transparency to B2B commerce. Verified supplier
                                    profiles, standardized product catalogs, structured RFQs and quotation workflows,
                                    and end-to-end purchase order tracking—all delivered through a modern, asset-light
                                    digital platform.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Focus areas */}
                    <FadeIn>
                        <div className="mb-28">
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-10">
                                Initial focus sectors in development
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
                                {[
                                    {
                                        title: "Chemicals & Solvents",
                                        body: "Industrial chemicals, specialty solvents and technical reagents sourced from verified manufacturing facilities.",
                                    },
                                    {
                                        title: "Industrial Goods & Machinery",
                                        body: "Components, precision tooling, plant spares and industrial supplies from verified distributors and OEMs.",
                                    },
                                    {
                                        title: "Construction Materials",
                                        body: "Structural steel, TMT rebars, cement, aggregates and raw materials from verified primary producers.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-zinc-950 hover:bg-zinc-900 transition-colors duration-300 p-10"
                                    >
                                        <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Principles */}
                    <FadeIn>
                        <div className="mb-28">
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-10">
                                Our founding principles
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        n: "01",
                                        title: "Trust before transactions",
                                        body: "Supplier verification is not an afterthought—it is the foundation. Every business will undergo rigorous credentialing before listing products or receiving inquiries.",
                                    },
                                    {
                                        n: "02",
                                        title: "Structure reduces friction",
                                        body: "Standardized product information, structured RFQs and consistent quotation formats eliminate ambiguity and accelerate purchasing decisions.",
                                    },
                                    {
                                        n: "03",
                                        title: "Built for both sides",
                                        body: "A trade platform only works when it serves buyers and suppliers equally well. Our workflows are designed from the ground up for both perspectives.",
                                    },
                                    {
                                        n: "04",
                                        title: "Asset-light by design",
                                        body: "bechoHub does not own inventory or operate warehouses. We build the technology, workflows and trust infrastructure that enable commerce.",
                                    },
                                ].map((item) => (
                                    <div key={item.n} className="flex gap-6 p-8 bg-zinc-900 border border-zinc-800">
                                        <span className="text-xs font-mono font-semibold text-zinc-700 mt-0.5 shrink-0">
                                            {item.n}
                                        </span>
                                        <div>
                                            <h4 className="text-base font-semibold text-white mb-2.5">{item.title}</h4>
                                            <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* CTA */}
                    <FadeIn>
                        <div className="bg-zinc-900 border border-zinc-800 p-12 md:p-16">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                                <div className="max-w-lg">
                                    <h3 className="text-2xl font-bold text-white mb-3">Be part of what&apos;s next.</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Explore the industrial supply sectors we are actively preparing ahead of our
                                        public launch.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                                    <Link
                                        href="/browse"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-colors"
                                    >
                                        Explore Focus Sectors
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="/"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-semibold text-sm hover:border-zinc-500 transition-colors"
                                    >
                                        Return to Overview
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}
