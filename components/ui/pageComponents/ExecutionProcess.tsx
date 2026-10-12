"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Search, Monitor, Code, TestTube, Rocket, Settings } from "lucide-react";

interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Research",
        description: "Consultation and Requirements gathering",
        icon: <Search className="w-8 h-8" />,
    },
    {
        id: 2,
        title: "Design",
        description: "Product Architecture, Design, & Prototype",
        icon: <Monitor className="w-8 h-8" />,
    },
    {
        id: 3,
        title: "Development",
        description: "Software Coding & Optimization",
        icon: <Code className="w-8 h-8" />,
    },
    {
        id: 4,
        title: "Testing",
        description: "Quality Assurance & Trouble-shooting",
        icon: <TestTube className="w-8 h-8" />,
    },
    {
        id: 5,
        title: "Deployment",
        description: "Launch, Beta Live, & Live",
        icon: <Rocket className="w-8 h-8" />,
    },
    {
        id: 6,
        title: "Maintenance",
        description: "Monitoring, Analysis, & Complete Support",
        icon: <Settings className="w-8 h-8" />,
    },
];

export default function ExecutionProcess() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState<{ left: boolean; right: boolean }>({ left: false, right: false });
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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

    // Auto-advancing running timer (3 seconds)
    useEffect(() => {
        if (isVisible && !isMobile) {
            const timer = setInterval(() => {
                setCurrentStep((prev) => (prev + 1) % processSteps.length);
            }, 3000);

            return () => clearInterval(timer);
        }
    }, [isVisible, isMobile]);

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % processSteps.length);
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
    };

    const goToStep = (index: number) => {
        setCurrentStep(index);
    };

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

    return (
        <div
            ref={containerRef}
            className="w-full py-8 sm:py-10 px-4"
        >
            <div className="max-w-7xl mx-auto">
                {/* Desktop View */}
                <div className="hidden md:block relative">
                    <div className="flex items-center justify-between relative">
                        {/* Continuous Progress Line */}
                        <div className="absolute top-[68%] left-0 right-0 h-1 bg-slate-300 -translate-y-1/2 z-0">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 transition-all duration-1000 ease-out"
                                style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                            />
                        </div>

                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center relative z-10 cursor-pointer group"
                                onClick={() => goToStep(index)}
                            >
                                {/* Step Content (Above circle) */}
                                <div className="text-center mb-6 max-w-44 h-20 flex flex-col justify-end">
                                    <h3
                                        className={`text-lg font-bold mb-1 transition-all duration-500 ${
                                            index <= currentStep ? "text-slate-900" : "text-slate-400"
                                        }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className={`text-xs leading-snug transition-all duration-500 ${
                                            index <= currentStep ? "text-slate-600" : "text-slate-400"
                                        }`}
                                    >
                                        {step.description}
                                    </p>
                                </div>

                                {/* Icon Circle (On progress line) */}
                                <div
                                    className={`
                                        w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform
                                        ${
                                            index <= currentStep
                                                ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-110 shadow-lg"
                                                : "bg-slate-300 text-slate-500 group-hover:scale-105"
                                        }
                                    `}
                                >
                                    {step.icon}
                                </div>

                                {/* Step Number (Below circle) */}
                                <div
                                    className={`
                                        mt-4 text-2xl font-bold transition-all duration-500
                                        ${
                                            index <= currentStep
                                                ? "text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
                                                : "text-slate-300"
                                        }
                                    `}
                                >
                                    {String(step.id).padStart(2, "0")}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    <div
                        className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-xs select-none"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Step Card with swipe indicator */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                                {processSteps[currentStep].icon}
                            </div>

                            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">
                                Phase {String(processSteps[currentStep].id).padStart(2, "0")}
                            </span>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                {processSteps[currentStep].title}
                            </h3>

                            <p className="text-sm text-slate-600 max-w-xs mx-auto mb-4 leading-relaxed">
                                {processSteps[currentStep].description}
                            </p>

                            <p className="text-[11px] text-slate-400">
                                Swipe or use arrows to change steps
                            </p>
                        </div>

                        {/* Navigation controls row */}
                        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                            <button
                                type="button"
                                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95 transition-all cursor-pointer"
                                onClick={prevStep}
                                aria-label="Previous step"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>

                            {/* Progress Dots */}
                            <div className="flex items-center gap-1.5">
                                {processSteps.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                                            index === currentStep
                                                ? "w-6 bg-gradient-to-r from-blue-500 to-purple-600"
                                                : "w-2 bg-slate-300"
                                        }`}
                                        onClick={() => goToStep(index)}
                                        aria-label={`Go to step ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95 transition-all cursor-pointer"
                                onClick={nextStep}
                                aria-label="Next step"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                                style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation Arrows */}
                <div className="hidden md:flex items-center justify-between mt-12 px-2">
                    <button
                        className={`
                            flex items-center gap-1.5 px-4 py-2 rounded-full
                            bg-white
                            border border-slate-200
                            text-slate-700 font-medium text-sm
                            shadow-sm hover:shadow-md
                            transition-all duration-300 cursor-pointer
                            ${isHovering.left ? "scale-105" : ""}
                            focus:outline-none
                        `}
                        onClick={prevStep}
                        onMouseEnter={() => setIsHovering((prev) => ({ ...prev, left: true }))}
                        onMouseLeave={() => setIsHovering((prev) => ({ ...prev, left: false }))}
                        aria-label="Previous step"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous</span>
                    </button>

                    {/* Step Counter */}
                    <div className="text-center">
                        <span className="text-sm font-medium text-slate-500">
                            Step {currentStep + 1} of {processSteps.length}
                        </span>
                    </div>

                    <button
                        className={`
                            flex items-center gap-1.5 px-4 py-2 rounded-full
                            bg-white
                            border border-slate-200
                            text-slate-700 font-medium text-sm
                            shadow-sm hover:shadow-md
                            transition-all duration-300 cursor-pointer
                            ${isHovering.right ? "scale-105" : ""}
                            focus:outline-none
                        `}
                        onClick={nextStep}
                        onMouseEnter={() => setIsHovering((prev) => ({ ...prev, right: true }))}
                        onMouseLeave={() => setIsHovering((prev) => ({ ...prev, right: false }))}
                        aria-label="Next step"
                    >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Mobile Step Counter */}
                <div className="md:hidden text-center mt-4">
                    <span className="text-sm text-slate-500">
                        Step {currentStep + 1} of {processSteps.length}
                    </span>
                </div>
            </div>
        </div>
    );
}
