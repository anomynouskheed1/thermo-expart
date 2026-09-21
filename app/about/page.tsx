"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Target, Eye } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-navy text-white pt-24 pb-28 border-t border-white/10 selection:bg-cyan selection:text-navy">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* 1. Strong Hero Section */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 mb-3"
                    >
                        <span className="h-px w-8 bg-cyan" />
                        <p className="label-technical text-cyan text-xs">CORPORATE PROFILE</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-heading font-semibold text-4xl md:text-6xl lg:text-[5.2rem] leading-[0.95] tracking-[-0.03em] max-w-5xl"
                    >
                        ENGINEERING <br />
                        <span className="text-white/40">THE BUILT ENVIRONMENT.</span>
                    </motion.h1>
                </div>

                {/* 2. Construction/Engineering Imagery (Hero Feature Image) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#151c24] border border-white/15 overflow-hidden mb-20"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d0fbb18f864e?q=80&w=1600&auto=format&fit=crop"
                        alt="Thermo Expert Engineering Site"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-navy/20" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-navy/80 backdrop-blur-md border border-white/15 flex items-center justify-between font-mono text-xs">
                        <span className="text-cyan">SITE LOCATION // NAIROBI METRO</span>
                        <span className="text-white/60">STRUCTURAL INTEGRITY DIVISION</span>
                    </div>
                </motion.div>

                {/* 3. Company Introduction */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/15 mb-20">
                    <div className="lg:col-span-5">
                        <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
                            WHO WE ARE
                        </h2>
                        <p className="font-mono text-xs text-cyan mt-2">PRECISION & METHODOLOGY</p>
                    </div>
                    <div className="lg:col-span-7 space-y-6 font-body text-white/70 text-base md:text-lg leading-relaxed">
                        <p>
                            Thermo Expert is an advanced architectural, construction, and engineering firm dedicated to executing high-spec residential, commercial, and public infrastructure projects. We combine rigorous mathematical design with precise field supervision.
                        </p>
                        <p>
                            Our team brings together structural engineers, certified project managers, and modern construction technologists who reject compromise. Every metric, from material stress thresholds to spatial load calculations, is analyzed to secure absolute safety and visual clarity.
                        </p>
                    </div>
                </div>

                {/* 4. Mission & Vision Placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-[#151c24]/50 border border-white/15 p-8 md:p-10 relative">
                        <div className="flex items-center gap-3 mb-4 text-cyan">
                            <Target className="w-5 h-5" />
                            <span className="font-mono text-xs tracking-widest uppercase">OUR MISSION</span>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-3">
                            To Deliver Structural Excellence Without Exception
                        </h3>
                        <p className="font-body text-white/60 text-sm leading-relaxed">
                            We build robust, future-proof environments through uncompromising engineering standards, transparent project timelines, and sustainable material practices.
                        </p>
                    </div>

                    <div className="bg-[#151c24]/50 border border-white/15 p-8 md:p-10 relative">
                        <div className="flex items-center gap-3 mb-4 text-cyan">
                            <Eye className="w-5 h-5" />
                            <span className="font-mono text-xs tracking-widest uppercase">OUR VISION</span>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-3">
                            Redefining Modern Construction Standards Across the Region
                        </h3>
                        <p className="font-body text-white/60 text-sm leading-relaxed">
                            To be recognized as the premier benchmark for technical precision, architectural innovation, and reliable project delivery in East Africa and beyond.
                        </p>
                    </div>
                </div>

                {/* 5. Core Values Grid */}
                <div className="mb-24">
                    <div className="mb-12">
                        <span className="font-mono text-xs text-cyan tracking-widest uppercase block mb-2">FOUNDATIONAL ETHOS</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight">
                            CORE VALUES
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#151c24] border border-white/15 p-8">
                            <div className="text-cyan font-mono text-xs mb-4">01 // ETHOS</div>
                            <h3 className="font-heading text-xl font-medium text-white mb-3">Rigorous Precision</h3>
                            <p className="font-body text-white/60 text-xs md:text-sm leading-relaxed">
                                We adhere strictly to engineering blueprints and safety compliance codes, eliminating ambiguity in every calculation.
                            </p>
                        </div>

                        <div className="bg-[#151c24] border border-white/15 p-8">
                            <div className="text-cyan font-mono text-xs mb-4">02 // ETHOS</div>
                            <h3 className="font-heading text-xl font-medium text-white mb-3">Structural Integrity</h3>
                            <p className="font-body text-white/60 text-xs md:text-sm leading-relaxed">
                                Materials are tested and selected for long-term durability, ensuring structures withstand environmental and mechanical stress.
                            </p>
                        </div>

                        <div className="bg-[#151c24] border border-white/15 p-8">
                            <div className="text-cyan font-mono text-xs mb-4">03 // ETHOS</div>
                            <h3 className="font-heading text-xl font-medium text-white mb-3">Transparent Execution</h3>
                            <p className="font-body text-white/60 text-xs md:text-sm leading-relaxed">
                                Full clarity across scheduling, resource allocation, and progress tracking for every commercial and residential partner.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6. Call to Action */}
                <div className="border border-white/15 bg-[#151c24] p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <span className="font-mono text-xs text-cyan tracking-widest uppercase block mb-3">START A CONVERSATION</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
                            READY TO COLLABORATE ON YOUR NEXT BUILD?
                        </h2>
                        <p className="text-white/60 text-sm md:text-base font-body mb-8">
                            Connect with our engineering leads to discuss project specifications, timelines, and technical requirements.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-4 bg-cyan text-navy font-mono text-xs tracking-widest uppercase px-8 py-4 font-medium hover:bg-white transition-colors duration-300"
                        >
                            <span>INITIATE CONTACT</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}