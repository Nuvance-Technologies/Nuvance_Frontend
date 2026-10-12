"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
    {
        question: "What core engineering services does Nuvance Technologies provide?",
        answer:
            "We provide end-to-end software development including custom web applications, native and cross-platform mobile apps, cloud infrastructure setup, API architecture, data integrations, and ongoing technical maintenance.",
    },
    {
        question: "What engagement models do you support for clients?",
        answer:
            "We accommodate both fixed-scope Statements of Work (SOW) with defined milestone deliverables and dedicated engineering team augmentations working under an agile sprint structure.",
    },
    {
        question: "How do you approach software security and intellectual property protection?",
        answer:
            "Security is integrated at every phase of our software development lifecycle (SDLC). We execute mutual non-disclosure agreements (NDAs) prior to project discovery. All custom deliverables and source code transfer directly to client ownership upon milestone completion.",
    },
    {
        question: "What technology stacks does your team specialize in?",
        answer:
            "Our primary stack spans TypeScript, Next.js, React, Node.js, Python, Java, Go, PostgreSQL, MongoDB, Redis, Docker, and enterprise cloud providers including AWS, Google Cloud Platform, and Microsoft Azure.",
    },
    {
        question: "Do you support enterprise legacy modernization and cloud migration?",
        answer:
            "Yes. We specialize in decoupling monolithic legacy architectures, refactoring obsolete codebases, migrating on-premise workloads to containerized cloud architectures, and optimizing system reliability.",
    },
    {
        question: "What SLA support and maintenance options are available post-deployment?",
        answer:
            "We provide structured post-launch service-level agreements (SLAs), including active uptime monitoring, automated error tracking, periodic dependency vulnerability patching, and scheduled functional updates.",
    },
    {
        question: "What is the typical timeline for an initial consultation and proposal?",
        answer:
            "Following an introductory technical discovery meeting, we deliver a comprehensive technical proposal including architecture blueprints, milestone estimates, and sprint schedules within 3 to 5 business days.",
    },
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([0]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
        );
    };

    return (
        <section className="w-full py-16 bg-white border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-1">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                        Technical Inquiries & Engagement FAQ
                    </h2>
                    <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
                        Common questions regarding our engineering methodologies, contract structures, and delivery guarantees.
                    </p>
                </div>

                {/* FAQ Accordion Items */}
                <div className="space-y-3">
                    {faqData.map((faq, index) => {
                        const isOpen = openItems.includes(index);
                        return (
                            <div
                                key={index}
                                className="bg-slate-50 border border-slate-200 rounded-md overflow-hidden transition-colors"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-100/70 transition-colors focus:outline-none cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
