import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#F6F6F3] text-[#111622] py-24 md:py-32 relative overflow-hidden">
            {/* Subtle background structural grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Section Header */}
                <div className="mb-20 pb-8 border-b border-neutral-300">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-neutral-500" />
                        <p className="font-mono text-neutral-500 text-xs tracking-widest uppercase">
                            OUR CAPABILITIES
                        </p>
                    </div>
                    <h1 className="font-heading font-semibold text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.05] tracking-[-0.03em] text-[#111622]">
                        ARCHITECTURAL <br />
                        <span className="text-neutral-400">SERVICES.</span>
                    </h1>
                </div>

                {/* Services Grid with Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group relative bg-[#F0F0EC] border border-neutral-300 overflow-hidden flex flex-col justify-between hover:border-neutral-900 transition-colors duration-300 shadow-sm"
                        >
                            {/* Concrete accent line on hover */}
                            <span className="absolute top-0 left-0 h-[2px] w-0 bg-neutral-900 transition-all duration-500 group-hover:w-full z-10" />

                            {/* Service Image Container */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 border-b border-neutral-300">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-2.5 py-1 bg-[#F6F6F3]/90 backdrop-blur-md border border-neutral-300 text-[10px] uppercase tracking-widest font-mono text-neutral-800">
                                        //0{index + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between bg-[#F6F6F3]">
                                <div>
                                    {/* Service Card Header in Navy */}
                                    <h3 className="font-heading font-medium text-xl md:text-2xl text-[#111622] mb-3 tracking-tight group-hover:text-neutral-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-600 text-xs md:text-sm font-body leading-relaxed line-clamp-3 mb-6">
                                        {service.intro}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
                                    <span className="group-hover:text-neutral-900 transition-colors">VIEW SPECIFICATION</span>
                                    <span className="flex items-center justify-center w-8 h-8 border border-neutral-300 bg-neutral-100 text-neutral-900 transition-all duration-300 group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}