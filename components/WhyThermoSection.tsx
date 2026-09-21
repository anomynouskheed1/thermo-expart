"use client";

import { motion } from "framer-motion";

const qualities = [
    {
        number: "01",
        title: "QUALITY",
        description: "Executing every structural phase with uncompromising attention to material standards and finish.",
    },
    {
        number: "02",
        title: "PRECISION",
        description: "Translating complex engineering blueprints into exact, measured structural reality.",
    },
    {
        number: "03",
        title: "RELIABILITY",
        description: "Delivering consistent execution through structured methodologies and dependable oversight.",
    },
    {
        number: "04",
        title: "PROFESSIONALISM",
        description: "Maintaining rigorous standards of communication, coordination, and technical accountability.",
    },
];

export default function WhyThermoSection() {
    return (
        <section className="relative bg-offwhite text-blue overflow-hidden py-16 md:py-24 border-t border-black/10">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-cyan" />
                            <p className="label-technical text-cyan text-xs">CORE PILLARS</p>
                        </div>
                        <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-[-0.03em] text-blue">
                            WHY THERMO <br />
                            <span className="text-concrete">EXPERT.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 border-l border-black/10 pl-6">
                        <p className="text-blue/70 font-body text-sm md:text-base leading-relaxed">
                            Rooted in an architectural approach to engineering and construction, our framework is defined by structural discipline and uncompromising standards.
                        </p>
                    </div>
                </div>

                {/* Architectural Grid with Lines and Large Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-black/15">
                    {qualities.map((item, i) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative p-6 md:p-8 lg:p-10 border-r border-b border-black/15 bg-white hover:bg-[#EBEBE6] transition-colors duration-500"
                        >
                            {/* Cyan Accent Line on Hover */}
                            <span className="absolute top-0 left-0 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-full" />

                            <div className="flex items-start justify-between mb-6">
                                <span className="font-heading text-concrete group-hover:text-cyan text-base md:text-lg transition-colors duration-300">
                                    /{item.number}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest font-mono text-cyan/80">
                                    PRINCIPLE
                                </span>
                            </div>

                            <h3 className="font-heading font-medium text-2xl md:text-3xl text-blue group-hover:text-cyan transition-colors duration-300 mb-3 tracking-[-0.02em]">
                                {item.title}
                            </h3>

                            <p className="text-blue/70 text-xs md:text-sm font-body leading-relaxed max-w-md">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}