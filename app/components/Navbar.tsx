"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Focus Areas", href: "/browse" },
        { name: "How It Works", href: "/#how-it-works" },
    ];

    return (
        <nav className="fixed w-full top-0 left-0 z-50 pointer-events-none flex justify-center px-4 md:px-6 pt-4 md:pt-6">
            <motion.div
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto w-full flex items-center justify-between px-5 md:px-8 py-3.5 transition-all duration-500",
                    isScrolled
                        ? "max-w-5xl bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                        : "max-w-7xl bg-transparent border border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-lg font-black tracking-tight text-white font-heading group-hover:opacity-75 transition-opacity duration-300">
                        becho<span className="text-cyan-500">Hub</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Action */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/about"
                        className="text-xs font-semibold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 px-5 py-2.5 transition-colors duration-200"
                    >
                        Our Vision
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-zinc-400 hover:text-white p-2 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed top-20 left-4 right-4 bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col pointer-events-auto"
                    >
                        <div className="flex flex-col">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 px-6 py-4 transition-colors",
                                        i > 0 && "border-t border-zinc-900"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="border-t border-zinc-800 p-4">
                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full block py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-center text-xs font-semibold uppercase tracking-wider border border-zinc-700 transition-colors"
                            >
                                Our Vision
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
