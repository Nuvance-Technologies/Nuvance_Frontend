"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const ServiceButton: React.FC<ButtonProps> = ({ label, onClick, className = "" }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 border border-blue-500 rounded-md shadow-sm transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${className}`}
        >
            <span>{label}</span>
            <ArrowRight className="w-4 h-4 text-blue-200" aria-hidden="true" />
        </button>
    );
};

export default ServiceButton;
