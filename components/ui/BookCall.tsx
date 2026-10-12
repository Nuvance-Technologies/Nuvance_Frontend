"use client";

import React from "react";
import { Calendar } from "lucide-react";

interface BookDemoCallProps {
    onClick?: () => void;
    className?: string;
    text?: string;
}

const BookDemoCall: React.FC<BookDemoCallProps> = ({
    onClick,
    className = "",
    text = "Schedule a Call"
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white text-sm sm:text-base font-semibold rounded-md border border-blue-500 shadow-sm transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${className}`}
        >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
            <span>{text}</span>
        </button>
    );
};

export default BookDemoCall;
