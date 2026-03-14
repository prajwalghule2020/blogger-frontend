"use client"

import { useState } from "react";
import { Search, Activity, Network, Edit3, Bot, Play } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Hero() {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="flex flex-col items-center w-full max-w-5xl px-4 sm:px-0">
            {/* Attractive tagline */}
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 px-2 overflow-hidden">
                <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gray-400" />
                <p className="text-[10px] sm:text-base font-medium tracking-wide text-gray-500 uppercase text-center">
                    AI-Powered Content Intelligence
                </p>
                <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gray-400" />
            </div>

            <div className="relative w-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[450px] sm:min-h-[500px]">
                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/herovdo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay UI */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 bg-black/5 sm:bg-transparent">

                    {/* Top Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 w-full max-w-3xl px-2 sm:px-0">
                        <button className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-medium text-gray-900 shadow-md">
                            <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Topic Intelligence
                        </button>
                        <button className="flex items-center gap-1.5 sm:gap-2 border border-black/10 bg-white/60 sm:bg-transparent px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-medium text-black/80 sm:text-black/60 hover:bg-black/5 transition-colors backdrop-blur-sm">
                            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Search & Evaluate
                        </button>
                        <button className="flex items-center gap-1.5 sm:gap-2 border border-black/10 bg-white/60 sm:bg-transparent px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-medium text-black/80 sm:text-black/60 hover:bg-black/5 transition-colors backdrop-blur-sm">
                            <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Deep Scrape
                        </button>
                        <button className="hidden sm:flex items-center gap-1.5 sm:gap-2 border border-black/10 bg-white/60 sm:bg-transparent px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-medium text-black/80 sm:text-black/60 hover:bg-black/5 transition-colors backdrop-blur-sm">
                            <Edit3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Write & Assemble
                        </button>
                    </div>

                    {/* Main Card */}
                    <div className="w-full sm:w-[700px] max-w-full rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-white/40 bg-white/70 sm:bg-white/40 backdrop-blur-xl sm:backdrop-blur-2xl backdrop-saturate-150">
                        {/* Top Section - Solid White */}
                        <div className="bg-white p-4 sm:p-7 pb-4 sm:pb-6 rounded-t-[1.25rem] sm:rounded-t-[1.5rem]">
                            <div className="relative mb-4 sm:mb-6">
                                {/* The actual interactive input */}
                                <textarea
                                    className="w-full text-[14px] sm:text-[16px] text-gray-800 leading-[1.6] font-medium bg-transparent border-none outline-none resize-none min-h-[80px] sm:min-h-[100px] z-10 relative"
                                    placeholder={isFocused ? "Enter your prompt..." : ""}
                                    value={inputValue}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(inputValue.length > 0)}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />

                                {/* The animated placeholder that disappears on focus/typing */}
                                {!isFocused && inputValue.length === 0 && (
                                    <div className="absolute top-0 left-0 pointer-events-none text-[14px] sm:text-[16px] text-gray-800 leading-[1.6] font-medium w-full h-full flex flex-col sm:block">
                                        <span className="mb-0.5 sm:mb-0">Enter the topic here e.g. </span>
                                        <span className="inline-flex">
                                            <span className="text-[#3B82F6] font-bold overflow-hidden whitespace-nowrap border-r-2 border-[#3B82F6] animate-[typing_4s_steps(40,end)_infinite,blink_.75s_step-end_infinite] max-w-[200px] sm:max-w-fit pr-1">
                                                The Future of Autonomous AI Agents in 2026
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap sm:inline-flex items-center gap-2 sm:gap-5 px-3 py-2 sm:py-1.5 rounded-md border border-gray-200">
                                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-900 w-full sm:w-auto mb-0.5 sm:mb-0">
                                    <Bot className="w-3.5 h-3.5" />
                                    Orchestrator AI
                                </div>
                                <div className="text-[11px] font-bold text-gray-400">Status <span className="font-semibold mix-blend-multiply text-green-600">Writing</span></div>
                                <div className="hidden sm:block text-[11px] font-bold text-gray-400">Target: Tech Leads</div>
                                <div className="text-[11px] font-bold text-gray-400">Est: 2000 Words</div>
                            </div>
                            {/* Define the keyframes for the typing animation locally if not in tailwind config */}
                            <style dangerouslySetInnerHTML={{
                                __html: `
                          @keyframes typing {
                            from { width: 0 }
                            to { width: 100% }
                          }
                          @keyframes blink {
                            from, to { border-color: transparent }
                            50% { border-color: #3B82F6; }
                          }
                        `}} />
                        </div>

                        {/* Bottom Section - Translucent */}
                        <div className="px-5 sm:px-7 py-3 sm:py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShimmerButton className="shadow-2xl px-5 sm:px-6 py-2 sm:py-2.5 h-auto transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]">
                                    <span className="whitespace-pre-wrap text-center text-[12px] sm:text-[13px] font-semibold leading-none tracking-tight text-white flex items-center justify-center gap-1.5 sm:gap-2">
                                        Start
                                        <Play className="w-3.5 h-3.5 fill-white" />
                                    </span>
                                </ShimmerButton>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
