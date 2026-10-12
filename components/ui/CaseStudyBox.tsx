"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
    ExternalLink,
    CheckCircle2,
    X,
    Layers,
    Globe,
    Cpu,
    Sparkles,
} from "lucide-react";

export interface ProjectCase {
    id: number;
    title: string;
    subtitle: string;
    industry: string;
    categoryGroup: "web" | "mobile" | "edtech" | "enterprise";
    image: string;
    websiteUrl?: string;
    isAppStore?: boolean;
    description: string;
    challenge: string;
    solution: string;
    technologies: string[];
    metrics: string[];
}

export const corporateProjects: ProjectCase[] = [
    {
        id: 1,
        title: "KP Productions",
        subtitle: "Tech & Innovation EdTech Platform & Production Studio in Indore",
        industry: "EdTech & Media Production",
        categoryGroup: "edtech",
        image: "/projectImg/kp_productions.png",
        websiteUrl: "https://kpproductions.co.in",
        description: "Developed a Tech and Innovation Edtech Platform designed to deliver high-quality educational content and resources, and production studio showcase in Indore.",
        challenge: "Creating an engaging, high-performance platform capable of streaming HD educational resources, studio reels, and managing student registrations with zero latency.",
        solution: "Engineered a Next.js full-stack platform with optimized media delivery, CDN acceleration, responsive class booking workflows, and administrative content management.",
        technologies: ["Next.js", "React", "Node.js", "Video Streaming CDN", "Tailwind CSS"],
        metrics: ["< 0.8s Initial Page Load", "99.9% Platform Uptime", "Zero-Buffer HD Streaming"],
    },
    {
        id: 2,
        title: "Prepnerdz",
        subtitle: "Automated Placement Training Modules & Student Analytics Platform",
        industry: "EdTech Platform",
        categoryGroup: "edtech",
        image: "/projectImg/prepnerdz.png",
        websiteUrl: "https://prepnerdz.tech",
        description: "Built an end-to-end Ed-Tech solution featuring automated placement training modules, student assessments, and real-time performance analytics.",
        challenge: "Colleges and students needed real-time aptitude testing, algorithmic coding evaluations, and automated performance tracking across thousands of concurrent candidates.",
        solution: "Built a high-throughput assessment platform with automated code sandboxes, psychometric tests, dynamic scorecards, and institutional admin dashboards.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker Sandboxes"],
        metrics: ["10,000+ Assessments Processed", "Real-Time Student Analytics", "Sub-second Score Generation"],
    },
    {
        id: 3,
        title: "Aavaaz International",
        subtitle: "Low-Latency Global Mobile Communication & Secure Messaging Protocol",
        industry: "Mobile Communication (Android)",
        categoryGroup: "mobile",
        image: "/projectImg/aavaaz.png",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        description: "Developed a specialized global communication platform focusing on low-latency messaging and secure data protocols, currently live on the Google Play Store.",
        challenge: "Ensuring instant real-time message synchronization and clear audio transmission even over volatile low-bandwidth cellular networks worldwide.",
        solution: "Architected a custom WebSockets protocol with local SQLite caching, end-to-end payload encryption, and background push worker orchestration.",
        technologies: ["Kotlin / Android", "WebSockets", "SQLite", "End-to-End Encryption", "Google Play"],
        metrics: ["< 120ms Message Latency", "AES-256 Protocol Security", "Live on Google Play Store"],
    },
    {
        id: 4,
        title: "MyTrands",
        subtitle: "Real-Time Trend-Tracking & Lifestyle Social Discovery Engine",
        industry: "Lifestyle & Social (Android)",
        categoryGroup: "mobile",
        image: "/projectImg/mytrands.png",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        description: "Engineered a trend-tracking and lifestyle application utilizing real-time data analytics for personalized content discovery.",
        challenge: "Ingesting and scoring rapidly evolving lifestyle trends across diverse categories while generating individualized recommendation feeds for users.",
        solution: "Developed a real-time analytics pipeline paired with an intuitive Android application allowing users to track, bookmark, and share emerging consumer trends.",
        technologies: ["Android Native", "Node.js", "Redis Cache", "Recommendation Algorithms"],
        metrics: ["Personalized Content Discovery", "Real-Time Trend Feeds", "Smooth 60fps Native UI"],
    },
    {
        id: 5,
        title: "The ADL Mould Craft",
        subtitle: "Precision Tooling & Industrial Mould-Making Manufacturing Portal",
        industry: "Industrial Manufacturing",
        categoryGroup: "enterprise",
        image: "/projectImg/adl_mould.png",
        websiteUrl: "https://theadlmouldcraft.com",
        description: "Engineered a professional digital presence for a dedicated mould-making company to showcase their manufacturing services and industry expertise.",
        challenge: "Industrial clients required an authoritative catalog detailing micron-level mould tolerances, equipment specifications, and rapid B2B inquiry routing.",
        solution: "Crafted a performant corporate web portal with structured technical specifications, industrial capabilities showcase, and direct procurement lead capture.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Technical SEO"],
        metrics: ["100/100 Core Web Vitals", "Global Client Inquiries", "Structured Spec Catalog"],
    },
    {
        id: 6,
        title: "CAIT Women's Wing",
        subtitle: "Confederation of All India Traders Advocacy & Entrepreneur Network",
        industry: "Trade Association & Advocacy",
        categoryGroup: "web",
        image: "/projectImg/cait_women.png",
        websiteUrl: "https://caitwomenjbp.org",
        description: "Developed a comprehensive organizational platform dedicated to fostering business growth, advocacy, and networking opportunities for women entrepreneurs and traders.",
        challenge: "Managing multi-chapter events, membership registrations, regional business directories, and advocacy initiatives on a single secure portal.",
        solution: "Engineered an organizational platform featuring automated member directories, event announcements, executive leadership showcases, and donation/membership workflows.",
        technologies: ["React", "Node.js", "Membership Portal", "Cloud Hosting"],
        metrics: ["Multi-Chapter Network", "Centralized Directory", "Seamless Event RSVPs"],
    },
    {
        id: 7,
        title: "Meeramai Ashram",
        subtitle: "Serene Digital Outreach, Event Coordination & Ashram Portal",
        industry: "Spiritual & Community Outreach",
        categoryGroup: "web",
        image: "/projectImg/meeramai.png",
        websiteUrl: "https://meeramaiashram.com",
        description: "Designed and developed an informative digital platform for the Amarkantak-based ashram to facilitate serene digital outreach and community connection.",
        challenge: "Delivering an accessible, tranquil digital experience accessible to visitors across all age demographics and devices, often in rural network conditions.",
        solution: "Designed a minimalist, fast-loading digital portal detailing ashram history, spiritual retreats, daily schedules, and community outreach programs.",
        technologies: ["Next.js", "Mobile-Optimized Architecture", "Accessible UI", "CDN"],
        metrics: ["Lightweight < 400KB Bundle", "Global Devotee Reach", "Accessible Typography"],
    },
    {
        id: 8,
        title: "Gossip Mobile App",
        subtitle: "High-Frequency Real-Time Social Media & Engagement Engine",
        industry: "Social Media Application",
        categoryGroup: "mobile",
        image: "/projectImg/gossip.png",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        description: "Created a dynamic social media application serving as a core real-time engagement engine. Architecture focuses on high-frequency data sharding and sub-second notification delivery for global users.",
        challenge: "Handling viral bursts of social posts, instant thread replies, and media uploads with sub-second notification delivery without database bottlenecks.",
        solution: "Architected a distributed backend utilizing Redis pub/sub, horizontal database sharding, and real-time push notification pipelines.",
        technologies: ["React Native", "Redis", "Kafka", "WebSockets", "Push Notification Queues"],
        metrics: ["Sub-Second Notifications", "High-Concurrency Sharding", "Distributed Event Bus"],
    },
    {
        id: 9,
        title: "HAo Taxi Application",
        subtitle: "Enterprise Logistics, Dynamic Dispatch & Route Optimization Suite",
        industry: "Logistics Tech",
        categoryGroup: "enterprise",
        image: "/projectImg/haotaxi.png",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        description: "Engineered a comprehensive logistics suite for a leading taxi provider, integrating GPS-based driver dispatching, route optimization algorithms, and dynamic billing systems.",
        challenge: "High-precision location tracking, automated fleet dispatch to nearest available drivers, and dynamic surge pricing calculations under traffic conditions.",
        solution: "Implemented Google Maps Geolocation services, real-time vehicle telemetry, dynamic trip fare calculation algorithms, and dedicated driver/rider interfaces.",
        technologies: ["Mobile SDKs", "Google Maps Platform", "Dynamic Pricing Engine", "Real-Time Telemetry"],
        metrics: ["Automated Driver Dispatch", "Turn-by-Turn Route Optimization", "Dynamic Fare Billing"],
    },
];

