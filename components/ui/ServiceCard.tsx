"use client";

import React from "react";
import Image from "next/image";

interface ServiceHeroCardProps {
    iconImage: string;
    titleMain: string;
    title1?: string;
    title2?: string;
    desc1?: string;
    desc2?: string;
}

const ServiceHeroCard: React.FC<ServiceHeroCardProps> = ({
    iconImage,
    titleMain,
    title1,
    title2,
    desc1,
    desc2,
}) => {
    return (
        <div className="w-full max-w-sm bg-white border border-slate-200 hover:border-slate-300 rounded-md p-6 shadow-xs hover:shadow-sm transition-all duration-150 flex flex-col justify-between">
            <div>
                {/* Icon */}
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center mb-5">
                    <Image
                        src={iconImage}
                        alt={titleMain}
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-950 mb-4 tracking-tight">
                    {titleMain}
                </h3>

                {/* Section 1 */}
                {desc1 && (
                    <div className="mb-4">
                        {title1 && (
                            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                                {title1}
                            </h4>
                        )}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {desc1}
                        </p>
                    </div>
                )}

                {/* Section 2 */}
                {desc2 && (
                    <div>
                        {title2 && (
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                                {title2}
                            </h4>
                        )}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {desc2}
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Enterprise Service</span>
                <span className="text-blue-600">Explore &rarr;</span>
            </div>
        </div>
    );
};

export default ServiceHeroCard;