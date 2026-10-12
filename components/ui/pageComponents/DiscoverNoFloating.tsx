"use client";

import type React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
    id: string;
    title: string;
    icon: string;
    desc: string;
}

const topRowServices: ServiceItem[] = [
    { id: "mobile-app", title: "Mobile Engineering", desc: "Native iOS, Android & cross-platform apps", icon: "/DiscoverIcons/appdev.png" },
    { id: "website-dev", title: "Web Platforms", desc: "Enterprise web apps & SaaS interfaces", icon: "/DiscoverIcons/webdev.png" },
    { id: "ecommerce", title: "E-Commerce Systems", desc: "Multi-tenant transactional storefronts", icon: "/DiscoverIcons/ecommerce.png" },
    { id: "odoo-dev", title: "ERP & Odoo Solutions", desc: "Business process automation & CRM", icon: "/DiscoverIcons/odoo.png" },
    { id: "cloud-services", title: "Cloud Architecture", desc: "Scalable cloud hosting, DevOps & SLAs", icon: "/DiscoverIcons/cloud.png" },
];

const bottomRowServices: ServiceItem[] = [
    { id: "wordpress", title: "Headless CMS Solutions", desc: "Custom editorial and CMS development", icon: "/DiscoverIcons/wordpress.jpeg" },
    { id: "automation", title: "Workflow Automation", desc: "API integrations & event pipelines", icon: "/DiscoverIcons/automation.png" },
    { id: "ai-ml", title: "AI & Machine Learning", desc: "Applied models & intelligent processing", icon: "/DiscoverIcons/aiml.png" },
    { id: "custom-software", title: "Custom Software", desc: "Bespoke internal systems & microservices", icon: "/DiscoverIcons/custom.png" },
    { id: "seo", title: "Technical SEO & Speed", desc: "Core Web Vitals & organic performance", icon: "/DiscoverIcons/seo.png" },
];

const allServices = [...topRowServices, ...bottomRowServices];

interface ServiceCardProps {
    service: ServiceItem;
    onClick?: (serviceId: string) => void;
    className?: string;
}

function ServiceCard({ service, onClick, className = "" }: ServiceCardProps) {
    return (
        <div
            onClick={() => onClick?.(service.id)}
            className={`group flex flex-col items-start p-5 sm:p-6 bg-white border border-slate-200 hover:border-blue-300 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer ${className}`}
        >
            <div className="w-12 h-12 bg-slate-50 group-hover:bg-blue-50 border border-slate-100 group-hover:border-blue-100 rounded-lg flex items-center justify-center mb-3.5 transition-colors duration-200 shadow-2xs">
                <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
                {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {service.desc}
            </p>
        </div>
    );
}

interface DiscoverHeroProps {
    onServiceClick?: (serviceId: string) => void;
}

export default function DiscoverNoFloating({ onServiceClick }: DiscoverHeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const handleServiceClick = (serviceId: string) => {
        onServiceClick?.(serviceId);
    };

    // Mobile carousel auto-advance
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= allServices.length - 1 ? 0 : prev + 1));
        }, 3600);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev === 0 ? allServices.length - 1 : prev - 1));
        setTimeout(() => setIsAutoPlaying(true), 6000);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev >= allServices.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAutoPlaying(true), 6000);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const diffX = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                goToPrevious();
            } else {
                goToNext();
            }
        }
        setTouchStartX(null);
    };

    return (
        <section className="py-6 overflow-hidden">
            <div className="w-full">
                {/* Desktop Layout - Continuous Marquee Rows (Opposing Directions) */}
                <div className="hidden lg:block space-y-4 relative overflow-hidden max-w-7xl mx-auto px-4">
                    {/* Subtle Side Fade Overlays */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                    {/* Top Row - Continuous Scroll Left */}
                    <div className="overflow-hidden">
                        <div className="animate-marquee-left gap-4 py-2">
                            {[...topRowServices, ...topRowServices, ...topRowServices].map((service, idx) => (
                                <ServiceCard
                                    key={`top-${service.id}-${idx}`}
                                    service={service}
                                    onClick={handleServiceClick}
                                    className="w-[230px] flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row - Continuous Scroll Right */}
                    <div className="overflow-hidden">
                        <div className="animate-marquee-right gap-4 py-2">
                            {[...bottomRowServices, ...bottomRowServices, ...bottomRowServices].map((service, idx) => (
                                <ServiceCard
                                    key={`bot-${service.id}-${idx}`}
                                    service={service}
                                    onClick={handleServiceClick}
                                    className="w-[230px] flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Layout - Interactive Touch-Swipe Animated Carousel */}
                <div className="lg:hidden relative px-4">
                    <div
                        className="flex items-center justify-center select-none"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="w-full max-w-sm transition-all duration-300">
                            <ServiceCard
                                service={allServices[currentIndex]}
                                onClick={handleServiceClick}
                                className="w-full min-h-[190px] border-slate-300 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Carousel navigation controls */}
                    <div className="flex items-center justify-between mt-5 max-w-sm mx-auto px-2">
                        <button
                            type="button"
                            onClick={goToPrevious}
                            aria-label="Previous capability"
                            className="p-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-full transition-all cursor-pointer shadow-2xs active:scale-95"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        {/* Carousel Dots */}
                        <div className="flex items-center gap-1.5">
                            {allServices.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentIndex(idx);
                                        setTimeout(() => setIsAutoPlaying(true), 6000);
                                    }}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={`h-2 transition-all rounded-full cursor-pointer ${
                                        idx === currentIndex ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={goToNext}
                            aria-label="Next capability"
                            className="p-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-full transition-all cursor-pointer shadow-2xs active:scale-95"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-center text-[11px] text-slate-400 mt-2">
                        Swipe left or right to explore capabilities
                    </p>
                </div>
            </div>
        </section>
    );
}
