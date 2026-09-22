"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    items: string[];
    speed?: number;
}

export function Marquee({ items, speed = 25 }: MarqueeProps) {
    return (
        <div className="w-full bg-[#0a1628] py-12 md:py-16 border-t border-white/10">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="relative w-full overflow-hidden border border-cyan/20 bg-navy py-5 md:py-6">
                    {/* subtle top/bottom accent lines on the banner itself */}
                    <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

                    <div className="flex whitespace-nowrap overflow-hidden">
                        <motion.div
                            className="flex shrink-0 items-center gap-12 min-w-full"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                duration: speed,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {[...items, ...items].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-12">
                                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/70">
                                        {item}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}