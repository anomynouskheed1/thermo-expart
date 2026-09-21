"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects"; // Assuming your centralized project data lives here

export default function OurWorkPage() {
    return (
        <main className="min-h-screen bg-navy text-white pt-24 pb-24 border-t border-white/10 selection:bg-cyan selection:text-navy">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Page Header */}
                <div className="mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 mb-3"
                    >
                        <span className="h-px w-8 bg-cyan" />
                        <p className="label-technical text-cyan text-xs">PORTFOLIO ARCHIVE</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-heading font-semibold text-4xl md:text-6xl lg:text-[5.2rem] leading-[0.95] tracking-[-0.03em]"
                    >
                        SELECTED <br />
                        <span className="text-white/40">WORKS.</span>
                    </motion.h1>
                </div>

                {/* Asymmetric Editorial Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {projects.map((project, i) => {
                        const isEven = i % 2 === 0;
                        const colSpan = isEven ? "md:col-span-7" : "md:col-span-5";
                        const aspectRatio = isEven ? "aspect-[4/3] lg:aspect-[16/11]" : "aspect-[3/4] lg:aspect-[4/5]";
                        const topOffset = isEven && i !== 0 ? "md:mt-16" : "";

                        return (
                            <motion.div
                                key={project.slug}
                                className={`${colSpan} ${topOffset}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link
                                    href={`/our-work/${project.slug}`}
                                    className="group block relative"
                                >
                                    <div className={`relative ${aspectRatio} overflow-hidden bg-[#151c24] mb-4`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

                                        {/* Top Badges */}
                                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                                            <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/15 text-[10px] tracking-widest uppercase font-mono text-cyan">
                                                {project.category}
                                            </span>
                                            <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/70">
                                                {project.year || "2026"}
                                            </span>
                                        </div>

                                        {/* Bottom Content Preview */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                            <div>
                                                <h3 className="font-heading font-medium text-xl md:text-2xl text-white group-hover:text-cyan transition-colors duration-300 mb-1">
                                                    {project.title}
                                                </h3>
                                                <p className="text-white/60 text-xs font-body">
                                                    {project.location || " Location"}
                                                </p>
                                            </div>

                                            <span className="flex items-center justify-center w-9 h-9 shrink-0 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm transition-all duration-300 group-hover:bg-cyan group-hover:border-cyan group-hover:text-navy">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </main>
    );
}