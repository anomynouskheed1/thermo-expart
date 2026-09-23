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
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

    useEffect(() => {
        if (!isHome) {
            setScrolled(true);
            return;
        }

        const onScroll = () => setScrolled(window.scrollY > 40);

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    useEffect(() => {
        setMobileOpen(false);
        setMobileServicesOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-3 shadow-sm"
                : "bg-transparent py-6"
                }`}
        >
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-6">

                {/* Logo */}
                <Link
                    href="/"
                    prefetch
                    className="relative z-10 flex items-center shrink-0"
                >
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
                            className={`label-technical transition-colors ${scrolled
                                ? "text-navy hover:text-cyan"
                                : "text-white/90 hover:text-cyan"
                                }`}
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
                        <button
                            className={`label-technical flex items-center gap-1.5 transition-colors ${scrolled
                                ? "text-navy hover:text-cyan"
                                : "text-white/90 hover:text-cyan"
                                }`}
                        >
                            Services
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                                    }`}
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
                                    <div
                                        className={`border shadow-2xl ${scrolled
                                            ? "bg-white border-black/10"
                                            : "bg-navy border-white/10"
                                            }`}
                                    >
                                        <div className="p-2">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/services/${service.slug}`}
                                                    prefetch
                                                    className={`group block px-5 py-3.5 transition-all duration-300 ${scrolled
                                                        ? "hover:bg-black/5 hover:pl-6"
                                                        : "hover:bg-white/5 hover:pl-6"
                                                        }`}
                                                >
                                                    <span
                                                        className={`font-body text-[15px] block transition-colors ${scrolled
                                                            ? "text-navy group-hover:text-cyan font-normal group-hover:font-medium"
                                                            : "text-white/90 group-hover:text-cyan font-normal group-hover:font-medium"
                                                            }`}
                                                    >
                                                        {service.title}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>

                                        <Link
                                            href="/services"
                                            prefetch
                                            className={`label-technical flex items-center justify-between px-5 py-4 border-t transition-colors ${scrolled
                                                ? "border-black/10 text-cyan hover:bg-black/5"
                                                : "border-white/10 text-cyan hover:bg-white/5"
                                                }`}
                                        >
                                            View All Services
                                            <span>&mdash;</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Our Work */}
                    <Link
                        href="/our-work"
                        prefetch
                        className={`label-technical transition-colors ${scrolled
                            ? "text-navy hover:text-cyan"
                            : "text-white/90 hover:text-cyan"
                            }`}
                    >
                        Our Work
                    </Link>
                </nav>

                {/* Contact */}
                <div className="hidden lg:flex justify-end">
                    <Link
                        href="/contact"
                        prefetch
                        className={`label-technical px-5 py-2.5 transition-all ${scrolled
                            ? "border border-cyan text-cyan hover:bg-cyan hover:text-white"
                            : "bg-cyan text-navy font-medium hover:bg-cyan/90 shadow-sm"
                            }`}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden z-10 col-start-3 justify-self-end transition-colors ${scrolled ? "text-navy" : "text-white"
                        }`}
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
                        className={`lg:hidden border-t overflow-hidden ${scrolled
                            ? "bg-white border-black/10"
                            : "bg-navy border-white/10"
                            }`}
                    >
                        <div className="flex flex-col px-6 py-6 gap-1">

                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    prefetch
                                    className={`label-technical py-4 border-b transition-colors ${scrolled
                                        ? "text-navy border-black/10"
                                        : "text-white/90 border-white/10"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Mobile Services Toggle */}
                            <button
                                onClick={() =>
                                    setMobileServicesOpen(!mobileServicesOpen)
                                }
                                className={`label-technical flex items-center justify-between py-4 border-b ${scrolled
                                    ? "text-navy border-black/10"
                                    : "text-white/90 border-white/10"
                                    }`}
                            >
                                Services
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {mobileServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden pl-4 border-b border-white/10"
                                    >
                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                prefetch
                                                className={`flex items-center py-3 font-body text-[15px] transition-colors ${scrolled
                                                    ? "text-navy/70 hover:text-cyan"
                                                    : "text-white/70 hover:text-cyan"
                                                    }`}
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Our Work */}
                            <Link
                                href="/our-work"
                                prefetch
                                className={`label-technical py-4 border-b ${scrolled
                                    ? "text-navy border-black/10"
                                    : "text-white/90 border-white/10"
                                    }`}
                            >
                                Our Work
                            </Link>

                            {/* Contact */}
                            <Link
                                href="/contact"
                                prefetch
                                className={`label-technical text-center px-5 py-3.5 mt-4 ${scrolled
                                    ? "border border-cyan text-cyan hover:bg-cyan hover:text-white"
                                    : "bg-cyan text-navy font-medium hover:bg-cyan/90"
                                    }`}
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