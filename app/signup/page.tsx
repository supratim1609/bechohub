"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Factory,
    ShoppingBag,
    Building2,
    User,
    ShieldCheck,
    ChevronLeft,
    Briefcase,
    Smartphone,
    BadgeCheck,
    Loader2,
    Eye,
    EyeOff,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { Suspense } from "react";
import FormSuccess from "../components/FormSuccess";
import { INDUSTRY_CATEGORIES } from "@/constants";

function SignUpForm() {
    const searchParams = useSearchParams();
    const initialType = searchParams.get("type") as "buyer" | "seller" | null;

    const [step, setStep] = useState(1);
    const posthog = usePostHog();
    const [userType, setUserType] = useState<"buyer" | "seller" | null>(initialType);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        companyName: "",
        gstNumber: "",
        category: "",
        businessScale: "",
    });

    const totalSteps = 3;

    const nextStep = () => {
        setStep((s) => {
            const next = Math.min(s + 1, totalSteps + 1);
            posthog.capture("signup_step_next", {
                from_step: s,
                to_step: next,
                user_type: userType,
            });
            return next;
        });
    };

    const prevStep = () => {
        setStep((s) => {
            const prev = Math.max(s - 1, 1);
            posthog.capture("signup_step_prev", {
                from_step: s,
                to_step: prev,
            });
            return prev;
        });
    };

    const handleFinalSubmit = async () => {
        setIsSubmitting(true);

        const data = new FormData();
        data.append("email", formData.email);
        data.append("password", formData.password);
        data.append("firstName", formData.firstName);
        data.append("companyName", formData.companyName);
        data.append("role", userType || "buyer");
        data.append("category", formData.category);
        data.append("businessScale", formData.businessScale);
        data.append("gstNumber", formData.gstNumber);

        const { signup } = await import("../actions/auth");
        const result = await signup(null, data);

        setIsSubmitting(false);

        if (result?.error) {
            alert("Error: " + result.error);
            posthog.capture("signup_failed", {
                error: result.error,
                user_type: userType,
            });
        } else {
            posthog.capture("signup_success", {
                user_type: userType,
                email: formData.email,
            });
            posthog.identify(formData.email, {
                email: formData.email,
                firstName: formData.firstName,
                name: `${formData.firstName} ${formData.lastName}`,
                company: formData.companyName,
                role: userType,
            });
            setStep(4);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^\+?[0-9\s-]{10,}$/.test(phone);

    const isStepValid = () => {
        if (step === 1) return true;
        if (step === 2) {
            return (
                formData.firstName &&
                isValidEmail(formData.email) &&
                isValidPhone(formData.phone) &&
                formData.password &&
                formData.password.length >= 6
            );
        }
        if (step === 3) return formData.companyName && formData.category && formData.businessScale;
        return true;
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-[#f0f0fa] font-sans selection:bg-cyan-600/30 selection:text-white overflow-hidden flex flex-col relative z-0">
            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 w-full px-6 py-5 flex justify-between items-center bg-zinc-950 border-b border-zinc-900">
                <Link
                    href="/"
                    className="text-xl font-black tracking-tight text-white font-heading hover:opacity-75 transition-opacity"
                >
                    becho<span className="text-cyan-500">Hub</span>
                </Link>
                {step <= totalSteps && (
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-600 mr-2 font-medium">
                            Step {step} of {totalSteps}
                        </span>
                        {Array.from({ length: totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 transition-all duration-500 ${
                                    i + 1 <= step ? "w-8 bg-cyan-500" : "w-4 bg-zinc-800"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </header>

            <main className="flex-1 flex items-center justify-center p-6 relative">
                <AnimatePresence mode="wait">
                    {/* Step 1: Welcome & Role */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-4xl text-center"
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                                Founding Partner Enrollment
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                                Early Access & Partner Registration
                            </h2>
                            <p className="text-zinc-500 text-sm md:text-base mb-12 max-w-xl mx-auto leading-relaxed">
                                bechoHub is currently in pre-launch. Select your organisation&apos;s role to reserve
                                priority onboarding before public launch.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
                                <button
                                    onClick={() => {
                                        setUserType("buyer");
                                        setTimeout(nextStep, 150);
                                    }}
                                    className="group p-10 md:p-14 bg-zinc-950 hover:bg-zinc-900 transition-all text-left relative overflow-hidden active:scale-[0.98]"
                                >
                                    <div className="h-14 w-14 bg-zinc-900 flex items-center justify-center mb-8 border border-zinc-800 group-hover:bg-cyan-950 group-hover:border-cyan-900 transition-colors">
                                        <ShoppingBag className="h-7 w-7 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                        Enterprise Buyer
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        Procurement teams looking to source commodities from verified Indian
                                        manufacturers with standardized quoting.
                                    </p>
                                    <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-cyan-500">
                                        Register as Buyer →
                                    </div>
                                </button>

                                <button
                                    onClick={() => {
                                        setUserType("seller");
                                        setTimeout(nextStep, 150);
                                    }}
                                    className="group p-10 md:p-14 bg-zinc-950 hover:bg-zinc-900 transition-all text-left relative overflow-hidden active:scale-[0.98]"
                                >
                                    <div className="h-14 w-14 bg-zinc-900 flex items-center justify-center mb-8 border border-zinc-800 group-hover:bg-cyan-950 group-hover:border-cyan-900 transition-colors">
                                        <Factory className="h-7 w-7 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                        Verified Manufacturer / Supplier
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        Primary manufacturers and authorized distributors seeking access to verified
                                        commercial demand.
                                    </p>
                                    <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-cyan-500">
                                        Register as Supplier →
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Personal Identity */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-md"
                        >
                            <button
                                onClick={prevStep}
                                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 text-xs font-medium py-1"
                            >
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
                                Representative Details
                            </h2>
                            <p className="text-zinc-500 text-sm mb-10">
                                Contact details for your organisation&apos;s trade lead.
                            </p>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-4 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Work Email
                                    </label>
                                    <div className="relative group">
                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-4 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium text-sm"
                                        />
                                        {formData.email && !isValidEmail(formData.email) && (
                                            <p className="text-red-500 text-xs mt-1.5 ml-2">
                                                Please enter a valid business email
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Phone Number
                                    </label>
                                    <div className="relative group">
                                        <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-4 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Access Key / Password
                                    </label>
                                    <div className="relative group">
                                        <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Min. 6 characters"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-4 pl-14 pr-12 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium text-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-cyan-500 transition-colors"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className="w-full mt-10 py-4 bg-cyan-600 text-white font-semibold uppercase tracking-wider hover:bg-cyan-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                            >
                                Continue to Enterprise Details
                            </button>
                            <p className="text-xs text-zinc-600 text-center mt-4">
                                Already registered as a partner?{" "}
                                <Link href="/login" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                                    Sign in
                                </Link>
                            </p>
                        </motion.div>
                    )}

                    {/* Step 3: Business Identity */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-md"
                        >
                            <button
                                onClick={prevStep}
                                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 text-xs font-medium py-1"
                            >
                                <ChevronLeft className="h-4 w-4" /> Go Back
                            </button>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
                                Enterprise Details
                            </h2>
                            <p className="text-zinc-500 text-sm mb-10">
                                Specify your organisation credentials for pre-launch verification.
                            </p>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Registered Entity Name
                                    </label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            placeholder="Acme Manufacturing Pvt Ltd"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-4 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Primary Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full bg-zinc-900 border border-zinc-900 py-4 px-5 focus:border-cyan-600 outline-none text-white text-sm"
                                    >
                                        <option value="">Select Primary Sector</option>
                                        {INDUSTRY_CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                                            <option key={c.id} value={c.id}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        Expected Trade Volume
                                    </label>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        {["< 10 Lakhs", "10L - 1 Crore", "1Cr - 10 Crore", "10 Crore+"].map((scale) => (
                                            <button
                                                key={scale}
                                                type="button"
                                                onClick={() =>
                                                    setFormData((prev) => ({ ...prev, businessScale: scale }))
                                                }
                                                className={`py-3 px-3 text-xs font-medium transition-all ${
                                                    formData.businessScale === scale
                                                        ? "bg-cyan-600 text-white"
                                                        : "bg-zinc-900 text-zinc-400 hover:text-white"
                                                }`}
                                            >
                                                {scale}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                        GSTIN (Optional for Pre-Launch)
                                    </label>
                                    <div className="relative group">
                                        <BadgeCheck className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                                        <input
                                            name="gstNumber"
                                            value={formData.gstNumber}
                                            onChange={handleInputChange}
                                            placeholder="22AAAAA0000A1Z5"
                                            className="w-full bg-zinc-900 border border-zinc-900 py-4 pl-14 pr-5 focus:bg-zinc-900 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all text-white placeholder:text-zinc-600 font-medium text-sm uppercase"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleFinalSubmit}
                                disabled={!isStepValid() || isSubmitting}
                                className="w-full mt-10 py-4 bg-cyan-600 text-white font-semibold uppercase tracking-wider hover:bg-cyan-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xs flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    "Submit Priority Registration"
                                )}
                            </button>
                        </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <FormSuccess
                            title={
                                <span>
                                    <span className="block font-heading text-white tracking-[0.08em] uppercase leading-tight mb-0">
                                        Pre-Launch
                                    </span>
                                    <span className="block font-heading text-white tracking-[0.08em] uppercase leading-tight">
                                        Registration Received.
                                    </span>
                                </span>
                            }
                            subtitle="Thank you for registering. Your organisation has been added to our pre-launch priority queue. Our founding team will contact you before category onboarding opens."
                            actionLabel="Return to Overview"
                            actionLink="/"
                        />
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

export default function SignUp() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-zinc-800 border-t-cyan-500 rounded-full animate-spin" />
                </div>
            }
        >
            <SignUpForm />
        </Suspense>
    );
}
