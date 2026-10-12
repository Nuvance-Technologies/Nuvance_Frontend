"use client";

import Image from "next/image";
import React from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

interface ProfileCardProps {
    name: string;
    about: string;
    image: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    mailid?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    image,
    about,
    instagram,
    linkedin,
    github,
    mailid,
}) => {
    return (
        <div className="w-full max-w-[280px] bg-white border border-slate-200 hover:border-slate-300 rounded-md p-5 shadow-xs hover:shadow-sm transition-all duration-150 flex flex-col justify-between">
            <div>
                {/* Profile Avatar / Photo */}
                <div className="relative w-full h-48 rounded-md overflow-hidden bg-slate-100 border border-slate-100 mb-4">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-top"
                    />
                </div>

                {/* Team Member Info */}
                <h3 className="text-base font-bold text-slate-950 tracking-tight leading-snug">
                    {name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-2">
                    {about}
                </p>

                {mailid && (
                    <a
                        href={`mailto:${mailid}`}
                        className="text-xs text-slate-500 hover:text-slate-800 transition-colors block truncate mb-4"
                        title={mailid}
                    >
                        {mailid}
                    </a>
                )}
            </div>

            {/* Social & Contact Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-500">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name}'s GitHub profile`}
                            className="p-1.5 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name}'s LinkedIn profile`}
                            className="p-1.5 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                    )}
                    {instagram && (
                        <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name}'s Instagram profile`}
                            className="p-1.5 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                    )}
                </div>

                {mailid && (
                    <a
                        href={`mailto:${mailid}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors"
                    >
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;
