"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
    ExternalLink, 
    ArrowRight, 
    X, 
    Globe, 
    Smartphone, 
    Building2, 
    GraduationCap, 
    Check
} from "lucide-react";

export interface ProjectItem {
    id: number;
    title: string;
    subtitle: string;
    category: "all" | "web" | "mobile" | "edtech" | "enterprise";
    categoryLabel: string;
    description: string;
    challenge: string;
    solution: string;
    websiteUrl: string;
    isAppStore?: boolean;
    technologies: string[];
    metrics: string[];
    image: string;
}

const projects: ProjectItem[] = [
    {
        id: 1,
        title: "KP Productions",
        subtitle: "EdTech Platform & Media Production Studio • Indore",
        category: "edtech",
        categoryLabel: "EdTech & Media",
        websiteUrl: "https://kpproductions.co.in",
        image: "/projectImg/kp_productions.png",
        description: "A comprehensive digital platform and studio showcase delivering high-definition educational streaming, course discovery, and studio reel presentations.",
        challenge: "Developing an intuitive, zero-latency streaming platform capable of handling concurrent video playback and class booking workflows.",
        solution: "Engineered a Next.js full-stack platform with optimized media delivery, CDN acceleration, responsive course workflows, and an administrative dashboard.",
        technologies: ["Next.js", "React", "Video Streaming CDN", "Node.js", "Tailwind CSS"],
        metrics: ["Sub-second page load times", "99.9% platform availability", "Zero-buffer HD video delivery"]
    },
    {
        id: 2,
        title: "Prepnerdz",
        subtitle: "Placement Training & Student Analytics Platform",
        category: "edtech",
        categoryLabel: "EdTech & Learning",
        websiteUrl: "https://prepnerdz.tech",
        image: "/projectImg/prepnerdz.png",
        description: "An end-to-end educational platform featuring automated placement training modules, coding sandboxes, aptitude assessments, and student performance analytics.",
        challenge: "Colleges and students needed automated evaluations, real-time code execution in sandboxes, and detailed scorecards for institutional hiring drives.",
        solution: "Built a high-throughput assessment platform with secure Docker evaluation sandboxes, automated tests, dynamic scorecards, and institutional reporting dashboards.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker Sandboxes"],
        metrics: ["10,000+ assessments processed", "Automated code evaluation engine", "Real-time candidate scorecards"]
    },
    {
        id: 3,
        title: "Aavaaz International",
        subtitle: "Secure Low-Latency Mobile Messaging Application",
        category: "mobile",
        categoryLabel: "Mobile Application",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        image: "/projectImg/aavaaz.png",
        description: "A specialized cross-border communication application engineered for instant messaging, encrypted payloads, and clear audio transmission over volatile networks.",
        challenge: "Ensuring instant real-time synchronization and low battery overhead across intermittent, low-bandwidth mobile connections worldwide.",
        solution: "Architected a custom WebSocket layer backed by SQLite local caching, payload encryption, and background push orchestration.",
        technologies: ["Kotlin / Android", "WebSockets", "SQLite", "End-to-End Encryption"],
        metrics: ["Under 120ms message delivery", "AES-256 secure protocols", "Live on Google Play Store"]
    },
    {
        id: 4,
        title: "MyTrands",
        subtitle: "Lifestyle Discovery & Trend-Tracking Application",
        category: "mobile",
        categoryLabel: "Mobile Application",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        image: "/projectImg/mytrands.png",
        description: "A social lifestyle application utilizing real-time analytics for personalized content discovery, trend bookmarks, and consumer insights.",
        challenge: "Ingesting and scoring fast-moving consumer lifestyle trends while maintaining fluid 60fps scrolling on native devices.",
        solution: "Created an ingestion pipeline paired with a lightweight Android native frontend, Redis caching, and personalized content recommendation feeds.",
        technologies: ["Android Native", "Node.js", "Redis Cache", "Recommendation Algorithms"],
        metrics: ["Personalized discovery feeds", "Sub-second trend ingestion", "Smooth 60fps native experience"]
    },
    {
        id: 5,
        title: "The ADL Mould Craft",
        subtitle: "Precision Tooling & Industrial Manufacturing Portal",
        category: "enterprise",
        categoryLabel: "Enterprise & Manufacturing",
        websiteUrl: "https://theadlmouldcraft.com",
        image: "/projectImg/adl_mould.png",
        description: "A digital showcase and technical catalog for an industrial precision mould-making firm, highlighting manufacturing tolerances and B2B capabilities.",
        challenge: "Industrial procurement teams needed a structured, detailed showcase of tooling specifications, equipment lists, and direct quotation workflows.",
        solution: "Crafted a performant corporate platform with structured technical specifications, industrial capabilities showcase, and streamlined B2B lead capture.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Technical SEO"],
        metrics: ["100/100 Core Web Vitals score", "Structured technical catalog", "Direct B2B procurement routing"]
    },
    {
        id: 6,
        title: "CAIT Women's Wing",
        subtitle: "Trade Association & Women Entrepreneur Network",
        category: "web",
        categoryLabel: "Web Platform",
        websiteUrl: "https://caitwomenjbp.org",
        image: "/projectImg/cait_women.png",
        description: "A multi-chapter organizational platform dedicated to trade advocacy, business networking, member directories, and event coordination for women entrepreneurs.",
        challenge: "Managing multi-regional chapters, business directories, and event registrations seamlessly within a centralized digital portal.",
        solution: "Developed an organizational platform featuring automated member directories, regional chapters, event announcements, and administrative workflows.",
        technologies: ["React", "Node.js", "Membership Portal", "Cloud Hosting"],
        metrics: ["Multi-chapter directory network", "Centralized event RSVPs", "Secure member data management"]
    },
    {
        id: 7,
        title: "Meeramai Ashram",
        subtitle: "Spiritual Community Outreach & Literature Portal",
        category: "web",
        categoryLabel: "Web Platform",
        websiteUrl: "https://meeramaiashram.com",
        image: "/projectImg/meeramai.png",
        description: "An accessible digital platform for the Amarkantak-based ashram facilitating digital literature distribution, event calendars, and community connection.",
        challenge: "Creating an accessible, serene, mobile-friendly digital home capable of conveying philosophical literature and event calendars to a diverse global audience.",
        solution: "Built a lightweight, highly accessible web platform optimized for fast delivery over varied mobile connections with reading archives and visitor assistance.",
        technologies: ["Next.js", "Lightweight Architecture", "Mobile First", "CDN"],
        metrics: ["100% mobile-friendly design", "Fast global CDN edge delivery", "Accessible literature library"]
    },
    {
        id: 8,
        title: "Gossip Mobile App",
        subtitle: "Real-Time Social Media & Instant Messaging Engine",
        category: "mobile",
        categoryLabel: "Mobile Application",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        image: "/projectImg/gossip.png",
        description: "A high-performance social media mobile application built for sub-second messaging, dynamic media feeds, and low-latency interaction.",
        challenge: "Handling concurrent real-time messaging, feed updates, and push notifications without server bottlenecks or socket drops.",
        solution: "Implemented Redis pub/sub clusters paired with WebSocket microservices, background job queues, and cross-platform native interfaces.",
        technologies: ["React Native", "Redis", "Kafka", "WebSockets", "Push Queues"],
        metrics: ["Under 50ms message latency", "High-concurrency data sharding", "Cross-platform iOS and Android"]
    },
    {
        id: 9,
        title: "HAo Taxi Application",
        subtitle: "GPS Dispatching & Fleet Telemetry System",
        category: "enterprise",
        categoryLabel: "Enterprise & Mobility",
        websiteUrl: "https://play.google.com/store/apps",
        isAppStore: true,
        image: "/projectImg/haotaxi.png",
        description: "A comprehensive fleet mobility application featuring real-time driver dispatching, route optimization algorithms, and dynamic billing systems.",
        challenge: "Synchronizing continuous high-frequency GPS telemetry, dynamic route estimation, and reliable driver matching in high-density traffic.",
        solution: "Engineered a real-time geolocation streaming pipeline integrating Google Maps SDKs, dynamic surge calculation engines, and automated trip logging.",
        technologies: ["Mobile SDKs", "Google Maps Platform", "Dynamic Pricing Engine", "Real-Time Telemetry"],
        metrics: ["Live driver location streaming", "Dynamic pricing & surge engine", "Automated trip logging & audit"]
    }
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

    const categories = [
        { id: "all", label: "All Work" },
        { id: "web", label: "Web Platforms" },
        { id: "mobile", label: "Mobile Apps" },
        { id: "edtech", label: "EdTech" },
        { id: "enterprise", label: "Enterprise" },
    ];

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    useEffect(() => {
        if (!activeModalProject) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveModalProject(null);
        };
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeModalProject]);

    return (
        <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col font-sans">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-20">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
                        Selected Work
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Products & platforms we&apos;ve built.
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        A showcase of full-stack web applications, mobile platforms, and custom digital software engineered by Nuvance Technologies.
                    </p>
                </div>

                {/* Minimalist Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-200">
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                                    isActive
                                        ? "bg-slate-900 text-white shadow-xs font-semibold"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`}
                            >
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid with Real Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                {/* Project Card Real Website/App Image Container */}
                                <div 
                                    onClick={() => setActiveModalProject(project)}
                                    className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden cursor-pointer"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    
                                    {/* Overlay Category Tag */}
                                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded-md shadow-xs text-xs font-semibold text-slate-800">
                                        {project.category === "mobile" ? (
                                            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                                        ) : project.category === "edtech" ? (
                                            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                                        ) : project.category === "enterprise" ? (
                                            <Building2 className="w-3.5 h-3.5 text-blue-600" />
                                        ) : (
                                            <Globe className="w-3.5 h-3.5 text-blue-600" />
                                        )}
                                        <span>{project.categoryLabel}</span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6">
                                    <h2 
                                        onClick={() => setActiveModalProject(project)}
                                        className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer mb-1 leading-snug"
                                    >
                                        {project.title}
                                    </h2>

                                    <p className="text-xs text-blue-600 font-medium mb-3">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-2">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-[11px] px-1.5 py-0.5 bg-slate-50 text-slate-400 rounded">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                                <button
                                    type="button"
                                    onClick={() => setActiveModalProject(project)}
                                    className="font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer inline-flex items-center gap-1"
                                >
                                    <span>Case Details</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>

                                {project.websiteUrl && (
                                    <a
                                        href={project.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                                    >
                                        <span>{project.isAppStore ? "Google Play" : "Visit Website"}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="p-8 sm:p-12 bg-white border border-slate-200 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                            Have an idea for your next project?
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Whether you need to build a new product from scratch or modernize an existing stack, our engineering team is here to help.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-colors shadow-xs"
                        >
                            <span>Get in Touch</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Clean Project Details Modal */}
                {activeModalProject && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-fade-in"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setActiveModalProject(null);
                        }}
                    >
                        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
                            {/* Modal Image Header */}
                            <div className="relative h-56 w-full bg-slate-100">
                                <Image
                                    src={activeModalProject.image}
                                    alt={activeModalProject.title}
                                    fill
                                    className="object-cover object-top"
                                />
                                <button
                                    type="button"
                                    onClick={() => setActiveModalProject(null)}
                                    className="absolute top-3 right-3 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Header */}
                            <div className="p-6 sm:p-8 border-b border-slate-100">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                                    {activeModalProject.categoryLabel}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {activeModalProject.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                                    {activeModalProject.subtitle}
                                </p>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 sm:p-8 space-y-6 text-sm">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                        The Challenge
                                    </h4>
                                    <p className="text-slate-700 leading-relaxed">
                                        {activeModalProject.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                        The Solution
                                    </h4>
                                    <p className="text-slate-700 leading-relaxed">
                                        {activeModalProject.solution}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                        Key Highlights
                                    </h4>
                                    <div className="space-y-2">
                                        {activeModalProject.metrics.map((metric, i) => (
                                            <div key={i} className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm">
                                                <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                <span>{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeModalProject.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50/70 rounded-b-xl flex items-center justify-between gap-4">
                                <button
                                    type="button"
                                    onClick={() => setActiveModalProject(null)}
                                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                                >
                                    Close
                                </button>

                                {activeModalProject.websiteUrl && (
                                    <a
                                        href={activeModalProject.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors"
                                    >
                                        <span>{activeModalProject.isAppStore ? "Open on Google Play" : "Visit Website"}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}