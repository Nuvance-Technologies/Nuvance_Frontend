"use client";

import { Carousel } from "@/components/ui/Carousel";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ServiceHeroCard from "@/components/ui/ServiceCard";
import ServiceButton from "@/components/ui/ServiceButton";
import { useState } from "react";
import Image from "next/image";
import { Wrench, CheckCircle2 } from "lucide-react";
import CalendlyModal from "@/components/ui/CalendlyModal";

export default function Services() {
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);

    const serviceCards = [
        {
            titleMain: "Web Application Engineering",
            iconImage: "/serviceIcons/websiteDev.png",
            title1: "Business Value",
            desc1: "A fast, scalable, and responsive web platform reduces bounce rates, improves transaction flow, and enhances customer retention.",
            title2: "Engineering Scope",
            desc2: "Custom frontend architecture (Next.js, React), resilient API microservices, database tuning, and automated deployment pipelines."
        },
        {
            titleMain: "Mobile App Development",
            iconImage: "/serviceIcons/appDev.png",
            title1: "Business Value",
            desc1: "Mobile platforms provide direct user engagement, offline capability, and high conversion rates for consumer and enterprise workflows.",
            title2: "Engineering Scope",
            desc2: "Cross-platform iOS and Android applications via Flutter, React Native, or native Swift/Kotlin with real-time sync and secure biometric auth."
        },
        {
            titleMain: "Applied AI & Data Engineering",
            iconImage: "/serviceIcons/aimlSol.png",
            title1: "Business Value",
            desc1: "Automation and predictive intelligence reduce operational labor costs and unlock actionable insights from complex organizational data.",
            title2: "Engineering Scope",
            desc2: "Custom model integration, automated data ingestion pipelines, NLP workflows, and robust inference endpoints."
        },
        {
            titleMain: "Cloud Architecture & DevOps",
            iconImage: "/serviceIcons/cloud.png",
            title1: "Business Value",
            desc1: "Containerized cloud infrastructure provides high availability, automatic scaling during peak loads, and robust disaster recovery.",
            title2: "Engineering Scope",
            desc2: "AWS, GCP, and Azure cloud infrastructure provisioning, Docker/Kubernetes container orchestration, CI/CD setup, and 24/7 uptime monitoring."
        },
        {
            titleMain: "Custom Enterprise Software",
            iconImage: "/serviceIcons/customSoftware.png",
            title1: "Business Value",
            desc1: "Off-the-shelf software creates vendor lock-in. Custom software aligns precisely with your internal operating models and compliance demands.",
            title2: "Engineering Scope",
            desc2: "Bespoke ERP modules, administrative portals, third-party API aggregators, and secure multi-tenant role-based platforms."
        },
        {
            titleMain: "Technical SEO & Speed Optimization",
            iconImage: "/serviceIcons/seo.png",
            title1: "Business Value",
            desc1: "Technical performance directly impacts search engine ranking, lower cost-per-acquisition (CPA), and overall discoverability.",
            title2: "Engineering Scope",
            desc2: "Core Web Vitals remediation, server-side rendering (SSR), structured schema markup, and content delivery network (CDN) edge caching."
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16">
                {/* Header Section */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4">
                        <Wrench className="w-4 h-4 text-blue-600" />
                        <span>IT Solutions & Engineering • Your Tech Partner</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
                        Comprehensive Software Development & IT Solutions
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        As your dedicated tech partner, we deliver full-cycle software engineering, custom IT solutions, and distributed cloud backends tailored to your operational specifications.
                    </p>
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden mb-12">
                    <Carousel>
                        {serviceCards.map((card, index) => (
                            <ServiceHeroCard
                                key={index}
                                titleMain={card.titleMain}
                                iconImage={card.iconImage}
                                title1={card.title1}
                                desc1={card.desc1}
                                title2={card.title2}
                                desc2={card.desc2}
                            />
                        ))}
                    </Carousel>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {serviceCards.map((card, index) => (
                        <ServiceHeroCard
                            key={index}
                            titleMain={card.titleMain}
                            iconImage={card.iconImage}
                            title1={card.title1}
                            desc1={card.desc1}
                            title2={card.title2}
                            desc2={card.desc2}
                        />
                    ))}
                </div>

                {/* Delivery Standard Callout */}
                <div className="bg-white border border-slate-200 rounded-md p-8 sm:p-12 shadow-xs mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1">
                                Delivery Standards
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4">
                                Engineered for Production Stability
                            </h2>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                                We do not deliver disposable prototypes. Every project is built using maintainable modular architectures, complete unit test coverage, and comprehensive API documentation.
                            </p>

                            <div className="space-y-2.5">
                                {[
                                    "Direct access to principal engineering leads",
                                    "Weekly milestone demos with working build environments",
                                    "Full repository source code and asset transfer",
                                    "Documented database migrations and setup runbooks",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-100 rounded-md text-center">
                            <Image
                                src="/serviceIcons/readyToBring.png"
                                alt="Technical Consultation"
                                width={240}
                                height={240}
                                className="object-contain mb-6"
                            />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Ready to Discuss Your Project Architecture?
                            </h3>
                            <p className="text-xs text-slate-600 mb-4 max-w-sm">
                                Schedule a 30-minute discovery call to evaluate specifications and delivery timeframes.
                            </p>
                            <ServiceButton
                                label="Schedule Technical Discovery"
                                onClick={() => setShowCalendlyModal(true)}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Calendly Modal */}
            <CalendlyModal
                isOpen={showCalendlyModal}
                onClose={() => setShowCalendlyModal(false)}
            />

            <Footer />
        </div>
    );
}