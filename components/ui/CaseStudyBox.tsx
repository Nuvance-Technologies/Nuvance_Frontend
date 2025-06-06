"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
    id: number
    title: string
    subtitle: string
    industry: string
    image: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Halloween Page",
        subtitle: "A Spooky Seasonal Experience",
        industry: "Event Marketing",
        image: "/projectImg/halloween.png",
    },
    {
        id: 2,
        title: "Headphones Page",
        subtitle: "A Modern Product-Focused Landing Page",
        industry: "Consumer Electronics",
        image: "/projectImg/beats.png",
    },
    {
        id: 3,
        title: "St. Joseph School Website",
        subtitle: "A Modern Digital Presence for Education",
        industry: "Education",
        image: "/projectImg/college.png",
    },
    {
        id: 4,
        title: "Boleto Vadapav",
        subtitle: "A Modern Online Presence for a Classic Indian Street Delight",
        industry: "Food & Beverage",
        image: "/projectImg/vadapav.png",
    },
]

export default function CaseStudyBox() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const carouselRef = useRef<HTMLDivElement>(null)
    const startX = useRef(0)
    const isDragging = useRef(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isMobile) return
        startX.current = e.touches[0].clientX
        isDragging.current = true
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isMobile || !isDragging.current) return
        e.preventDefault()
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!isMobile || !isDragging.current) return

        const endX = e.changedTouches[0].clientX
        const diffX = startX.current - endX

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide()
            } else {
                prevSlide()
            }
        }

        isDragging.current = false
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!isMobile) return
        startX.current = e.clientX
        isDragging.current = true
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isMobile || !isDragging.current) return
        e.preventDefault()
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isMobile || !isDragging.current) return

        const endX = e.clientX
        const diffX = startX.current - endX

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide()
            } else {
                prevSlide()
            }
        }

        isDragging.current = false
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="relative">
                {/* Desktop Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Mobile Carousel Layout */}
                <div className="md:hidden relative">
                    <div
                        ref={carouselRef}
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                    >
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {projects.map((project) => (
                                <div key={project.id} className="w-full flex-shrink-0 px-4">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            {/* Project Image */}
            <div className="relative cursor-pointer h-48 bg-gray-100">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-3 leading-relaxed">{project.subtitle}</p>

                <p className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Industry:</span> {project.industry}
                </p>

                {/* Read More Button */}
                <button
                    onClick={() => {
                        // Placeholder for future implementation
                        console.log(`Read more about ${project.title}`)
                    }}
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Read More
                </button>
            </div>
        </div>
    )
}
