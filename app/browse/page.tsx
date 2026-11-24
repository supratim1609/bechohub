"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
    {
        href: "/browse?category=chemicals",
        src: "/images/chemicals_trade.png",
        alt: "Chemicals",
        title: "Chemicals & Solvents",
        subtitle: "Industrial solvents, reagents & specialty chemicals",
    },
    {
        href: "/browse?category=industrial",
        src: "/images/hero_industrial.png",
        alt: "Industrial goods",
        title: "Industrial Goods & Machinery",
        subtitle: "Equipment, components, tools & plant supplies",
    },
    {
        href: "/browse?category=construction",
        src: "/images/construction_materials.png",
        alt: "Construction materials",
        title: "Construction Materials",
        subtitle: "Structural steel, TMT bars, cement & raw supplies",
    },
    {
        href: "/browse?category=agriculture",
        src: "/images/agriculture_supplies.png",
        alt: "Agriculture",
        title: "Agri-Inputs & Commodities",
        subtitle: "Bulk fertilizers, feeds & commercial inputs",
    },
    {
        href: "/browse?category=textiles",
        src: "/images/textile_mill.png",
        alt: "Textiles",
        title: "Textiles & Yarns",
        subtitle: "Synthetic yarn, industrial fabrics & supplies",
    },
    {
        href: "/browse?category=electronics",
        src: "/images/electronics_electrical.png",
        alt: "Electronics",
        title: "Electrical & Components",
        subtitle: "Industrial electricals, switchgear & assemblies",
    },
];

export default function BrowsePage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = categories.filter((cat) => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        return cat.title.toLowerCase().includes(query) || cat.subtitle.toLowerCase().includes(query);
    });

    return (
        <div className="min-h-screen flex flex-col bg-zinc-950 text-[#f0f0fa] font-sans">
            <Navbar />

            <main className="flex-grow pt-36 md:pt-44 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-16"
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                            Initial Focus Sectors
                        </p>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mb-3">
                                    Supply categories in active development.
                                </h1>
                                <p className="text-sm text-zinc-400 max-w-xl">
                                    We are actively vetting Indian manufacturers and standardizing catalogs across these
                                    core industrial sectors ahead of marketplace launch.
                                </p>
                            </div>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 font-semibold text-sm transition-colors shrink-0"
                            >
                                Read Our Vision
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Functional Search Bar */}
                        <div className="relative flex items-center bg-zinc-900 border border-zinc-800 max-w-2xl px-4 py-3 focus-within:border-zinc-600 transition-colors">
                            <Search className="h-4 w-4 text-zinc-500 shrink-0 mr-3" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Filter focus sectors..."
                                className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 outline-none"
                                aria-label="Filter focus sectors"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="text-zinc-500 hover:text-white p-1 text-xs"
                                    aria-label="Clear search"
                                >
                                    <X className="h-3.5 w-3.5" />
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Category grid */}
                    {filteredCategories.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 mb-16">
                            {filteredCategories.map((cat, i) => (
                                <motion.div
                                    key={cat.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="group relative block h-56 md:h-72 bg-zinc-900 overflow-hidden">
                                        <Image
                                            src={cat.src}
                                            alt={cat.alt}
                                            fill
                                            className="object-cover opacity-40 grayscale transition-all duration-700 group-hover:opacity-70 group-hover:grayscale-0 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <h3 className="text-base font-semibold text-white mb-1">{cat.title}</h3>
                                            <p className="text-xs text-zinc-500">{cat.subtitle}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 border border-zinc-800 bg-zinc-900 text-center mb-16">
                            <p className="text-sm font-semibold text-white mb-2">No matching focus sectors found</p>
                            <p className="text-xs text-zinc-500 mb-4">
                                No sector matches &ldquo;{searchQuery}&rdquo; in our initial launch roster.
                            </p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-xs text-cyan-400 hover:underline"
                            >
                                View all focus sectors
                            </button>
                        </div>
                    )}

                    {/* Notice block */}
                    <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <p className="text-sm font-semibold text-white mb-1">
                                Pre-launch manufacturer onboarding underway
                            </p>
                            <p className="text-sm text-zinc-400">
                                We are engaging select primary producers in these categories ahead of public rollout.
                            </p>
                        </div>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
                        >
                            Learn About Our Standards
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
