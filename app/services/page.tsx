"use client";

import { Carousel } from "@/components/ui/Carousel";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ServiceButton from "@/components/ui/ServiceButton";
import ServiceHeroCard from "@/components/ui/ServiceCard";
import TypingText from "@/components/ui/TypingText";
import { Close } from "@/icons/others/Close";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
            initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
        };
    }
}

export default function Services() {
    const router = useRouter();
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);
    const calendlyWidgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.Calendly) return;

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (showCalendlyModal && calendlyWidgetRef.current && window.Calendly) {
            window.Calendly.initInlineWidget({
                url: "https://calendly.com/nihal-nuvancetechnologies/30min?hide_event_type_details=1&hide_gdpr_banner=1",
                parentElement: calendlyWidgetRef.current
            });
        }
    }, [showCalendlyModal]);

    const serviceCards = [
        {
            titleMain: "Website Development",
            iconImage: "/serviceIcons/websiteDev.png",
            title1: "Why it matters?",
            desc1: "Your website is often your first impression. A fast, responsive, and modern website builds trust, improves engagement, and drives conversions.",
            title2: "What We Do:",
            desc2: "We design and develop custom websites that reflect your brand and deliver results."
        },
        {
            titleMain: "App Development",
            iconImage: "/serviceIcons/appDev.png",
            title1: "Why it matters?",
            desc1: "Mobile apps increase customer engagement, streamline services, and expand your reach to smartphone users.",
            title2: "What We Do:",
            desc2: "We build robust, intuitive apps for iOS, Android, and cross-platform environments."
        },
        {
            titleMain: "AI/ML Solution",
            iconImage: "/serviceIcons/aimlSol.png",
            title1: "Why it matters?",
            desc1: "AI transforms how businesses analyze data, predict outcomes, and make decisions.",
            title2: "What We Do:",
            desc2: " We develop intelligent models that help automate tasks and uncover insights from complex data."
        },
        {
            titleMain: "Cloud Services",
            iconImage: "/serviceIcons/cloud.png",
            title1: "Why it matters?",
            desc1: "Cloud solutions reduce costs, enhance scalability, and offer unmatched flexibility and security.",
            title2: "What We Do:",
            desc2: "We help businesses migrate, manage, and optimize their operations on the cloud."
        },
        {
            titleMain: "Custom Software Development",
            iconImage: "/serviceIcons/customSoftware.png",
            title1: "Why it matters?",
            desc1: "Off-the-shelf software doesn't always fit. Custom solutions align perfectly with your workflows and needs.",
            title2: "What We Do:",
            desc2: "We design and build tailored software to solve your unique business challenges."
        },
        {
            titleMain: "SEO Optimization",
            iconImage: "/serviceIcons/seo.png",
            title1: "Why it matters?",
            desc1: "Without SEO, your website might never be found. SEO drives organic traffic and improves online visibility.",
            title2: "What We Do:",
            desc2: "We implement advanced strategies to boost your search engine rankings and attract the right audience."
        },
    ];

    return (
        <div className="relative min-h-screen bg-mainBgColor overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                    className="absolute animate-pulse bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-300/80 blur-[80px] md:blur-[150px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute animate-pulse top-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/40 blur-[60px] md:blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2.4 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute animate-pulse top-1/2 left-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-500/40 blur-[50px] md:blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />

                <div className="flex justify-center mt-30">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl text-center font-extrabold from-black via-purple-500 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        <TypingText text="Unlock Our Expert Services to Propel Your Business Forward" />
                    </span>
                </div>

                {/* Carousel for Mobile */}
                <div className="mt-20 md:hidden">
                    <Carousel>
                        {serviceCards.map((card, index) => (
                            <ServiceHeroCard
                                key={index}
                                titleMain={card.titleMain}
                                iconImage={card.iconImage}
                                title1={card.title1}
                                desc1={card.desc1}
                                title2={card.title2}
                                desc2={card.desc2}
                            />
                        ))}
                    </Carousel>
                </div>

                {/* Static cards for Desktop */}
                <div className="mt-25 ml-25 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceCards.map((card, index) => (
                        <ServiceHeroCard
                            key={index}
                            titleMain={card.titleMain}
                            iconImage={card.iconImage}
                            title1={card.title1}
                            desc1={card.desc1}
                            title2={card.title2}
                            desc2={card.desc2}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => { router.push("/portfolio"); }}
                        className="group text-center w-96 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 underline underline-offset-2 hover:underline-offset-4 hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 cursor-pointer border p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:right-1 before:top-1 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:w-20 after:h-20 after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
                    >
                        Explore More Services
                    </button>
                </div>

                {/* Ready to Build Section */}
                <div className="flex flex-col lg:flex-row justify-around items-center cursor-pointer mt-10 text-center lg:text-left gap-10">
                    <div>
                        <div className="text-2xl md:text-4xl font-extrabold">
                            Ready to Bring Your Vision to Life?
                        </div>
                        <div className="text-base md:text-xl font-bold mt-4 max-w-xl">
                            Let&apos;s build something amazing together. Whether you&apos;re a startup or an enterprise, we offer scalable and innovative solutions tailored to your goals.
                        </div>
                    </div>

                    <div>
                        <Image src="/serviceIcons/readyToBring.png" alt="readyToBring" width={400} height={400} className="w-full max-w-sm h-auto" />
                    </div>
                </div>

                {/* Schedule Call Button */}
                <div className="flex justify-center mt-10">
                    <ServiceButton label="Schedule a Free Call" onClick={() => setShowCalendlyModal(true)} />
                </div>
            </div>

            {/* Calendly Modal */}
            {showCalendlyModal && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 bg-opacity-50 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
                        <button
                            className="absolute cursor-pointer top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowCalendlyModal(false)}
                        >
                            <Close/>
                        </button>
                        <div
                            ref={calendlyWidgetRef}
                            className="calendly-inline-widget w-full h-full"
                            style={{ minWidth: '320px', height: '100%' }}
                        />
                    </div>
                </div>
            )}

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
}