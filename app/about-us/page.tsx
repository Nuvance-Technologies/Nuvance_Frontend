"use client";

import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import AboutHeroCard from "@/components/ui/AboutCards";
import CompanyTimeline from "@/components/ui/CompanyTimeline";
import Image from "next/image";
import { 
    Compass, 
    ShieldCheck, 
    Handshake, 
    CheckCircle2, 
    Award, 
    Mail, 
    Linkedin, 
    Github, 
    Instagram, 
    UserCheck,
    Briefcase,
    Trophy
} from "lucide-react";

export default function AboutUs() {


    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16">
                {/* Executive Header Section */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span>Corporate Overview • Your Tech Partner</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
                        Software Engineering & IT Solutions Built on Technical Precision
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Nuvance Technologies is an independent software engineering consultancy and your dedicated tech partner. We specialize in building robust, high-performance web applications, cloud native platforms, and custom IT solutions designed to solve concrete business challenges.
                    </p>
                </div>

                {/* Core Pillars / 3D Flip Value Cards */}
                <div className="mb-20">
                    <div className="mb-8">
                        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1">
                            Guiding Principles
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                            Engineering Focus & Organizational Standards
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                            Interactive architectural pillars. Hover on desktop or tap on mobile to flip each card and review our technical commitments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <AboutHeroCard
                            logo={<Compass className="w-7 h-7" />}
                            title="Vision"
                            pillarIndex="01"
                            tagline="Architecting scalable digital ecosystems and resilient cloud foundations engineered for enterprise longevity."
                            description={[
                                "Empowering modern enterprises with scalable, reliable digital infrastructure.",
                                "Building software systems engineered for longevity, low latency, and operational simplicity.",
                                "Delivering measurable technical value with verified deployment metrics.",
                            ]}
                        />

                        <AboutHeroCard
                            logo={<ShieldCheck className="w-7 h-7" />}
                            title="Mission"
                            pillarIndex="02"
                            tagline="Translating complex business requirements into intuitive, performant, and secure production software."
                            description={[
                                "Transforming complex business requirements into intuitive, performant digital solutions.",
                                "Enforcing rigorous code standards, testing harnesses, and security protocols across every sprint.",
                                "Ensuring seamless integration across existing client infrastructure and third-party APIs.",
                            ]}
                        />

                        <AboutHeroCard
                            logo={<Handshake className="w-7 h-7" />}
                            title="Commitment"
                            pillarIndex="03"
                            tagline="100% intellectual property transfer, transparent engineering sprints, and SLA-backed support."
                            description={[
                                "100% intellectual property rights and code ownership transferred upon project delivery.",
                                "Unambiguous sprint schedules with direct access to lead engineers.",
                                "Structured post-launch SLA support, security updates, and performance tuning.",
                            ]}
                        />
                    </div>
                </div>

                {/* Company Journey / Timeline */}
                <div className="mb-20">
                    <CompanyTimeline />
                </div>

                {/* Why Nuvance Section */}
                <div className="bg-white border border-slate-200 rounded-md p-8 sm:p-12 shadow-xs mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1">
                                Operational Value
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
                                Why Organizations Partner With Nuvance
                            </h2>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                                We combine technical depth with direct communication. You work directly with engineers who architect and write your code, eliminating project management bureaucracy.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Direct Technical Lead Access",
                                    "Production-Grade Clean Code",
                                    "Security-First Architecture",
                                    "Milestone-Driven Transparency",
                                    "Complete Source Code Ownership",
                                    "Comprehensive SLA Maintenance",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="p-8 bg-slate-50 border border-slate-200 rounded-md flex flex-col items-center justify-center text-center max-w-sm w-full">
                                <Image
                                    src="/NuvanceLogo.png"
                                    alt="Nuvance Technologies"
                                    width={72}
                                    height={90}
                                    className="mb-4 h-16 w-auto"
                                />
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    Nuvance Technologies
                                </h3>
                                <p className="text-xs text-slate-500 mb-3">
                                    Software Engineering Consultancy & IT Solutions • Your Tech Partner • Founded 2024
                                </p>
                                <div className="text-[11px] text-slate-600 border-t border-slate-200 pt-3 w-full text-left space-y-1">
                                    <div><strong className="text-slate-800">Reg Off:</strong> 2701 Ranjhi, Jabalpur</div>
                                    <div><strong className="text-slate-800">Corp Office:</strong> Kalyan, Mumbai</div>
                                    <div><strong className="text-slate-800">Phone:</strong> 7219638172 | <strong className="text-slate-800">WhatsApp:</strong> 9109461901</div>
                                    <div><strong className="text-slate-800">Email:</strong> nuvancetechnologiess@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Founder Section */}
                <div className="mb-8">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-blue-600 mb-2">
                            <UserCheck className="w-4 h-4" />
                            <span>Leadership</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
                            Founder
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                            Direct technical vision, systems engineering, and client-first delivery led from concept to deployment.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 md:p-10 shadow-xs">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
                            {/* Founder Photo */}
                            <div className="flex flex-col items-center flex-shrink-0 w-full sm:w-auto">
                                <div className="relative w-full max-w-[250px] sm:w-72 aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm mx-auto">
                                    <Image
                                        src="/facesBehind/nihal.png"
                                        alt="Founder Nihal Yadav"
                                        fill
                                        priority
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="mt-3 flex flex-col items-center gap-1.5 w-full">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full">
                                        <Briefcase className="w-3.5 h-3.5" />
                                        Founder & Technical Lead
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-medium rounded-full text-center">
                                        <Trophy className="w-3 h-3 text-blue-600 flex-shrink-0" />
                                        <span>Visionary Leader &apos;26 (WLS, New Delhi)</span>
                                    </span>
                                </div>
                            </div>

                            {/* Founder Info & Bio */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="mb-4">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                                        Nihal Yadav
                                    </h3>
                                    <p className="text-sm sm:text-base font-semibold text-blue-600 mt-1">
                                        Founder & Technical Lead — Nuvance Technologies
                                    </p>
                                </div>

                                {/* Award Recognition Banner */}
                                <div className="mb-6 p-4 rounded-lg bg-blue-50/70 border border-blue-200/90 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 shadow-2xs">
                                    <div className="p-2.5 bg-blue-600 text-white rounded-md flex-shrink-0 shadow-xs">
                                        <Trophy className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mb-1">
                                            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-200/80 text-blue-950 rounded-sm">
                                                Award & Recognition
                                            </span>
                                            <span className="text-xs font-semibold text-blue-700">
                                                2026 Honor
                                            </span>
                                        </div>
                                        <h4 className="text-base font-bold text-slate-950">
                                            Visionary Business Leader Award 2026
                                        </h4>
                                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                                            Honored by the <strong className="text-slate-800 font-semibold">World Leader Summit, New Delhi</strong> in recognition of outstanding entrepreneurial leadership, technical excellence, and scalable enterprise architecture.
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                                    Nihal founded Nuvance Technologies with a mandate for engineering precision, scalable architecture, and zero-compromise product delivery. Leading system architecture, full-stack development, and production deployments, he works directly with clients to turn technical requirements into robust, high-performance web applications and digital platforms.
                                </p>

                                {/* Key Highlights */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
                                    {[
                                        "Full-Stack Architecture & System Design",
                                        "Production Cloud & Scalability Engineering",
                                        "Direct Engineering Leadership on Client Projects",
                                        "End-to-End Delivery & Post-Launch Support",
                                    ].map((highlight, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50 border border-slate-100 rounded-md px-3 py-2">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Direct Contact & Social Links */}
                                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <a
                                        href="mailto:yadavnihal544@gmail.com"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>yadavnihal544@gmail.com</span>
                                    </a>

                                    <div className="flex items-center gap-2 text-slate-600">
                                        <a
                                            href="https://www.linkedin.com/in/nihal-yadav2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200 rounded-md text-xs sm:text-sm font-medium transition-colors"
                                            aria-label="Nihal Yadav LinkedIn"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                            <span>LinkedIn</span>
                                        </a>

                                        <a
                                            href="https://github.com/nihal29055"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 rounded-md text-xs sm:text-sm font-medium transition-colors"
                                            aria-label="Nihal Yadav GitHub"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>GitHub</span>
                                        </a>

                                        <a
                                            href="https://www.instagram.com/nihaaalll_29"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 rounded-md text-xs sm:text-sm font-medium transition-colors"
                                            aria-label="Nihal Yadav Instagram"
                                        >
                                            <Instagram className="w-4 h-4" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}