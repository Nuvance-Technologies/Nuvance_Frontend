"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsappBtnProps {
    className?: string;
}

const WhatsappBtn: React.FC<WhatsappBtnProps> = ({ className = "" }) => {
    return (
        <button
            type="button"
            onClick={() => {
                window.open("https://wa.me/919109461901", "_blank", "noopener,noreferrer");
            }}
            className={`inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-md border border-emerald-600 shadow-sm transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 ${className}`}
            aria-label="Connect on WhatsApp"
        >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>WhatsApp</span>
        </button>
    );
};

export default WhatsappBtn;
