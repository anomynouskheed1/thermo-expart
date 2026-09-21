"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function ServicesSection() {
    return (
        <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-px bg-cyan" />
                            <p className="label-technical text-cyan">
                                OUR SERVICES
                            </p>
                        </div>

                        <h2 className="font-heading text-white font-semibold text-4xl md:text-5xl lg:text-[4rem] leading-[1.02] tracking-[-0.03em]">
                            WHAT WE <span className="text-white/40">BUILD.</span>
                        </h2>
                    </div>

                    {/* Desktop View All */}
                    <Link
                        href="/services"
                        className="hidden md:inline-flex items-center gap-3 label-technical text-white/60 hover:text-cyan transition-colors duration-300 group text-xs"
                    >
                        VIEW ALL SERVICES
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                    </Link>
                </div>

                {/* Services Grid - 3 cards per row on large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                margin: "-60px",
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group block h-full"
                            >
                                <article className="relative flex flex-col h-full overflow-hidden bg-[#151c24] border border-white/10 transition-all duration-500 hover:border-cyan/50">

                                    {/* Image */}
                                    <div className="relative h-[240px] sm:h-[260px] overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 transition-opacity duration-500 group-hover:from-black/70" />

                                        {/* Service Number */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center justify-center min-w-[36px] h-[28px] px-2 bg-black/40 backdrop-blur-sm border border-white/20 text-white/80 font-heading text-xs">
                                                {service.number}
                                            </span>
                                        </div>

                                        {/* Image Bottom Label */}
                                        <div className="absolute bottom-4 left-4">
                                            <span className="text-[10px] tracking-widest uppercase font-mono text-white/70">
                                                THERMO EXPERT
                                            </span>
                                        </div>

                                        {/* Hover Arrow */}
                                        <div className="absolute right-4 bottom-4">
                                            <span className="flex items-center justify-center w-9 h-9 border border-white/40 bg-black/20 backdrop-blur-sm text-white text-sm transition-all duration-300 group-hover:bg-cyan group-hover:border-cyan group-hover:text-navy group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative flex flex-col justify-between flex-grow p-6">
                                        {/* Cyan accent line */}
                                        <span className="absolute top-0 left-0 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-full" />

                                        <div>
                                            <h3 className="font-heading text-white font-medium text-xl lg:text-2xl leading-snug tracking-[-0.02em] transition-colors duration-300 group-hover:text-cyan">
                                                {service.title.toUpperCase()}
                                            </h3>

                                            <p className="mt-3 text-xs sm:text-sm text-white/45 font-body line-clamp-2">
                                                Construction & engineering solutions delivering quality across Kenya.
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                            <span className="text-[10px] tracking-widest uppercase font-mono text-white/40 group-hover:text-cyan transition-colors duration-300">
                                                VIEW DETAILS
                                            </span>
                                            <span className="text-xs text-white/40 group-hover:text-cyan transition-colors duration-300">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All */}
                <Link
                    href="/services"
                    className="md:hidden mt-8 inline-flex items-center gap-3 label-technical text-white/60 hover:text-cyan transition-colors duration-300 group text-xs"
                >
                    VIEW ALL SERVICES
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                        →
                    </span>
                </Link>
            </div>
        </section>
    );
}