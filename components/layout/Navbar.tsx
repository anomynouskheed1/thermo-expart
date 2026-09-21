"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${scrolled
                    ? "bg-navy/90 backdrop-blur-md border-white/15 py-4 shadow-xl"
                    : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="font-heading font-bold text-lg md:text-xl tracking-tight text-white">
                    THERMO <span className="text-cyan">EXPERT</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-white/70">
                    <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-cyan transition-colors">About</Link>
                    <Link href="/services" className="hover:text-cyan transition-colors">Services</Link>
                    <Link href="/our-work" className="hover:text-cyan transition-colors">Our Work</Link>
                    <Link href="/contact" className="hover:text-cyan transition-colors">Contact</Link>
                </nav>

                <Link
                    href="/contact"
                    className="hidden lg:inline-flex items-center justify-center bg-cyan text-navy font-mono text-xs tracking-widest uppercase px-5 py-2.5 font-medium hover:bg-white transition-colors duration-300"
                >
                    Inquire
                </Link>
            </div>
        </header>
    );
}