"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    width?: "fit" | "full";
    delay?: number;
    className?: string;
}

export function Reveal({ children, width = "full", delay = 0, className = "" }: RevealProps) {
    return (
        <div style={{ width }} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                    duration: 0.7,
                    delay: delay,
                    ease: [0.22, 1, 0.36, 1], // Custom premium architectural cubic-bezier curve
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}