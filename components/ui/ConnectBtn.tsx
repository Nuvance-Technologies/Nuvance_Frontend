"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface TextBoxProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ text, onClick, className = "" }) => {
    return (
        <div className="flex justify-center my-2">
            <button
                type="button"
                onClick={onClick}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-md border border-slate-800 shadow-sm transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${className}`}
            >
                <span>{text}</span>
                <ArrowRight className="w-4 h-4 text-slate-300" aria-hidden="true" />
            </button>
        </div>
    );
};

export default TextBox;
