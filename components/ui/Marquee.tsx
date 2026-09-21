"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    items: string[];
    speed?: number; // duration in seconds
}

export function Marquee({ items, speed = 25 }: MarqueeProps) {
    return (
        <div className="relative w-full overflow-hidden border-y border-white/10 py-4 bg-[#151c24]/40">
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
                    {/* Render list twice to create seamless loop effect */}
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
    );
}   