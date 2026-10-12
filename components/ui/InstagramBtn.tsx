"use client";

import React from "react";
import { Instagram } from "lucide-react";

interface InstagramBtnProps {
    className?: string;
}

const InstaBtn: React.FC<InstagramBtnProps> = ({ className = "" }) => {
    return (
        <button
            type="button"
            onClick={() => {
                window.open("https://www.instagram.com/nuvance_tech", "_blank", "noopener,noreferrer");
            }}
            className={`inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md border border-slate-700 shadow-sm transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 ${className}`}
            aria-label="Follow on Instagram"
        >
            <Instagram className="w-4 h-4 text-slate-300" aria-hidden="true" />
            <span>Instagram</span>
        </button>
    );
};

export default InstaBtn;
