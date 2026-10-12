"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only run on client with valid localStorage
        if (typeof window === "undefined") return;

        try {
            if (typeof window.localStorage !== "undefined" && typeof window.localStorage.getItem === "function") {
                const consent = window.localStorage.getItem("nuvance_cookie_consent");
                if (!consent) {
                    const timer = setTimeout(() => {
                        setIsVisible(true);
                    }, 800);
                    return () => clearTimeout(timer);
                }
            } else {
                setIsVisible(false);
            }
        } catch {
            setIsVisible(false);
        }
    }, []);

    const handleAcceptAll = () => {
        if (typeof window !== "undefined") {
            try {
                if (typeof window.localStorage !== "undefined" && typeof window.localStorage.setItem === "function") {
                    window.localStorage.setItem("nuvance_cookie_consent", "all");
                }
            } catch {
                // Ignore storage errors
            }
        }
        setIsVisible(false);
    };

    const handleAcceptEssential = () => {
        if (typeof window !== "undefined") {
            try {
                if (typeof window.localStorage !== "undefined" && typeof window.localStorage.setItem === "function") {
                    window.localStorage.setItem("nuvance_cookie_consent", "essential");
                }
            } catch {
                // Ignore storage errors
            }
        }
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <aside
            aria-label="Cookie consent banner"
            role="region"
            className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 text-slate-100 shadow-2xl transition-transform duration-300 ease-out"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 max-w-3xl">
                    <div className="p-2 bg-slate-900 border border-slate-800 rounded-md text-slate-300 flex-shrink-0 mt-0.5">
                        <Cookie className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span className="font-semibold text-white block sm:inline mr-2">
                            Cookie & Privacy Notice:
                        </span>
                        We use necessary cookies to maintain core platform stability and performance analytics to optimize your experience. For full transparency, view our{" "}
                        <Link
                            href="/privacy-policy"
                            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors font-medium"
                        >
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/terms-and-conditions"
                            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors font-medium"
                        >
                            Terms & Conditions
                        </Link>
                        .
                    </div>
                </div>

                <div className="flex items-center gap-2.5 w-full md:w-auto justify-end flex-wrap">
                    <button
                        type="button"
                        onClick={handleAcceptEssential}
                        className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors cursor-pointer text-center"
                    >
                        Essential Only
                    </button>
                    <button
                        type="button"
                        onClick={handleAcceptAll}
                        className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-md transition-colors cursor-pointer text-center"
                    >
                        Accept All
                    </button>
                    <button
                        type="button"
                        onClick={handleAcceptEssential}
                        aria-label="Dismiss cookie notice"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer ml-1"
                    >
                        <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </aside>
    );
}
