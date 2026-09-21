"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceRowProps {
    number: string;
    title: string;
    category: string;
    slug: string;
}

export function ServiceRow({ number, title, category, slug }: ServiceRowProps) {
    return (
        <Link
            href={`/services/${slug}`}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/15 transition-colors duration-300 hover:border-cyan/50"
        >
            <div className="flex items-center gap-6 mb-2 md:mb-0">
                <span className="font-mono text-xs text-cyan tracking-widest">{number}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-medium text-white group-hover:text-cyan transition-colors duration-300">
                    {title}
                </h3>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-8 pl-12 md:pl-0">
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">{category}</span>
                <span className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-cyan group-hover:border-cyan group-hover:text-navy">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    );
}