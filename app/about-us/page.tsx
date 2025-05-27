"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "@/app/globals.css";
import React from "react";
import ProfileCard from "@/components/ui/ProfileCard";
import AboutHeroCard from "@/components/ui/AboutCards";
import { Compass } from "@/icons/others/Compass";
import { ShieldCheck } from "@/icons/others/ShieldCheck";
import { Handshake } from "@/icons/others/Handshake";
import CompanyTimeline from "@/components/ui/CompanyTimeline";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="relative min-h-screen bg-mainBgColor overflow-hidden">
            {/* Animated Blur Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                    className="absolute animate-pulse bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-red-300/80 blur-[80px] md:blur-[150px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute animate-pulse top-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/40 blur-[60px] md:blur-[120px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2.4 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute animate-pulse top-1/2 left-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-500/40 blur-[50px] md:blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {/* Main Content */}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />

                <div className="mt-30 text-center animate-bounce">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-blue-700 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        Our Company Overview
                    </span>
                </div>

                <div className="mt-10 cursor-pointer flex justify-center items-center text-center text-sm md:text-2xl font-bold text-black">
                    At Nuvance Technologies, we transform your digital vision into reality. Our dedicated team blends creativity with the latest technology to build custom solutions that help your brand stand out and your business run smarter. From developing engaging content and boosting your online visibility to designing sleek, modern visuals—we tailor every service to support your growth.
                    We&apos;re focused on delivering intuitive, user-friendly experiences that truly connect with your audience and leave a lasting impact. Ready to bring your ideas to life? Let&apos;s create something exceptional—one click at a time.
                </div>

                <div className="flex justify-center items-center mt-10 flex-wrap space-x-20">
                    <AboutHeroCard logo={<Compass className="size-12" />} title="Vision" description={[
                        "Empowering businesses with innovative, user-centric solutions that fuel growth and enhance impact.",
                        "Delivering smart digital strategies that spark engagement and drive long-term success.",
                        "Transforming digital experiences through a blend of creativity, functionality, and measurable results.",
                        "Bridging technology and intuitive design to enable global business transformation.",
                    ]} />

                    <AboutHeroCard logo={<ShieldCheck className="size-10" />} title="Mission" description={[
                        "Transforming ideas into impactful digital experiences that connect, inspire, and engage.",
                        "Delivering tailored solutions that meet the unique needs of every client and industry.",
                        "Ensuring seamless integration of functionality, usability, and design across every project.",
                        "Staying ahead of the curve by adapting to evolving trends and technologies.",
                    ]} />

                    <AboutHeroCard logo={<Handshake className="size-15" />} title="Commitment" description={[
                        "Quality is prioritized in every project, with careful attention to detail at every step.",
                        "Honesty and transparency build strong, trustworthy relationships with clients.",
                        "Timely delivery and ongoing support ensure clients receive continuous value.",
                        "Client needs are understood and met with tailored approaches to achieve their goals.",
                    ]} />
                </div>

                <div className="mt-10 text-center animate-bounce">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-blue-700 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        Our Journey From TechStudio to Nuvance Technologies
                    </span>
                </div>

                <CompanyTimeline />

                <div className="mt-20 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content - Left Side */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Why Nuvance Technologies?</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Nuvance Technologies, we do more than build software—we craft intelligent, user-centric solutions that
                                help businesses grow, adapt, and lead in their industries. Here&apos;s why our clients choose us:
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Innovation-Driven Approach",
                                    "Tailored Solutions",
                                    "Design Meets Functionality",
                                    "End-to-End Expertise",
                                    "Collaborative & Transparent",
                                    "Results That Matter",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <span className="text-gray-700 font-medium text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image - Right Side */}
                        <div className="order-first lg:order-last flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <Image
                                    src="/NuvanceLogo.png"
                                    alt="Nuvance Technologies team working on innovative solutions"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                    width={500}
                                    height={500}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mt-10 text-center animate-bounce">
                        <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-blue-700 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                            The Minds Behind Nuvance
                        </span>
                    </div>

                    <div className="flex justify-center space-x-15 flex-wrap items-center">
                        <ProfileCard name="Nihal Yadav" mailid="yadavnihal544@gmail.com" github="https://github.com/nihal29055" instagram="https://www.instagram.com/nihaaalll_29" linkedin="https://www.linkedin.com/in/nihal-yadav2" about="Founder" image="/facesBehind/nihal.png" />
                        <ProfileCard name="Aditya Pratap Singh" about="Project Manager" mailid="adityapsingh565@gmail.com" instagram="https://www.instagram.com/aelius.16" github="https://github.com/AdiSinghCodes" linkedin="https://www.linkedin.com/in/aditya-singh-2b319b299/" image="/facesBehind/aditya.png" />
                        <ProfileCard name="Ayush Kushwaha" instagram="https://www.instagram.com/aayu_sh.7" linkedin="https://www.linkedin.com/in/ayush-kushwaha08" about="Graphic Designer" image="/facesBehind/aayush.png" />
                        <ProfileCard name="Akansha Sahoo" linkedin="https://www.linkedin.com/in/akansha-sahoo-3927372aa/" github="https://github.com/Akansha02code" about="Social Media Manager" image="/facesBehind/aakansha.png" />
                        <ProfileCard name="Shubhashish Chakraborty" mailid="shubhashish147@gmail.com" linkedin="https://www.linkedin.com/in/Shubhashish-Chakraborty" github="https://github.com/Shubhashish-Chakraborty" about="Full-Stack Web Developer" image="/facesBehind/shubh.png" />
                        <ProfileCard name="Sayman Lal" mailid="buisnesssayman@gmail.com" linkedin="https://www.linkedin.com/in/worksofsayman" github="https://github.com/worksofsayman" about="Full-Stack Web Developer" image="/facesBehind/sayman.png" />
                    </div>
                </div>

            </div>

            <div className="mt-20">
                <Footer/>
            </div>
        </div>

    );
}