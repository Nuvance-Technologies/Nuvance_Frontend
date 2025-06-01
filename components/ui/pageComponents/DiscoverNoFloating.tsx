"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ServiceItem {
    id: string
    title: string
    icon: string
}

const topRowServices: ServiceItem[] = [
    { id: "mobile-app", title: "Mobile App Development", icon: "/DiscoverIcons/appdev.png" },
    { id: "website-dev", title: "Website Development", icon: "/DiscoverIcons/webdev.png" },
    { id: "ecommerce", title: "E-commerce Development", icon: "/DiscoverIcons/ecommerce.png" },
    { id: "odoo-dev", title: "Odoo Development", icon: "/DiscoverIcons/odoo.png" },
    { id: "cloud-services", title: "Cloud Services", icon: "/DiscoverIcons/cloud.png" },
]

const bottomRowServices: ServiceItem[] = [
    { id: "wordpress", title: "WordPress Development", icon: "/DiscoverIcons/wordpress.jpeg" },
    { id: "automation", title: "Work Automation / AI Automation", icon: "/DiscoverIcons/automation.png" },
    { id: "ai-ml", title: "AI/ML Implementation", icon: "/DiscoverIcons/aiml.png" },
    { id: "custom-software", title: "Custom Software Development", icon: "/DiscoverIcons/custom.png" },
    { id: "seo", title: "SEO Integration", icon: "/DiscoverIcons/seo.png" },
]

// Combine all services for mobile carousel
const allServices = [...topRowServices, ...bottomRowServices]

interface ServiceCardProps {
    service: ServiceItem
    onClick?: (serviceId: string) => void
}

function ServiceCard({ service, onClick }: ServiceCardProps) {
    return (
        <div className="service-card" onClick={() => onClick?.(service.id)}>
            <div className="service-icon-wrapper">
                <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="service-icon"
                />
            </div>
            <h3 className="service-title">{service.title}</h3>
        </div>
    )
}

interface DiscoverHeroProps {
    onServiceClick?: (serviceId: string) => void
}

export default function DiscoverNoFloating({ onServiceClick }: DiscoverHeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const carouselRef = useRef<HTMLDivElement>(null)
    const touchStartX = useRef<number>(0)
    const touchEndX = useRef<number>(0)

    const handleServiceClick = (serviceId: string) => {
        console.log(`Clicked service: ${serviceId}`)
        onServiceClick?.(serviceId)
    }

    // Auto-slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex >= allServices.length - 1 ? 0 : prevIndex + 1))
        }, 3000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    // Navigation functions
    const goToPrevious = () => {
        setIsAutoPlaying(false)
        setCurrentIndex(currentIndex === 0 ? allServices.length - 1 : currentIndex - 1)
        setTimeout(() => setIsAutoPlaying(true), 5000) // Resume auto-play after 5 seconds
    }

    const goToNext = () => {
        setIsAutoPlaying(false)
        setCurrentIndex(currentIndex >= allServices.length - 1 ? 0 : currentIndex + 1)
        setTimeout(() => setIsAutoPlaying(true), 5000) // Resume auto-play after 5 seconds
    }

    // Touch handlers for swipe functionality
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

    return (
        <section className="discover-hero">
            <div className="discover-hero-container">
                {/* Desktop Layout - Static Rows */}
                <div className="desktop-layout">
                    <div className="services-grid">
                        {/* Top Row */}
                        <div className="services-row">
                            {topRowServices.map((service) => (
                                <ServiceCard key={service.id} service={service} onClick={handleServiceClick} />
                            ))}
                        </div>

                        {/* Bottom Row */}
                        <div className="services-row">
                            {bottomRowServices.map((service) => (
                                <ServiceCard key={service.id} service={service} onClick={handleServiceClick} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Carousel */}
                <div className="mobile-layout">
                    <div className="mobile-carousel-container">
                        {/* Navigation Arrows */}
                        <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious} aria-label="Previous service">
                            <ChevronLeft size={24} />
                        </button>

                        <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next service">
                            <ChevronRight size={24} />
                        </button>

                        {/* Carousel */}
                        <div
                            className="mobile-carousel"
                            ref={carouselRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className="carousel-track"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {allServices.map((service) => (
                                    <div key={service.id} className="carousel-slide">
                                        <ServiceCard service={service} onClick={handleServiceClick} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="carousel-dots">
                            {allServices.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => {
                                        setIsAutoPlaying(false)
                                        setCurrentIndex(index)
                                        setTimeout(() => setIsAutoPlaying(true), 5000)
                                    }}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
