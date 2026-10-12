"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
    ChevronLeft, 
    ChevronRight, 
    Sparkles, 
    CheckCircle2, 
    Award 
} from "lucide-react";

interface MilestoneStep {
    id: number;
    year: string;
    dateBadge: string;
    shortTitle: string;
    title: string;
    description: string;
    tags: string[];
    isAward?: boolean;
}

const milestoneSteps: MilestoneStep[] = [
    {
        id: 1,
        year: "Early 2024",
        dateBadge: "Early 2024 • Founding",
        shortTitle: "Founding",
        title: "Inception as TechStudio",
        description:
            "Founded as a dedicated engineering group focused on building custom web applications, business tooling, and high-conversion MVPs for early-stage clients.",
        tags: ["React & Node.js", "Custom Software", "MVP Delivery"],
    },
    {
        id: 2,
        year: "Mid 2024",
        dateBadge: "Mid 2024 • Expansion",
        shortTitle: "Capabilities Expansion",
        title: "Full-Stack Capabilities Expansion",
        description:
            "Scaled engineering disciplines into cross-platform mobile apps (iOS & Android), AWS/GCP cloud migrations, and scalable multi-tenant API integrations.",
        tags: ["Mobile Apps", "Cloud DevOps", "Scalable APIs"],
    },
    {
        id: 3,
        year: "Late 2024",
        dateBadge: "Late 2024 • Strategic Pivot",
        shortTitle: "Rebranding",
        title: "Rebranding to Nuvance Technologies",
        description:
            "Consolidated corporate identity into Nuvance Technologies to support enterprise-grade systems, high-availability architecture, and data pipelines.",
        tags: ["Nuvance Technologies", "Enterprise Architecture", "Consulting"],
    },
    {
        id: 4,
        year: "2025",
        dateBadge: "2025 • Enterprise Deployments",
        shortTitle: "Platform Scaling",
        title: "Proprietary Platforms & High Availability",
        description:
            "Deployed proprietary software architectures and healthcare tech platforms (including MediLink) engineered with strict security and multi-region failover.",
        tags: ["Healthcare Tech", "MediLink Platform", "High Availability"],
    },
    {
        id: 5,
        year: "2026",
        dateBadge: "2026 • Prestigious Honor",
        shortTitle: "Leadership Award",
        title: "Visionary Business Leader Award 2026",
        description:
            "Founder Nihal Yadav honored with the Visionary Business Leader Award at the World Leader Summit, New Delhi, recognizing pioneering software leadership and architectural execution.",
        tags: ["World Leader Summit", "Visionary Leader Award", "New Delhi"],
        isAward: true,
    },
    {
        id: 6,
        year: "Present",
        dateBadge: "Present • Global Delivery",
        shortTitle: "Global Partner",
        title: "Full-Service Engineering & Global Scale",
        description:
            "Partnering with organizations globally to build, modernize, and maintain high-impact digital systems with dedicated SLA maintenance and clean codebases.",
        tags: ["Global Clients", "Production Systems", "Long-term SLAs"],
    },
];

