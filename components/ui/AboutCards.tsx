"use client";

import React, { ReactElement, useState } from "react";
import { RotateCw, RotateCcw, CheckCircle2, ArrowRight } from "lucide-react";

interface AboutHeroCardProps {
    logo: ReactElement;
    title: string;
    description: string[];
    tagline?: string;
    pillarIndex?: string;
}

const defaultTaglines: Record<string, string> = {
    Vision: "Architecting resilient digital infrastructure and cloud-native engineering engineered for enterprise longevity.",
    Mission: "Translating enterprise requirements into performant, intuitive, and secure production software solutions.",
    Commitment: "100% intellectual property rights, unambiguous sprint timelines, and production-grade SLA reliability."
};

const defaultIndices: Record<string, string> = {
    Vision: "01",
    Mission: "02",
    Commitment: "03"
};

const AboutHeroCard: React.FC<AboutHeroCardProps> = ({ 
    logo, 
    title, 
    description, 
    tagline, 
    pillarIndex 
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const indexNumber = pillarIndex || defaultIndices[title] || "01";
    const cardTagline = tagline || defaultTaglines[title] || description[0] || "";

    const handleToggleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div 
            className={`flip-card-perspective w-full h-[370px] sm:h-[390px] select-none cursor-pointer group ${isFlipped ? "is-flipped" : ""}`}
            onClick={handleToggleFlip}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggleFlip();
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={`${title} pillar card. Click or hover to flip and view details.`}
        >
            <div className="flip-card-inner">
                {/* FRONT FACE */}
                <div className="flip-card-front bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden relative">
                    {/* Top gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400" />
                    
                    {/* Ambient subtle corner glow */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50/80 rounded-full blur-xl pointer-events-none" />

                    {/* Top Pill / Badge row */}
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Core Pillar • {indexNumber}
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shadow-2xs">
                            <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                            <span>Hover / Tap to Flip</span>
                        </span>
                    </div>

                    {/* Center Content */}
                    <div className="my-auto py-2">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-xs mb-3.5 group-hover:scale-105 transition-transform duration-300">
                            {logo}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
                            {title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {cardTagline}
                        </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
                            Nuvance Principle
                        </span>
                        <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            View Commitments <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </div>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-white shadow-xl overflow-hidden relative">
                    {/* Top gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300" />

                    {/* Ambient subtle glow */}
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Top Header Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center text-xs">
                                {logo}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                {title} Framework
                            </span>
                        </div>

                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-medium hover:text-white transition-colors">
                            <RotateCcw className="w-3 h-3 text-blue-400" />
                            <span>Flip Back</span>
                        </span>
                    </div>

                    {/* Center Description Points */}
                    <div className="my-auto py-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                            Key Architectural Standards
                        </p>

                        <ul className="space-y-3">
                            {description.map((point, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom Return Footer */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            100% Production Grade
                        </span>
                        <span className="text-slate-400 hover:text-white transition-colors">
                            Tap to return ↺
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeroCard;
