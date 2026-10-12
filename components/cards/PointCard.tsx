"use client";

import React from "react";

interface PointCardProps {
    text: string;
}

const PointCard: React.FC<PointCardProps> = ({ text }) => {
    return (
        <div className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-slate-200 hover:border-blue-400 text-slate-800 hover:text-blue-600 text-sm font-semibold rounded-md shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-default">
            {text}
        </div>
    );
};

export default PointCard;
