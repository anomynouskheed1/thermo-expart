"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#F4F5F7] text-slate-900 border-t border-slate-200 py-8 md:py-12">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Top Row: Brand & Links */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pb-8 border-b border-slate-200 items-start">

                    {/* Company Info */}
                    <div className="md:col-span-5 space-y-2">
                        <Link href="/" className="font-heading font-bold text-lg tracking-tight text-slate-900 inline-block">
                            THERMO <span className="text-cyan">EXPERT</span>
                        </Link>
                        <p className="font-body text-slate-600 text-xs max-w-sm leading-relaxed">
                            A construction contractor delivering quality building works for residential, commercial and development projects.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-4">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-cyan font-semibold mb-2 md:mb-4">
                            NAVIGATION
                        </p>
                        <ul className="grid grid-cols-2 gap-2 md:gap-3 font-body text-xs text-slate-700">
                            <li>
                                <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-cyan transition-colors">About</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-cyan transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="/our-work" className="hover:text-cyan transition-colors">Our Work</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-cyan transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Placeholders */}
                    <div className="md:col-span-3">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-cyan font-semibold mb-2 md:mb-4">
                            CONNECT
                        </p>
                        <div className="flex flex-wrap gap-3 md:gap-4 font-body text-xs text-slate-700">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">LinkedIn</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">Twitter / X</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">Instagram</a>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 font-body">
                            Social links placeholder — to be confirmed.
                        </p>
                    </div>

                </div>

                {/* Bottom Row: Copyright */}
                <div className="pt-4 md:pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Thermo Expert Construction Company Ltd. All rights reserved.</p>
                    <p className="text-cyan font-medium">Building Today. Sustaining Tomorrow.</p>
                </div>

            </div>
        </footer>
    );
}