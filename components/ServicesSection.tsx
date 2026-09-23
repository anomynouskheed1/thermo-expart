"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function ServicesSection() {
    return (
        <section className="relative bg-navy text-white overflow-hidden py-24 md:py-32">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                {/* Header */}
                <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16 md:mb-20">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10 bg-cyan" />
                            <p className="label-technical text-cyan">OUR SERVICES</p>
                        </div>

                        <h2 className="font-heading font-semibold text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.04em]">
                            WHAT WE
                            <br />
                            <span className="text-white/40">BUILD.</span>
                        </h2>
                    </div>

                    <Link
                        href="/services"
                        className="hidden lg:inline-flex items-center gap-4 label-technical text-white/60 hover:text-cyan transition-colors group"
                    >
                        VIEW ALL SERVICES
                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                    </Link>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group relative block border border-white/15 bg-[#0d1826] hover:border-cyan/50 transition-colors duration-500 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#151c24]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />

                                    {/* Number over image */}
                                    <span className="absolute top-4 left-4 md:top-5 md:left-5 font-heading text-sm text-white/90 bg-navy/60 backdrop-blur-sm border border-white/20 px-3 py-1.5">
                                        {service.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <h3 className="font-heading font-medium text-2xl md:text-3xl tracking-[-0.02em] mb-3 group-hover:text-cyan transition-colors duration-300">
                                        {service.title.toUpperCase()}
                                    </h3>
                                    <p className="text-white/60 font-body text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-3 label-technical text-white/70 group-hover:text-cyan transition-colors duration-300">
                                        EXPLORE
                                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <Link
                    href="/services"
                    className="lg:hidden mt-10 inline-flex items-center gap-4 label-technical text-white/60 hover:text-cyan transition-colors"
                >
                    VIEW ALL SERVICES
                    <span>→</span>
                </Link>
            </div>
        </section>
    );
}