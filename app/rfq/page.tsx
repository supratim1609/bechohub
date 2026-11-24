"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RFQForm from "../components/RFQForm";
import { FadeIn } from "../components/Animators";

export default function PostRFQ() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-36 pb-24 px-6 relative">
                <div className="mx-auto max-w-3xl relative z-10">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
                                Pre-Launch Sourcing Specification
                            </p>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                                Submit Your Sourcing Parameters.
                            </h1>
                            <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                                Share the commodities, technical grades and volumes your organisation regularly
                                procures. This directly informs which manufacturers we curate and credential ahead of
                                marketplace launch.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <RFQForm />
                    </FadeIn>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-zinc-900 pt-12 text-xs text-zinc-500">
                        <div>
                            <div className="font-semibold text-zinc-300 mb-1">Direct Manufacturer Curation</div>
                            <div>Sourcing tailored to real industry demand</div>
                        </div>
                        <div>
                            <div className="font-semibold text-zinc-300 mb-1">Standardized Specifications</div>
                            <div>Clear technical grades & test criteria</div>
                        </div>
                        <div>
                            <div className="font-semibold text-zinc-300 mb-1">Priority Launch Matching</div>
                            <div>First access when your category opens</div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
