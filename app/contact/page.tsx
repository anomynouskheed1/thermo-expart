"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";
import { main } from "framer-motion/client";
import { WHATSAPP_NUMBER } from "@/lib/config";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-offwhite text-blue pt-28 pb-24 border-t border-black/10 selection:bg-cyan selection:text-blue">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

                {/* Page Header */}
                <div className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-black/15 pb-12">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="h-px w-8 bg-cyan" />
                            <p className="label-technical text-cyan text-xs">GET IN TOUCH</p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-heading font-semibold text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-[-0.03em] text-blue"
                        >
                            GET IN <br />
                            <span className="text-concrete">TOUCH.</span>
                        </motion.h1>
                    </div>

                    <div className="lg:col-span-4">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-blue/70 text-sm md:text-base font-body leading-relaxed"
                        >
                            Reach out directly or submit your project details below and our team will get back to you.
                        </motion.p>
                    </div>
                </div>

                {/* Main Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Direct Info Cards */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="mb-2">
                            <h2 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-blue">
                                DIRECT INQUIRIES
                            </h2>
                        </div>

                        {/* Location Card */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="group relative p-6 border border-black/15 bg-white hover:border-cyan transition-colors"
                        >
                            <span className="absolute top-0 left-0 h-[2px] w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
                            <div className="flex items-center gap-2 mb-3 text-cyan font-mono text-[10px] tracking-widest uppercase">
                                <MapPin className="w-3.5 h-3.5" />
                                Location
                            </div>
                            <p className="font-body text-blue/80 text-sm leading-relaxed">
                                [Address to be provided]<br />
                                Nairobi, Kenya
                            </p>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="group relative p-6 border border-black/15 bg-white hover:border-cyan transition-colors"
                        >
                            <span className="absolute top-0 left-0 h-[2px] w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
                            <div className="flex items-center gap-2 mb-3 text-cyan font-mono text-[10px] tracking-widest uppercase">
                                <Phone className="w-3.5 h-3.5" />
                                Phone
                            </div>
                            <p className="font-heading text-lg text-blue font-medium">
                                [Phone number to be provided]
                            </p>
                        </motion.div>

                        {/* Email Card */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="group relative p-6 border border-black/15 bg-white hover:border-cyan transition-colors"
                        >
                            <span className="absolute top-0 left-0 h-[2px] w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
                            <div className="flex items-center gap-2 mb-3 text-cyan font-mono text-[10px] tracking-widest uppercase">
                                <Mail className="w-3.5 h-3.5" />
                                Email
                            </div>
                            <p className="font-body text-blue/80 text-sm">
                                [Email to be provided]
                            </p>
                        </motion.div>

                        {/* WhatsApp Quick CTA */}
                        <div>

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full bg-[#25D366]/10 border border-[#25D366]/30 px-6 py-4 hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3">
                                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                                    <span className="font-mono text-xs tracking-widest uppercase font-medium text-blue group-hover:text-white">
                                        Chat on WhatsApp
                                    </span>
                                </div>
                                <span className="text-sm text-[#25D366] group-hover:text-white transition-transform group-hover:translate-x-1">→</span>
                            </a>
                            <p className="text-[11px] text-blue/40 mt-2 font-body">
                                WhatsApp number placeholder — update in configuration.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Enquiry Form */}
                    <div className="lg:col-span-8 bg-[#EBEBE6] border border-black/15 p-8 md:p-12">
                        <div className="mb-8 pb-4 border-b border-black/10">
                            <p className="font-body text-blue text-base md:text-lg">
                                Tell us what you need and our team will get back to you.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            {/* Full Name */}
                            <div className="relative">
                                <label htmlFor="name" className="block font-heading text-sm text-blue mb-2 font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full bg-white border border-black/15 px-4 py-3.5 text-blue placeholder-blue/30 text-sm font-body focus:outline-none focus:border-cyan transition-colors"
                                    required
                                />
                            </div>

                            {/* Phone / Email */}
                            <div className="relative">
                                <label htmlFor="contact-info" className="block font-heading text-sm text-blue mb-2 font-medium">
                                    Phone / Email
                                </label>
                                <input
                                    type="text"
                                    id="contact-info"
                                    placeholder="Phone number or email"
                                    className="w-full bg-white border border-black/15 px-4 py-3.5 text-blue placeholder-blue/30 text-sm font-body focus:outline-none focus:border-cyan transition-colors"
                                    required
                                />
                            </div>

                            {/* Service Dropdown */}
                            <div className="relative">
                                <label htmlFor="service" className="block font-heading text-sm text-blue mb-2 font-medium">
                                    Service
                                </label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        className="w-full bg-white border border-black/15 px-4 py-3.5 text-blue text-sm font-body focus:outline-none focus:border-cyan transition-colors appearance-none cursor-pointer"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled className="text-blue/30">
                                            Select a service
                                        </option>
                                        {services.map((service) => (
                                            <option key={service.slug} value={service.title}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-blue">
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="relative">
                                <label htmlFor="location" className="block font-heading text-sm text-blue mb-2 font-medium">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="Area / address"
                                    className="w-full bg-white border border-black/15 px-4 py-3.5 text-blue placeholder-blue/30 text-sm font-body focus:outline-none focus:border-cyan transition-colors"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="group inline-flex items-center justify-center gap-4 bg-blue text-offwhite font-mono text-xs tracking-widest uppercase px-8 py-4 font-medium hover:bg-cyan hover:text-blue transition-colors duration-300 w-full"
                                >
                                    <span>SUBMIT ENQUIRY</span>
                                    <ArrowRight className="w-4 h-4 text-cyan group-hover:text-blue transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Placeholder Section */}
                <div className="mt-16 border border-black/15 bg-[#EBEBE6] h-[350px] md:h-[420px] relative overflow-hidden shadow-sm flex items-center justify-center">
                    <div className="text-center px-6">
                        <MapPin className="w-6 h-6 text-cyan mx-auto mb-3" />
                        <p className="font-heading text-blue text-lg mb-1">Map placeholder</p>
                        <p className="font-body text-blue/50 text-sm">
                            Location map will be added once the office address is confirmed.
                        </p>
                    </div>
                </div>

            </div>
        </main >
    );
}