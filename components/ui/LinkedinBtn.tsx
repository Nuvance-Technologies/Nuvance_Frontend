"use client";

import React from "react";
import { Linkedin } from "lucide-react";

interface LinkedinBtnProps {
    className?: string;
}

const LinkedinBtn: React.FC<LinkedinBtnProps> = ({ className = "" }) => {
    return (
        <button
            type="button"
            onClick={() => {
                window.open("https://www.linkedin.com/company/nuvance-technologies/", "_blank", "noopener,noreferrer");
            }}
            className={`inline-flex items-center gap-2 px-3.5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-md border border-blue-600 shadow-sm transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${className}`}
            aria-label="Connect on LinkedIn"
        >
            <Linkedin className="w-4 h-4 text-blue-200" aria-hidden="true" />
            <span>LinkedIn</span>
        </button>
    );
};

export default LinkedinBtn;
