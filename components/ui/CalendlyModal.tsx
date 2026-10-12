"use client";

import React, { useEffect, useState } from "react";
import { X, ExternalLink, Calendar, Loader2 } from "lucide-react";

interface CalendlyModalProps {
    isOpen: boolean;
    onClose: () => void;
    url?: string;
}

export default function CalendlyModal({
    isOpen,
    onClose,
    url = "https://calendly.com/nuvancetechnologiess?hide_gdpr_banner=1"
}: CalendlyModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Close on Escape key and lock body scroll
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Reset loading state when opened
    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const directUrl = "https://calendly.com/nuvancetechnologiess";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Schedule Technical Consultation"
        >
            <div className="relative w-full max-w-4xl h-[85vh] max-h-[780px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-50 border-b border-slate-200 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>Schedule Technical Consultation • Nuvance Technologies</span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href={directUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                            title="Open Calendly in a new tab"
                        >
                            <span>Open in Tab</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <button
                            type="button"
                            aria-label="Close modal"
                            onClick={onClose}
                            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Body with Calendly Iframe and Loading State */}
                <div className="relative w-full flex-1 bg-white overflow-hidden">
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-500 gap-2 z-10">
                            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                            <p className="text-xs font-medium">Loading Calendly scheduling...</p>
                        </div>
                    )}

                    <iframe
                        src={url}
                        className="w-full h-full border-0"
                        title="Schedule an Appointment with Nuvance Technologies"
                        onLoad={() => setIsLoading(false)}
                    />
                </div>
            </div>
        </div>
    );
}