export default function CompanyTimeline() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isUserInteracting, setIsUserInteracting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-advancing step progression
    useEffect(() => {
        if (isVisible && !isUserInteracting) {
            const timer = setInterval(() => {
                setCurrentStep((prev) => (prev + 1) % milestoneSteps.length);
            }, 3500);

            return () => clearInterval(timer);
        }
    }, [isVisible, isUserInteracting]);

    const nextStep = () => {
        setIsUserInteracting(true);
        setCurrentStep((prev) => (prev + 1) % milestoneSteps.length);
    };

    const prevStep = () => {
        setIsUserInteracting(true);
        setCurrentStep((prev) => (prev - 1 + milestoneSteps.length) % milestoneSteps.length);
    };

    const goToStep = (index: number) => {
        setIsUserInteracting(true);
        setCurrentStep(index);
    };

    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const diffX = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                prevStep();
            } else {
                nextStep();
            }
        }
        setTouchStartX(null);
    };

    const activeItem = milestoneSteps[currentStep];

    return (
        <section
            ref={containerRef}
            className="w-full py-8"
            onMouseEnter={() => setIsUserInteracting(true)}
            onMouseLeave={() => setIsUserInteracting(false)}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-md text-xs font-semibold uppercase tracking-wider text-blue-700 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>Corporate Evolution</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                        Company Journey & Technical Milestones
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-2">
                        A chronological progression of technical rigor, milestone executions, and industry recognition.
                    </p>
                </div>

                {/* Desktop Horizontal Stepper Track */}
                <div className="hidden md:block relative mb-10">
                    <div className="flex items-center justify-between relative px-6">
                        {/* Continuous Horizontal Progress Line */}
                        <div className="absolute top-[64%] left-10 right-10 h-1.5 bg-slate-200 -translate-y-1/2 z-0 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400 transition-all duration-700 ease-out rounded-full"
                                style={{
                                    width: `${((currentStep + 1) / milestoneSteps.length) * 100}%`,
                                }}
                            />
                        </div>

                        {milestoneSteps.map((step, index) => {
                            const isReached = index <= currentStep;
                            const isCurrent = index === currentStep;

                            return (
                                <div
                                    key={step.id}
                                    className="flex flex-col items-center relative z-10 cursor-pointer group"
                                    onClick={() => goToStep(index)}
                                >
                                    {/* Step Year / Badge (Above circle) */}
                                    <div className="text-center mb-4 h-12 flex flex-col justify-end">
                                        <span
                                            className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all duration-300 border ${
                                                isCurrent
                                                    ? step.isAward
                                                        ? "bg-blue-100 text-blue-900 border-blue-300 shadow-xs"
                                                        : "bg-blue-50 text-blue-700 border-blue-200 shadow-xs"
                                                    : isReached
                                                    ? "bg-slate-100 text-slate-700 border-slate-200"
                                                    : "bg-transparent text-slate-400 border-transparent"
                                            }`}
                                        >
                                            {step.year}
                                        </span>
                                    </div>

                                    {/* Step Number Circle (Resting on progress track) */}
                                    <div
                                        className={`
                                            w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 transform border-2 text-sm sm:text-base font-bold
                                            ${
                                                isCurrent
                                                    ? "bg-blue-600 text-white scale-110 shadow-lg border-blue-400 ring-4 ring-blue-100"
                                                    : isReached
                                                    ? "bg-slate-900 text-white border-slate-700 hover:scale-105"
                                                    : "bg-white text-slate-500 border-slate-300 group-hover:scale-105"
                                            }
                                        `}
                                    >
                                        {String(step.id).padStart(2, "0")}
                                    </div>

                                    {/* Step Label (Below circle) */}
                                    <div className="mt-4 text-center max-w-28">
                                        <span
                                            className={`text-xs font-bold tracking-tight transition-colors duration-300 block leading-tight ${
                                                isCurrent
                                                    ? "text-blue-600"
                                                    : isReached
                                                    ? "text-slate-900"
                                                    : "text-slate-400"
                                            }`}
                                        >
                                            {step.shortTitle}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Featured Active Milestone Showcase Card */}
                <div
                    className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs transition-all duration-300 mb-8 select-none"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Top Meta Row */}
                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                                    activeItem.isAward
                                        ? "bg-blue-50 text-blue-900 border-blue-200"
                                        : "bg-blue-50 text-blue-700 border-blue-200"
                                }`}
                            >
                                {activeItem.dateBadge}
                            </span>

                            {activeItem.isAward && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wider shadow-2xs">
                                    <Award className="w-3.5 h-3.5" />
                                    <span>Visionary Business Leader 2026</span>
                                </span>
                            )}
                        </div>

                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-full">
                            Milestone {String(activeItem.id).padStart(2, "0")} / 06
                        </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
                        {activeItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-4xl">
                        {activeItem.description}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-2 flex-wrap pt-5 border-t border-slate-100">
                        {activeItem.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-700"
                            >
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                                <span>{tag}</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls (Previous, Step Counter, Next) */}
                <div className="flex items-center justify-between gap-2">
                    <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-xs sm:text-sm shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all cursor-pointer active:scale-95"
                        aria-label="Previous milestone"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Previous Milestone</span>
                        <span className="sm:hidden">Prev</span>
                    </button>

                    {/* Step Indicators / Dots */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        {milestoneSteps.map((step, idx) => (
                            <button
                                key={step.id}
                                type="button"
                                onClick={() => goToStep(idx)}
                                aria-label={`Jump to milestone ${step.year}`}
                                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                                    idx === currentStep
                                        ? "w-6 sm:w-8 bg-blue-600"
                                        : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-xs sm:text-sm shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all cursor-pointer active:scale-95"
                        aria-label="Next milestone"
                    >
                        <span className="hidden sm:inline">Next Milestone</span>
                        <span className="sm:hidden">Next</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
