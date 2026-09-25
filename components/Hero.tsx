
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projects";

const SLIDE_DURATION = 2000;
const TRANSITION_DURATION = 1.2;

const titleText = "BUILDING SPACES.";

export default function Hero() {
    const project =
        projects.find((p) => p.slug === "house-renovation") ?? projects[0];

    const images = [project.image, ...project.gallery];
    const total = images.length;

    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback(
        (next: number) => {
            setIndex(((next % total) + total) % total);
        },
        [total]
    );

    const goNext = useCallback(() => {
        goTo(index + 1);
    }, [goTo, index]);

    const goPrev = useCallback(() => {
        goTo(index - 1);
    }, [goTo, index]);

    useEffect(() => {
        if (isPaused || total <= 1) return;

        timerRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % total);
        }, SLIDE_DURATION);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isPaused, total]);

    const nextIndex = (index + 1) % total;

    return (
        <section className="relative w-full bg-navy overflow-hidden pt-36 md:pt-40 pb-12">
            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:6rem_full] pointer-events-none" />

            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* =========================
                        LEFT — HERO INTRODUCTION
                    ========================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:col-span-5 text-white relative"
                    >
                        {/* Soft glow */}
                        <div
                            className="absolute -left-28 -top-28 w-[380px] h-[380px] rounded-full pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(59,180,229,0.12) 0%, rgba(59,180,229,0.04) 45%, transparent 70%)",
                                filter: "blur(12px)",
                            }}
                        />

                        <div className="relative z-10">

                            {/* Eyebrow */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-7 bg-cyan" />

                                <p className="label-technical text-cyan text-[10px] sm:text-xs tracking-[0.18em]">
                                    THERMO EXPERT CONSTRUCTION
                                </p>
                            </div>


                            {/* Hero Heading — Letter-by-Letter Wave */}
                            <motion.h1
                                className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] leading-[1.05] tracking-[-0.025em] mb-6 max-w-lg whitespace-nowrap"
                                initial="initial"
                                animate="animate"
                                variants={{
                                    initial: {},
                                    animate: {
                                        transition: {
                                            staggerChildren: 0.07,
                                            delayChildren: 0.15,
                                            repeat: Infinity,
                                            repeatDelay: 4,
                                        },
                                    },
                                }}
                            >
                                {titleText.split("").map((char, i) => (
                                    <motion.span
                                        key={`${char}-${i}`}
                                        className="inline-block"
                                        variants={{
                                            initial: {
                                                y: 0,
                                                color: "#FFFFFF",
                                            },
                                            animate: {
                                                y: [0, -10, 0],
                                                color: [
                                                    "#FFFFFF",
                                                    "#3BB4E5",
                                                    "#FFFFFF",
                                                ],
                                                transition: {
                                                    duration: 0.55,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                            },
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h1>


                            {/* Supporting Copy */}
                            <p className="text-white/65 italic font-body text-sm sm:text-[15px] lg:text-base leading-[1.7] max-w-md mb-10">
                                We bring together construction expertise,
                                thoughtful design, and quality workmanship to
                                create spaces built for living, working, and
                                growing.
                            </p>

                            {/* CTA */}
                            <div>
                                <Link
                                    href="/our-work"
                                    className="group label-technical inline-flex items-center gap-3 bg-cyan text-navy px-5 py-3 text-[11px] sm:text-xs hover:bg-white transition-colors"
                                >
                                    EXPLORE OUR WORK

                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* =========================
                        RIGHT — PROJECT SLIDESHOW
                    ========================== */}
                    <div
                        className="lg:col-span-7 relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Image Frame */}
                        <div className="relative w-full aspect-[16/10] lg:aspect-[17/10] overflow-hidden border border-white/10 bg-[#0d1826]">

                            <AnimatePresence mode="sync">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: TRANSITION_DURATION,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[index]}
                                        alt={`${project.title} — photo ${index + 1
                                            } of ${total}`}
                                        fill
                                        priority={index === 0}
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Bottom image gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Navigation BELOW image */}
                        <div className="flex items-center justify-between pt-2">

                            {/* Previous */}
                            <button
                                onClick={goPrev}
                                aria-label="Previous photo"
                                className="group flex items-center justify-center w-9 h-9 border border-white/15 text-white/60 hover:border-cyan hover:text-cyan transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                            </button>

                            {/* Next */}
                            <button
                                onClick={goNext}
                                aria-label="Next photo"
                                className="group flex items-center justify-center w-9 h-9 border border-white/15 text-white/60 hover:border-cyan hover:text-cyan transition-colors"
                            >
                                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>

                        {/* Preload next image */}
                        {total > 1 && (
                            <div className="hidden">
                                <Image
                                    src={images[nextIndex]}
                                    alt=""
                                    width={1}
                                    height={1}
                                    loading="eager"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
