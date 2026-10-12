"use client";

import React from "react";

interface CardHomeProps {
    title: string;
    description: string;
}

const CardHome: React.FC<CardHomeProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col p-6 bg-white border border-slate-200 hover:border-slate-300 rounded-md shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default CardHome;