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
                        className="inline-flex items-center gap-2 label-technical text-white/60 hover:text-cyan transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK TO ARCHIVE
                    </Link>
                </div>

                {/* Project Header Info */}
                <div className="pb-12 border-b border-white/15 mb-12">
                    <div className="mb-10">
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

                    {/* Stat strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 pt-8 border-t border-white/10">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-white/40">
                                <MapPin className="w-3.5 h-3.5 text-cyan" />
                                <span className="label-technical text-[11px]">Location</span>
                            </div>
                            <p className="font-heading text-base md:text-lg text-white">
                                {project.location || "Nairobi, Kenya"}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2 text-white/40">
                                <Layers className="w-3.5 h-3.5 text-cyan" />
                                <span className="label-technical text-[11px]">Project Type</span>
                            </div>
                            <p className="font-heading text-base md:text-lg text-white">
                                {project.category}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2 text-white/40">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan" />
                                <span className="label-technical text-[11px]">Status</span>
                            </div>
                            <p className="font-heading text-base md:text-lg text-cyan">
                                Completed
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2 text-white/40">
                                <Calendar className="w-3.5 h-3.5 text-cyan" />
                                <span className="label-technical text-[11px]">Timeline</span>
                            </div>
                            <p className="font-heading text-base md:text-lg text-white">
                                {project.year || "2026"}
                            </p>
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
                            SCOPE &amp; EXECUTION
                        </h2>
                        <p className="text-white/70 font-body text-sm md:text-base leading-relaxed">
                            {project.overview}
                        </p>
                        <div className="pt-4 border-t border-white/10">
                            <ul className="space-y-3 font-body text-sm text-white/80">
                                {project.scope.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-cyan rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Secondary Gallery Showcase */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.gallery.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-[4/3] bg-[#151c24] border border-white/15 overflow-hidden"
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title} detail view ${idx + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 35vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Project CTA Section */}
                <div className="border border-white/15 bg-[#151c24]/50 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02]" />
                    <div className="relative z-10 max-w-xl mx-auto">
                        <h2 className="font-heading text-2xl md:text-3xl font-medium mb-3">
                            READY TO START YOUR BUILD?
                        </h2>
                        <p className="text-white/60 text-sm font-body mb-6">
                            Let&apos;s discuss how Thermo Expert can apply this level of precision to your upcoming development.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-cyan text-navy label-technical px-6 py-3.5 font-medium hover:bg-white transition-colors"
                        >
                            INITIATE CONSULTATION →
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}