export default function CaseStudyBox() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [activeProjectModal, setActiveProjectModal] = useState<ProjectCase | null>(null);

    const filteredProjects = selectedCategory === "all"
        ? corporateProjects
        : corporateProjects.filter((p) => p.categoryGroup === selectedCategory);

    const openProjectDetails = (project: ProjectCase) => {
        setActiveProjectModal(project);
    };

    const closeProjectModal = () => {
        setActiveProjectModal(null);
    };

    useEffect(() => {
        if (!activeProjectModal) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeProjectModal();
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeProjectModal]);

    return (
        <div className="w-full">
            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none flex-wrap">
                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md border transition-all cursor-pointer flex items-center gap-1.5 ${
                        selectedCategory === "all"
                            ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                >
                    <Layers className="w-3.5 h-3.5" />
                    All Deployed Systems ({corporateProjects.length})
                </button>

                <button
                    onClick={() => setSelectedCategory("edtech")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md border transition-all cursor-pointer ${
                        selectedCategory === "edtech"
                            ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                >
                    EdTech Platforms (2)
                </button>

                <button
                    onClick={() => setSelectedCategory("mobile")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md border transition-all cursor-pointer ${
                        selectedCategory === "mobile"
                            ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                >
                    Mobile & Social (3)
                </button>

                <button
                    onClick={() => setSelectedCategory("enterprise")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md border transition-all cursor-pointer ${
                        selectedCategory === "enterprise"
                            ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                >
                    Enterprise & Logistics (2)
                </button>

                <button
                    onClick={() => setSelectedCategory("web")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md border transition-all cursor-pointer ${
                        selectedCategory === "web"
                            ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                >
                    Web & Advocacy (2)
                </button>
            </div>

            {/* Grid Layout of All 9 Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-white rounded-md shadow-xs hover:shadow-md border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
                    >
                        <div>
                            {/* Visual Image Header */}
                            <div
                                onClick={() => openProjectDetails(project)}
                                className="relative h-48 bg-slate-100 border-b border-slate-100 overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />

                                <div className="absolute top-3 left-3 z-10">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-900 bg-white/95 px-2.5 py-1 rounded-xs shadow-xs border border-slate-200">
                                        {project.industry}
                                    </span>
                                </div>

                                {project.websiteUrl && (
                                    <div className="absolute top-3 right-3 z-10">
                                        <a
                                            href={project.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-8 h-8 rounded-md bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                                            title={project.isAppStore ? "Open App Link" : "Visit Website"}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6">
                                <h3
                                    onClick={() => openProjectDetails(project)}
                                    className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors mb-1.5 cursor-pointer"
                                >
                                    {project.title}
                                </h3>

                                <p className="text-xs text-blue-700 font-semibold mb-3">
                                    {project.subtitle}
                                </p>

                                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies Chips */}
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                                    {project.technologies.slice(0, 4).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="text-[10px] font-medium text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded-xs">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Interactive Buttons Bar */}
                        <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                            <button
                                type="button"
                                onClick={() => openProjectDetails(project)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white text-xs font-semibold rounded-md transition-all cursor-pointer shadow-xs"
                            >
                                <span>View Case Details</span>
                            </button>

                            {project.websiteUrl && (
                                <a
                                    href={project.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center p-2.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 rounded-md transition-colors cursor-pointer"
                                    title={project.isAppStore ? "Open App Link" : "Visit Website"}
                                >
                                    <Globe className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Case Study Details Modal */}
            {activeProjectModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
                    onClick={closeProjectModal}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-md shadow-2xl border border-slate-200 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-10">
                            <div>
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-xs border border-blue-100 inline-block mb-1.5">
                                    {activeProjectModal.industry}
                                </span>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                                    {activeProjectModal.title}
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                    {activeProjectModal.subtitle}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={closeProjectModal}
                                aria-label="Close modal"
                                className="p-1.5 text-slate-400 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-md border border-slate-200 transition-colors cursor-pointer flex-shrink-0"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-6">
                            {/* Overview */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                    Project Overview
                                </h4>
                                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-100 p-4 rounded-md">
                                    {activeProjectModal.description}
                                </p>
                            </div>

                            {/* Challenge & Solution Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-md">
                                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                                        The Engineering Challenge
                                    </h5>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {activeProjectModal.challenge}
                                    </p>
                                </div>

                                <div className="p-4 bg-blue-50/40 border border-blue-100 rounded-md">
                                    <h5 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                                        Nuvance Technical Solution
                                    </h5>
                                    <p className="text-xs text-slate-700 leading-relaxed">
                                        {activeProjectModal.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Key Metrics */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                                    Production Metrics & Verified Outcomes
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                    {activeProjectModal.metrics.map((metric, idx) => (
                                        <div
                                            key={idx}
                                            className="p-3 bg-white border border-slate-200 rounded-md shadow-2xs flex items-center gap-2"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                            <span className="text-xs font-semibold text-slate-800">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies Used */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                                    <Cpu className="w-3.5 h-3.5 text-slate-700" />
                                    Technology Architecture
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeProjectModal.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-md shadow-2xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <span className="text-xs text-slate-500">
                                Built & Deployed by Nuvance Technologies
                            </span>

                            <div className="flex items-center gap-2.5 w-full sm:w-auto">
                                <button
                                    type="button"
                                    onClick={closeProjectModal}
                                    className="w-full sm:w-auto px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-md transition-colors cursor-pointer"
                                >
                                    Close Details
                                </button>

                                {activeProjectModal.websiteUrl && (
                                    <a
                                        href={activeProjectModal.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors shadow-xs cursor-pointer"
                                    >
                                        <span>{activeProjectModal.isAppStore ? "Open App Link" : "Visit Live Platform"}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
