"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
            <Navbar />

            <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-slate-100 border border-slate-200 text-slate-700 rounded-md flex items-center justify-center mb-6">
                    <FileQuestion className="w-8 h-8 text-blue-600" />
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
                    HTTP Error 404
                </span>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
                    Page Not Found
                </h1>

                <p className="text-sm sm:text-base text-slate-600 max-w-lg mb-8 leading-relaxed">
                    The URL you requested does not exist on our servers or has been moved. Please return to the homepage or contact our team if you believe this is an error.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md shadow-xs transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        <span>Return to Homepage</span>
                    </Link>

                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold rounded-md shadow-xs transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Contact Support</span>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}