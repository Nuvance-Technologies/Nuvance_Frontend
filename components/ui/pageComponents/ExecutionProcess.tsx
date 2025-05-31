"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Search, Monitor, Code, TestTube, Rocket, Settings } from "lucide-react"

interface ProcessStep {
    id: number
    title: string
    description: string
    icon: React.ReactNode
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
]

export default function ExecutionProcess() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isHovering, setIsHovering] = useState<{ left: boolean; right: boolean }>({ left: false, right: false })

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (isVisible && !isMobile) {
            const timer = setInterval(() => {
                setCurrentStep((prev) => (prev + 1) % processSteps.length)
            }, 3000)

            return () => clearInterval(timer)
        }
    }, [isVisible, isMobile])

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % processSteps.length)
    }

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
    }

    const goToStep = (index: number) => {
        setCurrentStep(index)
    }

    return (
        <div
            ref={containerRef}
            className="w-full py-16 px-4 bg-gradient-to-br bg-mainBgColor"
        >
            <div className="max-w-7xl mx-auto">
                {/* Desktop View */}
                <div className="hidden md:block relative">
                    <div className="flex items-center justify-between relative">
                        {/* Progress Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 -translate-y-1/2 z-0">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                                style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                            />
                        </div>

                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center relative z-10 cursor-pointer group"
                                onClick={() => goToStep(index)}
                            >
                                {/* Step Content */}
                                <div className="text-center mb-6 max-w-48">
                                    <h3
                                        className={`text-xl font-semibold mb-2 transition-all duration-500 ${index <= currentStep ? "text-slate-800" : "text-slate-400"
                                            }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className={`text-sm transition-all duration-500 ${index <= currentStep ? "text-slate-600" : "text-slate-400"
                                            }`}
                                    >
                                        {step.description}
                                    </p>
                                </div>

                                {/* Icon Circle */}
                                <div
                                    className={`
                  w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform
                  ${index <= currentStep
                                            ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-110 shadow-lg"
                                            : "bg-slate-300 text-slate-500 group-hover:scale-105"
                                        }
                `}
                                >
                                    {step.icon}
                                </div>

                                {/* Step Number */}
                                <div
                                    className={`
                  mt-4 text-2xl font-bold transition-all duration-500
                  ${index <= currentStep
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
                    <div className="relative">
                        {/* Custom Navigation Arrows */}
                        <button
                            className={`
                absolute left-0 top-1/2 -translate-y-1/2 z-10 
                w-10 h-10 rounded-full flex items-center justify-center
                bg-white/80 backdrop-blur-sm
                border border-slate-200
                text-slate-700
                shadow-md hover:shadow-lg
                transition-all duration-300
                ${isHovering.left ? "scale-110" : "scale-100"}
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              `}
                            onClick={prevStep}
                            onMouseEnter={() => setIsHovering((prev) => ({ ...prev, left: true }))}
                            onMouseLeave={() => setIsHovering((prev) => ({ ...prev, left: false }))}
                            aria-label="Previous step"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            className={`
                absolute right-0 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 rounded-full flex items-center justify-center
                bg-white/80 backdrop-blur-sm
                border border-slate-200
                text-slate-700
                shadow-md hover:shadow-lg
                transition-all duration-300
                ${isHovering.right ? "scale-110" : "scale-100"}
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              `}
                            onClick={nextStep}
                            onMouseEnter={() => setIsHovering((prev) => ({ ...prev, right: true }))}
                            onMouseLeave={() => setIsHovering((prev) => ({ ...prev, right: false }))}
                            aria-label="Next step"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Current Step Display */}
                        <div className="mx-12 py-8">
                            <div className="text-center">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
                                    {processSteps[currentStep].icon}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                    {processSteps[currentStep].title}
                                </h3>

                                <p className="text-slate-600 mb-6">{processSteps[currentStep].description}</p>

                                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
                                    {String(processSteps[currentStep].id).padStart(2, "0")}
                                </div>
                            </div>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center space-x-2 mt-6">
                            {processSteps.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125"
                                        : "bg-slate-300 hover:bg-slate-400"
                                        }`}
                                    onClick={() => goToStep(index)}
                                    aria-label={`Go to step ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6 w-full bg-slate-300 rounded-full h-2">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                                style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation Arrows */}
                <div className="hidden md:flex justify-between mt-8">
                    <button
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/80 backdrop-blur-sm
              border border-slate-200
              text-slate-700
              shadow-md hover:shadow-lg
              transition-all duration-300
              ${isHovering.left ? "scale-105 translate-x-1" : ""}
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
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
                        <span className="text-sm text-slate-500">
                            Step {currentStep + 1} of {processSteps.length}
                        </span>
                    </div>

                    <button
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/80 backdrop-blur-sm
              border border-slate-200
              text-slate-700
              shadow-md hover:shadow-lg
              transition-all duration-300
              ${isHovering.right ? "scale-105 -translate-x-1" : ""}
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
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
    )
}
