"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        dragFree: true,
    });

    const animationRef = useRef<number | null>(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        if (!emblaApi) return;

        const engine = emblaApi.internalEngine();

        const play = () => {
            if (!isPausedRef.current) {
                // Smoothly nudge the scroll position continuously
                emblaApi.scrollNext();
            }
            animationRef.current = requestAnimationFrame(play);
        };

        // We can use a controlled interval or requestAnimationFrame with location shift
        const speed = 0.5; // adjust speed
        const update = () => {
            if (!isPausedRef.current && emblaApi) {
                const scrollProgress = emblaApi.scrollProgress();
                let nextProgress = scrollProgress + 0.0015; // Speed of continuous scroll
                if (nextProgress >= 1) {
                    nextProgress = 0;
                }
                emblaApi.scrollTo(nextProgress * emblaApi.scrollSnapList().length);
            }
            animationRef.current = requestAnimationFrame(update);
        };

        // Simpler, reliable approach using Embla's internal scroll target
        const continuousPlay = () => {
            if (!isPausedRef.current && emblaApi) {
                const currentScroll = emblaApi.scrollProgress() * emblaApi.scrollSnapList().length;
                // Slowly increment scroll position
                const target = emblaApi.scrollProgress() + 0.001;
                emblaApi.scrollTo(target > 1 ? 0 : target);
            }
            animationRef.current = requestAnimationFrame(continuousPlay);
        };

        // Let's use Embla's built-in engine location for absolute buttery smooth movement
        const render = () => {
            if (!isPausedRef.current && emblaApi) {
                const engine = emblaApi.internalEngine();
                const location = engine.location.get();
                // Push location forward
                engine.location.set(location + 0.8); // Pixel speed per frame
                emblaApi.reInit();
            }
            animationRef.current = requestAnimationFrame(render);
        };

        // Best practice approach using Embla's internal engine scroll body offset:
        const smoothScroll = () => {
            if (!isPausedRef.current && emblaApi) {
                const engine = (emblaApi as any).internalEngine();
                if (engine && engine.location) {
                    engine.location.set(engine.location.get() + 0.7); // Adjust speed here
                    emblaApi.reInit();
                }
            }
            animationRef.current = requestAnimationFrame(smoothScroll);
        };

        animationRef.current = requestAnimationFrame(smoothScroll);

        const rootNode = emblaApi.rootNode();
        const onMouseEnter = () => { isPausedRef.current = true; };
        const onMouseLeave = () => { isPausedRef.current = false; };
        const onPointerDown = () => { isPausedRef.current = true; };
        const onPointerUp = () => { isPausedRef.current = false; };

        rootNode.addEventListener("mouseenter", onMouseEnter);
        rootNode.addEventListener("mouseleave", onMouseLeave);
        rootNode.addEventListener("pointerdown", onPointerDown);
        rootNode.addEventListener("pointerup", onPointerUp);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            rootNode.removeEventListener("mouseenter", onMouseEnter);
            rootNode.removeEventListener("mouseleave", onMouseLeave);
            rootNode.removeEventListener("pointerdown", onPointerDown);
            rootNode.removeEventListener("pointerup", onPointerUp);
        };
    }, [emblaApi]);

    return (
        <section className="relative bg-navy text-white overflow-hidden py-20 md:py-28 border-t border-white/10">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Header & View All Link */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-cyan" />
                            <p className="label-technical text-cyan text-xs">
                                SELECTED WORK
                            </p>
                        </div>

                        <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[4.2rem] leading-[0.95] tracking-[-0.03em]">
                            OUR
                            <br />
                            <span className="text-white/40">
                                PROJECTS.
                            </span>
                        </h2>
                    </div>

                    {/* View All link */}
                    <div className="flex items-center justify-end">
                        <Link
                            href="/projects"
                            className="hidden sm:inline-flex items-center gap-3 label-technical text-white/60 hover:text-cyan transition-colors duration-300 group text-xs"
                        >
                            VIEW ALL
                            <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                                →
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Carousel Viewport */}
                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex -ml-4 lg:-ml-6">
                        {projects.map((project, index) => (
                            <div
                                key={project.slug}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_38.333%] pl-4 lg:pl-6 min-w-0"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="group relative block overflow-hidden"
                                    >
                                        {/* Image Box */}
                                        <div className="relative overflow-hidden bg-[#151c24] aspect-[4/3]">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
                                            />

                                            {/* Subtle hover darkening */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

                                            {/* Hover information */}
                                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                                                <div className="flex items-end justify-between gap-4">
                                                    <div>
                                                        <p className="text-[10px] tracking-widest uppercase font-mono text-cyan mb-1">
                                                            {project.category}
                                                        </p>
                                                        <h3 className="font-heading text-white text-lg md:text-xl font-medium tracking-tight">
                                                            {project.title}
                                                        </h3>
                                                    </div>

                                                    <span className="flex items-center justify-center w-9 h-9 shrink-0 border border-white/30 bg-black/40 backdrop-blur-sm text-white text-sm transition-all duration-300 group-hover:bg-cyan group-hover:border-cyan group-hover:text-navy">
                                                        →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Bottom Link */}
                <div className="mt-8 flex sm:hidden justify-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-3 border border-white/20 px-5 py-2.5 text-xs tracking-wider uppercase font-mono text-white/70 hover:border-cyan hover:text-cyan transition-all duration-300 group"
                    >
                        EXPLORE PROJECT ARCHIVE
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}