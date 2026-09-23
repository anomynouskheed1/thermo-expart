"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative bg-offwhite py-24 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Image — asymmetric, offset */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-6 relative"
                >
                    <div className="relative aspect-[4/5] w-full max-w-[520px]">
                        <Image
                            src="/images/about.jpg"
                            alt="Thermo Expert construction team at a building site"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>
                    {/* Thin architectural frame line, offset from image */}
                    <div className="hidden lg:block absolute -bottom-6 -right-6 w-full h-full max-w-[520px] border border-navy/20 -z-10" />
                </motion.div>

                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="lg:col-span-6 lg:col-start-7"
                >
                    <p className="label-technical text-blue mb-5">About Thermo Expert</p>

                    <h2 className="font-heading text-navy font-semibold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] mb-8">
                        MORE THAN
                        <br />
                        CONSTRUCTION.
                    </h2>

                    <p className="text-concrete text-base md:text-lg leading-relaxed max-w-lg mb-4">
                        Thermo Expert Construction Company Ltd is a construction
                        contractor focused on delivering quality building works for
                        residential, commercial and development projects.
                    </p>

                    <p className="text-concrete text-base md:text-lg leading-relaxed max-w-lg mb-10">
                        From groundwork to final finishes, every project is approached
                        with care, precision and a commitment to lasting results.
                    </p>

                    <Link
                        href="/about"
                        className="group label-technical inline-flex items-center gap-3 text-navy border-b border-navy pb-1 hover:text-blue hover:border-blue transition-colors"
                    >
                        Discover Our Story
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}