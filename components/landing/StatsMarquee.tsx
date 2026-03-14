"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "2.4M+", label: "Articles Generated" },
    { value: "150K+", label: "Topics Analyzed" },
    { value: "98.7%", label: "Accuracy Rate" },
    { value: "47", label: "Languages Supported" },
    { value: "12K+", label: "Active Publishers" },
    { value: "3.2B", label: "Words Written" },
    { value: "500+", label: "Enterprise Teams" },
    { value: "99.9%", label: "Uptime SLA" },
];

export default function StatsMarquee() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    // Double the items for seamless loop
    const doubled = [...stats, ...stats];

    return (
        <section className="py-8 sm:py-16 bg-white overflow-hidden border-y border-gray-100" ref={ref}>
            {/* Fade edges */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling strip */}
                <motion.div
                    className="flex"
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: isInView ? 0.1 : 0 }}
                >
                    <div className="flex animate-marquee">
                        {doubled.map((stat, index) => (
                            <motion.div
                                key={`${stat.label}-${index}`}
                                className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-6 sm:px-10"
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.9 }
                                }
                                transition={{
                                    duration: 0.4,
                                    delay: isInView ? 0.05 * (index % stats.length) : 0,
                                }}
                            >
                                <motion.span
                                    className="text-xl sm:text-3xl font-extrabold text-gray-900 tabular-nums tracking-tight"
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 15 }
                                    }
                                    transition={{
                                        duration: 0.4,
                                        delay: isInView ? 0.1 + 0.05 * (index % stats.length) : 0,
                                    }}
                                >
                                    {stat.value}
                                </motion.span>
                                <motion.span
                                    className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.10em] sm:tracking-[0.15em] text-gray-400 whitespace-nowrap"
                                    animate={
                                        isInView
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: -8 }
                                    }
                                    transition={{
                                        duration: 0.4,
                                        delay: isInView ? 0.15 + 0.05 * (index % stats.length) : 0,
                                    }}
                                >
                                    {stat.label}
                                </motion.span>
                                <span className="ml-4 sm:ml-6 w-1 h-1 rounded-full bg-gray-300" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CSS animation */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `,
                }}
            />
        </section>
    );
}
