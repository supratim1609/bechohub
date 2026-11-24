"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, Info } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const nextUrl = searchParams.get("next");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        if (!email || !password) {
            setError("Please enter your email and password.");
            setIsLoading(false);
            return;
        }
        const { loginWithRoles } = await import("../actions/loginWithRoles");
        const result = await loginWithRoles(email, password);
        setIsLoading(false);
        if (result.error) {
            setError(result.error);
            return;
        }
        if (result.roles && result.roles.length === 1) {
            localStorage.setItem("lastRole", result.roles[0]);
            if (nextUrl && nextUrl.startsWith("/")) {
                router.replace(nextUrl);
            } else {
                router.replace(`/${result.roles[0]}`);
            }
        } else if (result.roles && result.roles.length > 1) {
            const redirectUrl = nextUrl ? `/role-selection?next=${encodeURIComponent(nextUrl)}` : "/role-selection";
            router.replace(redirectUrl);
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans flex flex-col">
            {/* Top bar */}
            <div className="sticky top-0 z-50 w-full px-6 py-5 flex justify-between items-center border-b border-zinc-900 bg-zinc-950">
                <Link
                    href="/"
                    className="text-xl font-black tracking-tight text-white font-heading hover:opacity-75 transition-opacity"
                >
                    becho<span className="text-cyan-500">Hub</span>
                </Link>
                <Link href="/about" className="text-sm text-zinc-500 hover:text-white transition-colors">
                    Our Vision
                </Link>
            </div>

            <main className="flex-1 flex items-center justify-center px-6 py-16">
                <div className="w-full max-w-sm">
                    {/* Pre-launch partner notice */}
                    <div className="mb-8 p-3.5 bg-zinc-900 border border-zinc-800 flex items-start gap-3">
                        <Info className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            bechoHub is currently in pre-launch. Sign-in is reserved for founding partners and internal
                            team members.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Partner Sign in</h1>
                        <p className="text-sm text-zinc-500">Access pre-launch onboarding console.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-500 block">Work Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full bg-zinc-900 border border-zinc-800 py-3.5 pl-11 pr-4 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/10 outline-none transition-all text-white placeholder:text-zinc-700 text-sm"
                                    required
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-medium text-zinc-500">Password</label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-zinc-600 hover:text-cyan-400 transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your password"
                                    className="w-full bg-zinc-900 border border-zinc-800 py-3.5 pl-11 pr-11 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/10 outline-none transition-all text-white placeholder:text-zinc-700 text-sm"
                                    required
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                                    tabIndex={-1}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {error && <p className="text-sm text-red-400">{error}</p>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors duration-200 mt-2"
                        >
                            {isLoading ? "Signing in…" : "Sign in"}
                        </button>
                    </form>

                    <p className="text-xs text-zinc-500 text-center mt-8">
                        Interested in our mission?{" "}
                        <Link href="/about" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                            Read Our Vision
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-zinc-800 border-t-cyan-500 rounded-full animate-spin" />
                </div>
            }
        >
            <LoginForm />
        </Suspense>
    );
}
