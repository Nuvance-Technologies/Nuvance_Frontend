"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PointCard from "@/components/cards/PointCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import ExecutionProcess from "@/components/ui/pageComponents/ExecutionProcess";
import BookDemoCall from "@/components/ui/BookCall";
import DiscoverNoFloating from "@/components/ui/pageComponents/DiscoverNoFloating";
import BestTech from "@/components/ui/pageComponents/BestTech";
import Image from "next/image";
import CalendlyModal from "@/components/ui/CalendlyModal";

const industries = [
    "Media & Entertainment",
    "Travel & Hospitality",
    "Education & E-Learning",
    "Healthcare & Life Sciences",
    "Banking & Financial Services",
    "Retail & E-Commerce",
    "Logistics & Supply Chain",
    "Real Estate & Property Tech",
    "Automotive & Fleet Management",
    "Agriculture & AgTech",
    "Government & Public Sector",
    "Energy & Utilities"
];

const backgroundImages = [
    "/bgimg-1.jpg",
    "/bgimg-2.jpg",
    "/bgimg-3.jpg",
    "/bgimg-4.jpg",
];

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Background images slideshow interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Industries marquee animation
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrameId: number;
        let position = 0;
        const speed = 0.5;

        const animate = () => {
            position -= speed;
            if (position <= -slider.scrollWidth / 2) {
                position = 0;
            }
            slider.style.transform = `translateX(${position}px)`;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const handleBookDemoClick = () => {
        setShowCalendlyModal(true);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-900 flex flex-col">
            {/* Calendly Modal */}
            <CalendlyModal
                isOpen={showCalendlyModal}
                onClose={() => setShowCalendlyModal(false)}
            />

            <Navbar />

            {/* Hero Section with Cycling Background Images & Professional Overlay */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 sm:pt-28">
                {/* Background Images Cross-Fade */}
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        aria-hidden="true"
                    />
                ))}

                {/* Grounded Dark Gradient & Noise Overlay */}
                <div className="absolute inset-0 bg-slate-950/80 backdrop-brightness-75" />

                {/* Hero Foreground Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 pt-24 sm:pt-32 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-white/10 border border-white/20 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200 mb-5 sm:mb-6 backdrop-blur-xs shadow-sm animate-fade-in-up">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                        <span>Your success, our software.</span>
                    </div>

                    <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.15] mb-5 sm:mb-6 drop-shadow-sm animate-fade-in-up delay-150">
                        Nuvance Technologies: Building Enterprise Systems, <br className="hidden sm:inline" />
                        <span className="text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text">
                            Your Strategic Tech Partner
                        </span>
                    </h1>

                    <p className="text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-7 sm:mb-8 animate-fade-in-up delay-300">
                        We architect, develop, and scale mission-critical web applications, mobile platforms, and high-availability cloud infrastructure for organizations worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-10 sm:mb-12 animate-fade-in-up delay-450">
                        <button
                            type="button"
                            onClick={() => router.push("/services")}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold rounded-md border border-blue-500 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                            <span>Explore Our Services</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                            type="button"
                            onClick={handleBookDemoClick}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white text-sm font-semibold rounded-md border border-white/30 backdrop-blur-xs shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                        >
                            <Calendar className="w-4 h-4 text-slate-200" />
                            <span>Schedule Consultation</span>
                        </button>
                    </div>

                    {/* Image Slide Indicators */}
                    <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`View slide ${index + 1}`}
                                className={`h-1.5 transition-all duration-300 rounded-xs cursor-pointer ${
                                    index === currentImageIndex ? "w-8 bg-blue-500" : "w-3 bg-white/40 hover:bg-white/70"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Engineering Commitments */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-white/15 max-w-2xl mx-auto text-[11px] sm:text-xs font-medium text-slate-300">
                        <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                            <span>100% IP & Source Ownership</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                            <span>Agile Sprint Delivery</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                            <span>Production QA & Security</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section */}
            <section className="py-14 sm:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                    <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1">
                        Technical Capabilities
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                        Core Engineering Services
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-2">
                        Tailored technical disciplines designed to meet strict performance, security, and scalability metrics.
                    </p>
                </div>

                <DiscoverNoFloating onServiceClick={() => router.push("/services")} />
            </section>

            {/* Production Technologies & Tooling */}
            <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                    <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1">
                        Technology Stack
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                        Production-Grade Technologies & Frameworks
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-2">
                        We leverage battle-tested stacks suited to complex multi-tier platforms and cloud infrastructure.
                    </p>
                </div>

                <BestTech />
            </section>

            {/* Execution Process */}
            <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
                        Our Execution Process
                    </h2>
                </div>

                <ExecutionProcess />
            </section>

            {/* Industries Section */}
            <section className="bg-white py-14 sm:py-20 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                    <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1">
                        Domain Experience
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                        Cross-Industry Technical Expertise
                    </h2>
                    <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
                        Architecting tailored digital systems across high-compliance and data-intensive industries.
                    </p>
                </div>

                <div className="relative h-16 overflow-hidden mb-8 max-w-6xl mx-auto">
                    {/* Gradient Fade Masks */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                    <div ref={sliderRef} className="absolute whitespace-nowrap flex items-center">
                        {[...industries, ...industries].map((industry, index) => (
                            <div key={index} className="inline-block mx-2.5">
                                <PointCard text={industry} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button
                        text="Review Case Studies & Deliveries"
                        variant="general_1"
                        onClick={() => router.push("/case-study")}
                        endIcon={<ArrowRight className="w-4 h-4" />}
                    />
                </div>
            </section>

            {/* Technical Consultation CTA Section */}
            <section className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white border border-slate-200 rounded-md p-8 sm:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl text-center md:text-left">
                            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-2">
                                Direct Engineering Consultation
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-3 tracking-tight">
                                Plan Your Technical Roadmap With Our Leads
                            </h2>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                                Discuss system requirements, technical trade-offs, timelines, and budget estimates directly with our senior engineering team.
                            </p>
                            <div>
                                <BookDemoCall onClick={handleBookDemoClick} text="Book a 30-Minute Consultation" />
                            </div>
                        </div>

                        <div className="flex-shrink-0 flex items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-md">
                            <Image
                                src="/contactPageIcons/askOurExperts.png"
                                alt="Consult Our Engineers"
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}