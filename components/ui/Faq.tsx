"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
    {
        question: "What services does Nuvance Technologies offer?",
        answer:
            "We specialize in a wide range of digital solutions including web and mobile app development, UI/UX design, software engineering, AI/ML solutions, cloud integration, and IT consulting tailored to your business needs.",
    },
    {
        question: "Who can benefit from your services?",
        answer:
            "Our services are ideal for startups, small to medium enterprises, and large corporations looking to digitize operations, improve user experiences, or integrate AI-driven solutions into their workflow.",
    },
    {
        question: "Do you offer custom software development?",
        answer:
            "Yes, we provide fully customized software development services. Our team collaborates closely with clients to deliver solutions that align with their goals and operational needs.",
    },
    {
        question: "What industries do you serve?",
        answer:
            "We work across various industries including healthcare, education, e-commerce, finance, logistics, and more. Our adaptable team can craft solutions specific to your sector.",
    },
    {
        question: "Can you help with legacy system modernization?",
        answer:
            "Absolutely. We help modernize outdated systems by migrating them to modern platforms with improved functionality, performance, and security.",
    },
    {
        question: "What technologies do you use?",
        answer:
            "We work with modern technologies including React, Angular, Node.js, Python, Java, .NET, Flutter, AI/ML frameworks (TensorFlow, PyTorch), cloud platforms (AWS, Azure, GCP), and more.",
    },
    {
        question: "How do you ensure the security of your solutions?",
        answer:
            "Security is a top priority at Nuvance. We implement industry best practices, encryption standards, secure coding protocols, and regular audits to ensure your data and systems remain safe.",
    },
    {
        question: "Do you offer post-launch support and maintenance?",
        answer:
            "Yes. We offer reliable post-deployment support, updates, and maintenance services to keep your solution up-to-date and running smoothly.",
    },
    {
        question: "What is your typical project timeline?",
        answer:
            "Project timelines vary depending on complexity and scope. After an initial consultation, we provide a detailed roadmap with clear milestones and deadlines.",
    },
    {
        question: "How can I get started with Nuvance Technologies?",
        answer:
            "Simply contact us through our website's contact form, or email us directly. We'll set up a free consultation to understand your needs and recommend the best solutions.",
    },
]

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
    }

    return (
        <section className="w-full py-16 cursor-pointer bg-gradient-to-br">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="flex justify-center">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl text-center font-extrabold from-black via-pink-500 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        Frequently Asked Questions (FAQ)
                    </span>
                </div>
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our services and how we can help your business succeed.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-5 cursor-pointer text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openItems.includes(index) ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-5 pt-2">
                                    <div className="h-px bg-gray-200 mb-4"></div>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
