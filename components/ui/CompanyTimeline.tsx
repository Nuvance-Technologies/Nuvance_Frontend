"use client"

import type React from "react"

import { Building2, Wrench, RotateCcw, Lightbulb, Globe } from "lucide-react";

interface TimelineItem {
    icon: React.ReactNode
    date: string
    title: string
    description: string
    color: string
}

const timelineData: TimelineItem[] = [
    {
        icon: <Building2 className="w-6 h-6" />,
        date: "2024 – The Beginning",
        title: "Founded as TechStudio",
        description:
            "A passionate development company focused on building user-friendly websites and applications. Delivered early success with small business and startup clients.",
        color: "bg-blue-500",
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        date: "Mid-2024 – Growing Capabilities",
        title: "Expanding Service Offerings",
        description:
            "Expanded to include UI/UX design, mobile app development, and digital branding. Built a team of creative developers and designers, working on complex, multi-platform projects.",
        color: "bg-green-500",
    },
    {
        icon: <RotateCcw className="w-6 h-6" />,
        date: "Late 2024 – Rebranding",
        title: "Nuvance Technologies",
        description:
            "Rebranded from TechStudio to Nuvance Technologies to reflect a broader vision. Shifted focus to end-to-end software solutions with AI-powered features and cloud-ready applications.",
        color: "bg-purple-500",
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        date: "2025 – Expanding Innovation",
        title: "Full-Service Development",
        description:
            "Established as a complete software development company. Launched key products including AI, automation, and healthcare-focused tech (e.g., MediLink). Collaborated with global clients.",
        color: "bg-orange-500",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        date: "Today – Your Trusted Digital Partner",
        title: "Leading Digital Innovation",
        description:
            "Delivering custom software, intelligent platforms, and scalable digital products. Serving businesses across industries with a user-first approach and commitment to excellence.",
        color: "bg-red-500",
    },
]

export default function Timeline() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Journey</h1>
                <p className="text-xl text-black font-bold max-w-2xl mx-auto">
                    From TechStudio to Nuvance Technologies - A story of growth, innovation, and digital excellence
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } flex-row`}
                        >
                            {/* Icon Circle */}
                            <div
                                className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
                            >
                                {item.icon}
                            </div>

                            {/* Content Card */}
                            <div
                                className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8 md:w-1/2" : "md:ml-auto md:pl-8 md:w-1/2"
                                    } w-full`}
                            >
                                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center mb-3">
                                        <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decoration */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 bottom-0 w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-lg"></div>
            </div>

            {/* Call to Action */}
            {/* <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Digital Journey?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Join the companies that trust Nuvance Technologies to deliver innovative, scalable, and user-focused digital
                    solutions.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get Started Today
                </button>
            </div> */}
        </div>
    )
}
