"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { Building2, Wrench, RotateCcw, Lightbulb, Globe, ChevronLeft, ChevronRight } from "lucide-react"

interface TimelineItem {
    icon: React.ReactNode
    date: string
    title: string
    description: string
    color: string
}

const timelineData: TimelineItem[] = [
    {
        icon: <Building2 className="w-6 h-6" />,
        date: "2024 – The Beginning",
        title: "Founded as TechStudio",
        description:
            "A passionate development company focused on building user-friendly websites and applications. Delivered early success with small business and startup clients.",
        color: "bg-blue-500",
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        date: "Mid-2024 – Growing Capabilities",
        title: "Expanding Service Offerings",
        description:
            "Expanded to include UI/UX design, mobile app development, and digital branding. Built a team of creative developers and designers, working on complex, multi-platform projects.",
        color: "bg-green-500",
    },
    {
        icon: <RotateCcw className="w-6 h-6" />,
        date: "Late 2024 – Rebranding",
        title: "Nuvance Technologies",
        description:
            "Rebranded from TechStudio to Nuvance Technologies to reflect a broader vision. Shifted focus to end-to-end software solutions with AI-powered features and cloud-ready applications.",
        color: "bg-purple-500",
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        date: "2025 – Expanding Innovation",
        title: "Full-Service Development",
        description:
            "Established as a complete software development company. Launched key products including AI, automation, and healthcare-focused tech (e.g., MediLink). Collaborated with global clients.",
        color: "bg-orange-500",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        date: "Today – Your Trusted Digital Partner",
        title: "Leading Digital Innovation",
        description:
            "Delivering custom software, intelligent platforms, and scalable digital products. Serving businesses across industries with a user-first approach and commitment to excellence.",
        color: "bg-red-500",
    },
]

export default function Timeline() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    // Auto-slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    // Navigation functions
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + timelineData.length) % timelineData.length)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return

        const distance = touchStartX.current - touchEndX.current
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            goToNext()
        } else if (isRightSwipe) {
            goToPrevious()
        }
    }

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false)
    const handleMouseLeave = () => setIsAutoPlaying(true)

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Journey</h1>
                <p className="text-xl text-black font-bold max-w-2xl mx-auto">
                    From TechStudio to Nuvance Technologies - A story of growth, innovation, and digital excellence
                </p>
            </div>

            {/* Horizontal Timeline Carousel */}
            <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden mx-12">
                    <div
                        ref={carouselRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {timelineData.map((item, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-4">
                                <div className="relative">
                                    {/* Horizontal Line */}
                                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>

                                    {/* Icon Circle */}
                                    <div
                                        className={`relative mx-auto w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg z-10 mb-6`}
                                    >
                                        {React.cloneElement(item.icon as React.ReactElement)}
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
                                        <div className="flex justify-center mb-3">
                                            <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                {item.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {timelineData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 bg-gray-200 rounded-full h-1 max-w-md mx-auto">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / timelineData.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Mobile Swipe Instruction */}
            <div className="text-center mt-8 md:hidden">
                <p className="text-sm text-gray-500">Swipe left or right to navigate</p>
            </div>
        </div>
    )
}
