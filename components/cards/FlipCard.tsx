"use client";

import React, { useState } from "react";
import { RotateCw, RotateCcw } from "lucide-react";

interface FlipCardProps {
    title: string;
    description: string;
    subtitle?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, description, subtitle }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`flip-card-perspective w-full max-w-sm h-[320px] select-none cursor-pointer group ${isFlipped ? "is-flipped" : ""}`}
            onClick={() => setIsFlipped((prev) => !prev)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsFlipped((prev) => !prev);
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={`${title} card. Click or hover to flip.`}
        >
            <div className="flip-card-inner">
                {/* FRONT FACE */}
                <div className="flip-card-front bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400" />
                    
                    <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                            Overview
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                            <span>Flip</span>
                        </span>
                    </div>

                    <div className="my-auto py-2">
                        <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-2">
                            {title}
                        </h3>
                        {subtitle && (
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>Tap or hover to reveal</span>
                        <span className="text-blue-600 font-medium">Details →</span>
                    </div>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300" />

                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {title}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">
                            <RotateCcw className="w-3 h-3 text-blue-400" />
                            <span>Back</span>
                        </span>
                    </div>

                    <div className="my-auto py-2">
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                        <span>Standard Architecture</span>
                        <span className="text-slate-400">Return ↺</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
