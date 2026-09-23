"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.03,
            type: "spring",
            damping: 12,
            stiffness: 150,
        },
    } as any),
};

export default function FinalCtaSection() {
    const line1 = "HAVE A PROJECT";
    const line2 = "IN MIND?";
    const featured = projects[0];

    return (
        <section className="relative bg-offwhite text-blue overflow-hidden py-24 md:py-32 border-t border-black/10">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden bg-[#EBEBE6] border border-black/15 p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                    {/* Left Column: Content & Animated Title */}
                    <div className="relative z-10 lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-cyan" />
                            <p className="label-technical text-cyan text-xs">GET IN TOUCH</p>
                        </div>

                        {/* Letter-by-letter bouncy animated heading */}
                        <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[4.5xl] leading-[0.95] tracking-[-0.03em] mb-6 text-blue flex flex-col overflow-hidden">
                            <span className="flex flex-wrap">
                                {line1.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={letterAnimation}
                                        style={{ display: char === " " ? "inline" : "inline-block", minWidth: char === " " ? "0.3em" : "auto" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="flex flex-wrap text-concrete mt-1">
                                {line2.split("").map((char, i) => (
                                    <motion.span
                                        key={i + line1.length}
                                        custom={i + line1.length}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={letterAnimation}
                                        style={{ display: char === " " ? "inline" : "inline-block", minWidth: char === " " ? "0.3em" : "auto" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </h2>

                        <p className="font-body text-blue/70 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
                            Let&apos;s talk about your next construction project.
                        </p>

                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 bg-blue text-offwhite font-mono text-xs uppercase tracking-widest px-8 py-4 font-medium hover:bg-cyan hover:text-blue transition-colors duration-300 group"
                            >
                                GET IN TOUCH
                                <span className="text-base transition-transform duration-300 group-hover:translate-x-2 text-cyan group-hover:text-blue">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Architectural Project Photo */}
                    <div className="relative lg:col-span-5 h-[350px] md:h-[420px] w-full border border-black/15 overflow-hidden group">
                        <Image
                            src={featured.image}
                            alt={`${featured.title} — completed construction project`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Subtle inner framing overlay */}
                        <div className="absolute inset-0 border border-white/20 pointer-events-none m-3" />
                        <div className="absolute bottom-4 left-4 bg-blue/90 backdrop-blur-md px-4 py-2 border border-white/10 text-offwhite text-[11px] font-mono uppercase tracking-wider">

                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}