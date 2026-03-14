"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

interface CTAProps {
    badge?: {
        text: string;
    };
    title?: React.ReactNode;
    description?: string;
    withGlow?: boolean;
    className?: string;
}

const containerVariants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CTASection({
    badge = { text: "Ready to start?" },
    title = (
        <>
            Stop researching.
            <br />
            <span className="text-white/40">Start publishing.</span>
        </>
    ),
    description = "Join thousands of publishers and content teams who use Synapse AI to produce research-backed articles at 10x speed.",
    withGlow = true,
    className,
}: CTAProps) {
    return (
        <section className={cn("dark bg-background overflow-hidden pt-0 md:pt-0", className)}>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={containerVariants}
                className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-10 text-center sm:gap-6 md:py-16"
            >
                {/* Background Area with Animated Fire Border & Grid */}
                {withGlow ? (
                    <div className="absolute inset-0 rounded-2xl z-0 overflow-hidden fade-top-lg pointer-events-none">
                        {/* Spinning Fire Gradient for Border */}
                        <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_50%,#ea580c_75%,#f97316_90%,#facc15_100%)]" />
                        
                        {/* Inner Dark Mask to create the border */}
                        <div className="absolute inset-[2px] rounded-[calc(1rem-2px)] bg-background shadow-glow" />
                        
                        {/* Black Fade Overlay for prominent center */}
                        <div className="absolute inset-[2px] rounded-[calc(1rem-2px)] bg-[radial-gradient(ellipse_at_50%_50%,var(--background)_60%,transparent_100%)]" />
                        
                        {/* Grid Pattern inside the mask */}
                        <div
                            className="absolute inset-[2px] rounded-[calc(1rem-2px)] opacity-[0.04]"
                            style={{
                                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div
                            className="absolute inset-0 opacity-[0.04]"
                            style={{
                                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        />
                    </div>
                )}

                {/* Badge */}
                {badge && (
                    <motion.div variants={itemVariants}>
                        <Badge
                            variant="outline"
                            className="border-white/20 text-white/60 uppercase tracking-[0.25em] font-bold py-1 px-3 mb-2"
                        >
                            <span>{badge.text}</span>
                        </Badge>
                    </motion.div>
                )}

                {/* Title */}
                <motion.h2 variants={itemVariants} className="text-3xl font-semibold sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] z-10">
                    {title}
                </motion.h2>

                {/* Description */}
                {description && (
                    <motion.p variants={itemVariants} className="text-base sm:text-lg text-white/50 max-w-xl mx-auto z-10">
                        {description}
                    </motion.p>
                )}

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10 mt-4">
                    <Link href="/sign-up">
                        <GetStartedButton />
                    </Link>

                    <Button
                        variant="ghost"
                        className="rounded-full text-white/60 hover:text-white text-sm font-semibold 
                            px-8 py-6 border border-white/10 hover:border-white/20
                            hover:bg-white/5 transition-all duration-300 hidden" // Hiding the old button just in case we need it, but using Shimmer
                    >
                        Talk to Sales
                    </Button>
                    
                    <Link href="/sign-up">
                        <ShimmerButton className="shadow-2xl px-8 py-4 h-auto">
                            <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white">
                                Talk to Sales
                            </span>
                        </ShimmerButton>
                    </Link>
                </motion.div>

                <motion.p variants={itemVariants} className="text-[11px] text-white/25 mt-2 z-10">
                    No credit card required · Free tier available · Cancel anytime
                </motion.p>

            </motion.div>
        </section>
    );
}
