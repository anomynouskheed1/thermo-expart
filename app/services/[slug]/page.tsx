import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { ArrowLeft, CheckCircle2, ArrowRight, Layers } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-navy text-white pt-24 pb-28 border-t border-white/10 selection:bg-cyan selection:text-navy">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 font-mono text-xs text-white/60 hover:text-cyan transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        ALL SERVICES
                    </Link>
                </div>

                {/* Service Header */}
                <div className="max-w-4xl mb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="h-px w-8 bg-cyan" />
                        <p className="label-technical text-cyan text-xs">PRACTICE AREA</p>
                    </div>
                    <h1 className="font-heading font-semibold text-4xl md:text-6xl lg:text-[4.8rem] leading-[0.95] tracking-[-0.03em] mb-6">
                        {service.title}
                    </h1>
                    <p className="text-white/70 font-body text-lg md:text-xl leading-relaxed">
                        {service.tagline}
                    </p>
                </div>

                {/* Service Hero Image */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#151c24] border border-white/15 overflow-hidden mb-16">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* Main Content Grid: Description & What It Covers */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/15">

                    {/* Left Column: Service Description */}
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight">
                            OVERVIEW & APPROACH
                        </h2>
                        <p className="text-white/70 font-body text-sm md:text-base leading-relaxed">
                            {service.description}
                        </p>
                        <p className="text-white/60 font-body text-sm leading-relaxed">
                            We deploy seasoned engineers, state-of-the-art tools, and strict quality control measures to ensure that every metric matches the highest industry standards.
                        </p>
                    </div>

                    {/* Right Column: What The Service Covers */}
                    <div className="lg:col-span-6 bg-[#151c24]/50 border border-white/15 p-8 md:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-cyan font-mono text-xs tracking-widest uppercase">
                                <Layers className="w-4 h-4" />
                                Core Capabilities & Scope
                            </div>
                            <ul className="space-y-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 font-body text-sm md:text-base text-white/90">
                                        <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Related Project Showcase Box */}
                <div className="mt-16 bg-[#151c24] border border-white/15 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <span className="font-mono text-[10px] tracking-widest uppercase text-cyan block mb-2">
                            RELATED PORTFOLIO CASE
                        </span>
                        <h3 className="font-heading text-2xl md:text-3xl text-white font-medium">
                            {service.relatedProjectTitle}
                        </h3>
                    </div>
                    <Link
                        href={`/our-work/${service.relatedProjectSlug}`}
                        className="group inline-flex items-center gap-3 bg-cyan text-navy font-mono text-xs tracking-widest uppercase px-6 py-3.5 font-medium hover:bg-white transition-colors"
                    >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </main>
    );
}