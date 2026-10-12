"use client";

import { Button } from "@/components/ui/Button";
import CaseStudyBox from "@/components/ui/CaseStudyBox";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { ArrowLeft, BookOpen, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CaseStudyPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16">
                {/* Back Link */}
                <div className="mb-6">
                    <Button
                        text="Back to Portfolio"
                        variant="general_1"
                        startIcon={<ArrowLeft className="w-4 h-4" />}
                        onClick={() => router.push("/portfolio")}
                    />
                </div>

                {/* Header Section */}
                <div className="max-w-3xl mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span>Engineering Case Studies</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
                        Technical Architecture & Deployment Case Studies
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        A detailed review of technical challenges, system architectures, and production outcomes delivered across retail, educational, and consumer technology engagements.
                    </p>
                </div>

                {/* Case Study Grid */}
                <div className="mb-16">
                    <CaseStudyBox />
                </div>

                {/* Bottom Callout */}
                <div className="bg-white border border-slate-200 rounded-md p-8 sm:p-12 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="max-w-xl text-center sm:text-left">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                            Have Specific Technical Requirements?
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600">
                            Whether you require an event micro-platform, enterprise portal, or distributed web application, our engineers can assist with architectural design.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Button
                            text="Contact Engineering Team"
                            variant="blue_variant"
                            startIcon={<MessageSquare className="w-4 h-4" />}
                            onClick={() => router.push("/contact-us")}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}