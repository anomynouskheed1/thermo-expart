import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowLeft, MapPin, Layers, CheckCircle2, Calendar } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-navy text-white pt-24 pb-28 border-t border-white/10 selection:bg-cyan selection:text-navy">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/our-work"
                        className="inline-flex items-center gap-2 font-mono text-xs text-white/60 hover:text-cyan transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK TO ARCHIVE
                    </Link>
                </div>

                {/* Project Header Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/15 mb-12">
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="h-px w-8 bg-cyan" />
                            <p className="label-technical text-cyan text-xs">PROJECT #{project.slug.toUpperCase()}</p>
                        </div>
                        <h1 className="font-heading font-semibold text-4xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-[-0.03em] mb-4">
                            {project.title}
                        </h1>
                        <p className="text-white/60 font-body text-base md:text-lg max-w-2xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Meta Specifications Box */}
                    <div className="lg:col-span-4 bg-[#151c24] border border-white/15 p-6 space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <span className="text-white/50 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-cyan" /> Location
                            </span>
                            <span className="text-white">{project.location || "Nairobi, Kenya"}</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <span className="text-white/50 flex items-center gap-2">
                                <Layers className="w-3.5 h-3.5 text-cyan" /> Project Type
                            </span>
                            <span className="text-white">{project.category}</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <span className="text-white/50 flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan" /> Status
                            </span>
                            <span className="text-cyan uppercase">Completed (Demo)</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white/50 flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5 text-cyan" /> Timeline
                            </span>
                            <span className="text-white">{project.year || "2026"}</span>
                        </div>
                    </div>
                </div>

                {/* Large Hero Image */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#151c24] border border-white/15 overflow-hidden mb-16">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* Detailed Overview & Gallery Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight">
                            ARCHITECTURAL SCOPE & EXECUTION
                        </h2>
                        <p className="text-white/70 font-body text-sm md:text-base leading-relaxed">
                            This installation highlights our commitment to structural integrity, precise spatial planning, and high-performance material standards. Every phase was engineered to align with rigorous safety parameters and contemporary design constraints.
                        </p>
                        <div className="pt-4 border-t border-white/10">
                            <ul className="space-y-3 font-mono text-xs text-white/80">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-cyan rounded-full" /> Full Structural Framework Analysis
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-cyan rounded-full" /> Advanced Material Stress Testing
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-cyan rounded-full" /> Supervised Site Execution & Oversight
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Secondary Gallery Showcase */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-[4/3] bg-[#151c24] border border-white/15 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={`${project.title} detail view 1`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 35vw"
                            />
                        </div>
                        <div className="relative aspect-[4/3] bg-[#151c24] border border-white/15 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={`${project.title} detail view 2`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 35vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Final Project CTA Section */}
                <div className="border border-white/15 bg-[#151c24]/50 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-2"></div>
                    <div className="relative z-10 max-w-xl mx-auto">
                        <h2 className="font-heading text-2xl md:text-3xl font-medium mb-3">
                            READY TO START YOUR BUILD?
                        </h2>
                        <p className="text-white/60 text-xs md:text-sm font-body mb-6">
                            Let&apos;s discuss how Thermo Expert can apply this level of precision to your upcoming development.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-cyan text-navy font-mono text-xs tracking-widest uppercase px-6 py-3.5 font-medium hover:bg-white transition-colors"
                        >
                            INITIATE CONSULTATION →
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}