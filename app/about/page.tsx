"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-navy text-white pt-24 pb-28 selection:bg-cyan selection:text-navy">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="pt-12 md:pt-20 pb-16 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-5xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-cyan" />

                            <p className="label-technical text-cyan text-xs">
                                ABOUT THERMO EXPERT
                            </p>
                        </div>

                        <h1 className="font-heading font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[6.2rem] leading-[0.9] tracking-[-0.045em]">
                            BUILT WITH
                            <br />
                            <span className="text-white/40">
                                PURPOSE.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-10 max-w-2xl ml-auto"
                    >
                        <p className="font-body text-white/65 text-base md:text-lg leading-relaxed">
                            Thermo Expert Construction Company Ltd is a
                            construction contractor focused on delivering
                            quality building works for residential,
                            commercial and development projects.
                        </p>
                    </motion.div>
                </section>

                {/* =====================================================
                    FEATURE IMAGE
                ====================================================== */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-20 md:mb-28"
                >
                    <Image
                        src="/images/about-2.png"
                        alt="Thermo Expert construction project"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-black/10" />

                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                        <p className="label-technical text-white/70 text-xs">
                            CONSTRUCTION • QUALITY • DELIVERY
                        </p>
                    </div>
                </motion.section>

                {/* =====================================================
                    WHO WE ARE
                ====================================================== */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 pb-20 md:pb-24 border-b border-white/10">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4"
                    >
                        <p className="label-technical text-cyan text-xs mb-4">
                            WHO WE ARE
                        </p>

                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-[1] tracking-[-0.03em]">
                            We build spaces
                            <br />
                            <span className="text-white/40">
                                made to last.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 lg:col-start-6 space-y-6"
                    >
                        <p className="font-body text-white/75 text-base md:text-lg leading-relaxed">
                            At Thermo Expert Construction Company Ltd, our
                            focus is simple: delivering quality construction
                            work with care, reliability and attention to
                            detail.
                        </p>

                        <p className="font-body text-white/55 text-base md:text-lg leading-relaxed">
                            From new buildings to renovations and other
                            construction works, we approach every project
                            with a commitment to good workmanship and
                            dependable execution.
                        </p>
                    </motion.div>
                </section>

                {/* =====================================================
                    WHAT WE DO
                ====================================================== */}
                <section className="py-20 md:py-28">

                    <div className="mb-12 md:mb-16">
                        <p className="label-technical text-cyan text-xs mb-4">
                            WHAT WE DO
                        </p>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em]">
                            CONSTRUCTION
                            <br />
                            <span className="text-white/40">
                                THAT MOVES FORWARD.
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">

                        <div className="bg-navy p-8 md:p-10 lg:p-12">
                            <span className="label-technical text-cyan text-xs">
                                01
                            </span>

                            <h3 className="font-heading text-2xl md:text-3xl mt-8 mb-4">
                                Quality Workmanship
                            </h3>

                            <p className="font-body text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                                We pay attention to the details that make a
                                finished building feel solid, considered and
                                properly completed.
                            </p>
                        </div>

                        <div className="bg-navy p-8 md:p-10 lg:p-12">
                            <span className="label-technical text-cyan text-xs">
                                02
                            </span>

                            <h3 className="font-heading text-2xl md:text-3xl mt-8 mb-4">
                                Reliable Execution
                            </h3>

                            <p className="font-body text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                                We approach construction projects with
                                organization, communication and a clear focus
                                on getting the work done properly.
                            </p>
                        </div>

                        <div className="bg-navy p-8 md:p-10 lg:p-12">
                            <span className="label-technical text-cyan text-xs">
                                03
                            </span>

                            <h3 className="font-heading text-2xl md:text-3xl mt-8 mb-4">
                                Attention To Detail
                            </h3>

                            <p className="font-body text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                                From the early stages of construction through
                                finishing, we keep quality and detail at the
                                center of the work.
                            </p>
                        </div>

                        <div className="bg-navy p-8 md:p-10 lg:p-12">
                            <span className="label-technical text-cyan text-xs">
                                04
                            </span>

                            <h3 className="font-heading text-2xl md:text-3xl mt-8 mb-4">
                                Built For The Future
                            </h3>

                            <p className="font-body text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                                Our goal is to deliver spaces that serve
                                their purpose today while remaining valuable
                                for years to come.
                            </p>
                        </div>

                    </div>
                </section>

                {/* =====================================================
                    STATEMENT
                ====================================================== */}
                <section className="relative border-y border-white/10 py-20 md:py-28 overflow-hidden">

                    <div className="relative z-10 max-w-5xl">
                        <p className="label-technical text-cyan text-xs mb-6">
                            OUR APPROACH
                        </p>

                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-[-0.04em]">
                            FROM FOUNDATION
                            <br />
                            <span className="text-white/35">
                                TO FINISH.
                            </span>
                        </h2>
                    </div>

                    <div className="absolute right-[-80px] bottom-[-120px] text-[14rem] md:text-[20rem] font-heading font-semibold text-white/[0.025] leading-none select-none pointer-events-none">
                        BUILD
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="pt-20 md:pt-28">
                    <div className="relative overflow-hidden border border-white/10 bg-[#151c24] p-8 md:p-14 lg:p-16">

                        <div className="relative z-10 max-w-3xl">

                            <p className="label-technical text-cyan text-xs mb-5">
                                START A PROJECT
                            </p>

                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.95] tracking-[-0.035em] mb-6">
                                HAVE A PROJECT
                                <br />
                                <span className="text-white/40">
                                    IN MIND?
                                </span>
                            </h2>

                            <p className="font-body text-white/55 text-sm md:text-base leading-relaxed max-w-xl mb-8">
                                Talk to Thermo Expert Construction Company
                                Ltd about your next construction project.
                            </p>

                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-4 bg-cyan text-navy px-7 py-4 label-technical text-xs hover:bg-white transition-colors duration-300"
                            >
                                GET IN TOUCH

                                <ArrowRight
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        <div className="absolute right-0 bottom-0 w-[40%] h-full opacity-[0.04] pointer-events-none">
                            <div className="absolute right-[-10%] bottom-[-30%] w-[500px] h-[500px] border border-white rounded-full" />
                            <div className="absolute right-[5%] bottom-[-15%] w-[350px] h-[350px] border border-white rounded-full" />
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
}