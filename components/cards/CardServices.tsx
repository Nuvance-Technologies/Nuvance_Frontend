"use client";

import React from "react";

interface CardServicesProps {
    title: string;
    description: string;
}

const CardServices: React.FC<CardServicesProps> = ({ title, description }) => {
    return (
        <div className="relative flex flex-col p-5 bg-white border border-slate-200 hover:border-slate-300 rounded-md shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-4 bg-blue-600 rounded-xs"></span>
                <h4 className="text-base font-semibold text-slate-900">{title}</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default CardServices;
