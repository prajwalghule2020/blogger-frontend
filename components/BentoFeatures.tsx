"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Zap,
    BarChart3,
    Globe,
    Shield,
    Search,
    Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";

type CardVariant = "default" | "dots" | "gradient" | "plus" | "neubrutalism" | "inner" | "lifted" | "corners";

const features: {
    icon: typeof Zap;
    title: string;
    description: string;
    size: "large" | "small";
    variant: CardVariant;
}[] = [
    {
        icon: Search,
        title: "Smart Web Research",
        description:
            "Give it a topic and our AI scours the web — scraping articles, studies, and real-time data to build a deeply researched blog post in minutes.",
        size: "large",
        variant: "neubrutalism",
    },
    {
        icon: BarChart3,
        title: "SEO Intelligence",
        description:
            "Real-time keyword analysis and SERP positioning built into every piece.",
        size: "small",
        variant: "neubrutalism",
    },
    {
        icon: Clock,
        title: "10x Faster",
        description:
            "What took days now takes minutes. Publish research-backed articles at unprecedented speed.",
        size: "small",
        variant: "neubrutalism",
    },
    {
        icon: Globe,
        title: "30+ Languages",
        description:
            "Generate native-quality content in any language. Expand your reach without translation overhead.",
        size: "small",
        variant: "lifted",
    },
    {
        icon: Shield,
        title: "Fact-Checked Output",
        description:
            "Every claim is cross-referenced against source material. Full citation trails for transparency.",
        size: "small",
        variant: "neubrutalism",
    },
    {
        icon: Zap,
        title: "Live Collaboration",
        description:
            "Your team edits, comments, and refines in real-time. AI adapts to feedback instantly — the more you iterate, the smarter it gets.",
        size: "large",
        variant: "neubrutalism",
    },
];

export default function BentoFeatures() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-80px" });

    return (
        <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] overflow-hidden" ref={ref}>
            {/* Animated grid background */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.2 }}
            >
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)
                        `,
                        backgroundSize: "40px 40px",
                        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "40px 40px"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                {/* Static accent dots at intersections */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "40px 40px"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-10 sm:mb-16">
                    <motion.p
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: isInView ? 0 : 0 }}
                        className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3"
                    >
                        Capabilities
                    </motion.p>
                    <motion.h2
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: isInView ? 0.1 : 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight px-4 sm:px-0"
                    >
                        Built for serious
                        <br />
                        <span className="text-gray-400">
                            content operations
                        </span>
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, index) => {
                        const isLarge = feature.size === "large";
                        const baseDelay = 0.25 + index * 0.12;

                        return (
                            <motion.div
                                key={feature.title}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0, scale: 1 }
                                        : { opacity: 0, y: 40, scale: 0.95 }
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: isInView ? baseDelay : 0,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className={`${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
                            >
                                <Card
                                    variant={feature.variant}
                                    className="h-full bg-white"
                                >
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            animate={
                                                isInView
                                                    ? { opacity: 1, scale: 1, rotate: 0 }
                                                    : { opacity: 0, scale: 0.5, rotate: -10 }
                                            }
                                            transition={{
                                                duration: 0.4,
                                                delay: isInView ? baseDelay + 0.15 : 0,
                                                ease: "backOut",
                                            }}
                                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 shrink-0 mt-0.5"
                                        >
                                            <feature.icon
                                                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                        <div>
                                            <motion.h3
                                                animate={
                                                    isInView
                                                        ? { opacity: 1, x: 0 }
                                                        : { opacity: 0, x: -10 }
                                                }
                                                transition={{
                                                    duration: 0.4,
                                                    delay: isInView ? baseDelay + 0.25 : 0,
                                                }}
                                                className="text-base sm:text-lg font-bold mb-1.5 sm:mb-1 text-gray-900"
                                            >
                                                {feature.title}
                                            </motion.h3>
                                            <motion.p
                                                animate={
                                                    isInView
                                                        ? { opacity: 1, x: 0 }
                                                        : { opacity: 0, x: -10 }
                                                }
                                                transition={{
                                                    duration: 0.4,
                                                    delay: isInView ? baseDelay + 0.35 : 0,
                                                }}
                                                className="text-[13px] sm:text-sm leading-relaxed text-gray-500"
                                            >
                                                {feature.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
