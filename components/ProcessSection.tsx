"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "CONSULTATION & BRIEF",
        description: "Analyzing the architectural requirements, scope parameters, and technical expectations to lay a bulletproof foundation.",
    },
    {
        number: "02",
        title: "DESIGN & BLUEPRINTS",
        description: "Drafting precise architectural schematics, structural engineering layouts, and material frameworks tailored to integrity.",
    },
    {
        number: "03",
        title: "STRUCTURAL EXECUTION",
        description: "Managing construction, fabrication, and site implementation with rigorous quality control and safety protocols.",
    },
    {
        number: "04",
        title: "FINAL HANDOVER",
        description: "Conducting meticulous structural inspections, stress testing, and delivering the completed project to your exact specs.",
    },
];

export default function ProcessSection() {
    return (
        <section className="relative bg-navy text-white overflow-hidden py-24 md:py-32 border-t border-white/10">
            {/* Subtle background structural grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:6rem_full] pointer-events-none" />

            <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-cyan" />
                            <p className="label-technical text-cyan text-xs tracking-widest font-mono">
                                WORKFLOW
                            </p>
                        </div>
                        <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.05] tracking-[-0.03em] text-white">
                            SYSTEMIZED <br />
                            <span className="text-white/40">PROCESS.</span>
                        </h2>
                    </div>

                    <p className="text-white/80 font-body text-sm md:text-base max-w-md leading-relaxed">
                        A continuous, phase-driven methodology designed to transition architectural visions into permanent physical realities.
                    </p>
                </div>

                {/* Streamlined Horizontal Timeline Flow */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">

                    {/* Connecting line behind items for desktop */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/15 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 flex flex-col group pt-4"
                        >
                            {/* Node Point on Timeline */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-10 h-10 rounded-none bg-navy border border-white/20 group-hover:border-cyan flex items-center justify-center font-mono text-xs text-cyan transition-colors duration-300 shadow-sm">
                                    {step.number}
                                </span>
                                <span className="h-px w-full bg-white/10 group-hover:bg-cyan/40 transition-colors duration-300 lg:hidden" />
                            </div>

                            {/* Content */}
                            <h3 className="font-heading font-medium text-xl text-cyan-soft mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                                {step.title}
                            </h3>

                            <p className="text-white/80 text-sm font-body leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}