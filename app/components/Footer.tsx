import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
                    {/* Brand */}
                    <div className="max-w-xs space-y-4">
                        <Link href="/" className="text-2xl font-black tracking-tight text-white font-heading block">
                            becho<span className="text-cyan-500">Hub</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            An upcoming Indian B2B trade infrastructure platform connecting businesses with verified
                            manufacturers, wholesalers and distributors.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16 md:gap-24">
                        <div className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Platform</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: "Focus Areas", href: "/browse" },
                                    { label: "How It Works", href: "/#how-it-works" },
                                    { label: "Our Vision", href: "/about" },
                                ].map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-sm text-zinc-500 hover:text-white transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                                Company & Legal
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { label: "About bechoHub", href: "/about" },
                                    { label: "Privacy Policy", href: "/privacy" },
                                    { label: "Terms of Use", href: "/terms" },
                                ].map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-sm text-zinc-500 hover:text-white transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-700">
                        &copy; 2026 bechoHub. Pre-launch development. India operations.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-zinc-700">
                        <span>Verification architecture in development</span>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
