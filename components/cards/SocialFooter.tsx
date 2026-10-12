"use client";

import React from "react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const SocialFooter = () => {
    return (
        <div className="flex items-center gap-2 mt-2">
            <a
                href="https://www.instagram.com/nuvance_tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nuvance on Instagram"
                className="w-8 h-8 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors duration-150"
            >
                <Instagram className="w-4 h-4" />
            </a>

            <a
                href="https://www.linkedin.com/company/nuvance-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nuvance on LinkedIn"
                className="w-8 h-8 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors duration-150"
            >
                <Linkedin className="w-4 h-4" />
            </a>

            <a
                href="https://wa.me/919109461901"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nuvance on WhatsApp"
                className="w-8 h-8 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors duration-150"
            >
                <MessageCircle className="w-4 h-4" />
            </a>
        </div>
    );
};

export default SocialFooter;
