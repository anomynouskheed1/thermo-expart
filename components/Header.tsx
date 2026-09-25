"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/lib/services";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
];

export default function Header() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMobileOpen(false);
        setMobileServicesOpen(false);
    }, [pathname]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-offwhite/95 backdrop-blur-md border-b border-black/10 py-4 shadow-sm">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-6">

                {/* Logo */}
                <Link href="/" prefetch className="relative z-10 flex items-center shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="Thermo Expert Construction Company Ltd"
                        width={260}
                        height={76}
                        priority
                        className="h-14 md:h-16 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center justify-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            prefetch
                            className="label-technical text-navy hover:text-cyan transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className="label-technical flex items-center gap-1.5 text-navy hover:text-cyan transition-colors">
                            Services
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[360px]"
                                >
                                    <div className="border border-black/10 bg-white shadow-2xl">
                                        <div className="p-2">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/services/${service.slug}`}
                                                    prefetch
                                                    className="group block px-5 py-3.5 transition-all duration-300 hover:bg-black/5 hover:pl-6"
                                                >
                                                    <span className="font-body text-[15px] block text-navy group-hover:text-cyan font-normal group-hover:font-medium transition-colors">
                                                        {service.title}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>

                                        <Link
                                            href="/services"
                                            prefetch
                                            className="label-technical flex items-center justify-between px-5 py-4 border-t border-black/10 text-cyan hover:bg-black/5 transition-colors"
                                        >
                                            View All Services
                                            <span>&mdash;</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="/our-work"
                        prefetch
                        className="label-technical text-navy hover:text-cyan transition-colors"
                    >
                        Our Work
                    </Link>
                </nav>

                {/* Contact */}
                <div className="hidden lg:flex justify-end">
                    <Link
                        href="/contact"
                        prefetch
                        className="label-technical px-5 py-2.5 border border-cyan text-cyan hover:bg-cyan hover:text-white transition-all"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden z-10 col-start-3 justify-self-end text-navy"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-black/10 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-6 gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    prefetch
                                    className="label-technical py-4 border-b border-black/10 text-navy"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="label-technical flex items-center justify-between py-4 border-b border-black/10 text-navy"
                            >
                                Services
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {mobileServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden pl-4 border-b border-black/10"
                                    >
                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                prefetch
                                                className="flex items-center py-3 font-body text-[15px] text-navy/70 hover:text-cyan transition-colors"
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <Link
                                href="/our-work"
                                prefetch
                                className="label-technical py-4 border-b border-black/10 text-navy"
                            >
                                Our Work
                            </Link>

                            <Link
                                href="/contact"
                                prefetch
                                className="label-technical text-center px-5 py-3.5 mt-4 border border-cyan text-cyan hover:bg-cyan hover:text-white transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}