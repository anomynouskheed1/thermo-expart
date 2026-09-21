"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    const [triggerKey, setTriggerKey] = useState(0);

    // Re-trigger the letter bounce animation every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTriggerKey((prev) => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Helper to split text strings into animated letters
    const renderAnimatedText = (text: string, baseDelay: number, isCyan = false) => {
        return text.split("").map((letter, index) => (
            <motion.span
                key={`${triggerKey}-${index}`}
                initial={{ y: 0, scale: 1 }}
                animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.12, 1],
                }}
                transition={{
                    duration: 0.4,
                    delay: baseDelay + index * 0.03, // Stagger letter by letter
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block whitespace-pre ${isCyan ? "text-cyan" : "text-white"}`}
            >
                {letter}
            </motion.span>
        ));
    };

    return (
        <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Modern construction site — Thermo Expert Construction Company Ltd"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-12 pb-16 md:pb-24 max-w-[1440px] mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="label-technical text-cyan mb-4"
                >
                    THERMO EXPERT CONSTRUCTION COMPANY LTD
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="font-heading font-semibold leading-[1.05] text-4xl sm:text-6xl lg:text-[5rem] tracking-tight max-w-5xl"
                >
                    <span>{renderAnimatedText("BUILDING TODAY.", 0)}</span>
                    <br />
                    <span>
                        {renderAnimatedText("SUSTAINING", 0.6, true)}
                        {renderAnimatedText(" TOMORROW.", 0.95)}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mt-6 leading-relaxed"
                >
                    Construction and engineering solutions delivering quality,
                    precision and lasting value across Kenya.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="mt-8"
                >
                    <Link
                        href="/our-work"
                        className="group label-technical inline-flex items-center gap-3 bg-cyan text-navy px-6 py-3.5 text-xs sm:text-sm hover:bg-white transition-colors"
                    >
                        EXPLORE OUR WORK
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 right-6 lg:right-12 z-10 hidden md:flex flex-col items-center gap-3">
                <span className="label-technical text-white/60 [writing-mode:vertical-rl] text-xs">
                    SCROLL
                </span>
                <div className="w-px h-12 bg-white/30 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-cyan"
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{ height: "50%" }}
                    />
                </div>
            </div>
        </section>
    );
}