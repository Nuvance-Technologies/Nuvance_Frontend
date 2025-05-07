"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "@/app/globals.css";
import React from "react";
import ProfileCard from "@/components/ui/ProfileCard";

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

                {/* Content Section - Comes First */}
                <div className="relative">
                    <div className="mt-30 text-center animate-bounce">
                        <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-red-600 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                            About Us
                        </span>
                    </div>

                    <div className="flex items-center justify-center p-8">
                        <div className="md:text-xl hover:scale-105 cursor-pointer transition-all duration-500 font-extrabold text-center w-full max-w-3xl p-8 backdrop-blur-sm rounded-xl text-black">
                            At Nuvance Technologies, we are committed to driving innovation and delivering cutting-edge solutions that empower businesses to thrive in a digital era. Our mission is to create transformative technology that simplifies operations and enhances efficiency for our clients. Guided by a vision to build a sustainable and interconnected future, we aim to redefine possibilities through collaboration, creativity, and integrity.
                        </div>
                    </div>
                </div>

                {/* Video Section - Comes After Content */}
                <div className="relative mt-10 w-full h-[500px] rounded-xl overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/aboutVideo2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="mt-10 text-center animate-bounce">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-purple-600 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        The Faces Behind Nuvance Technologies
                    </span>
                </div>

                <div className="flex justify-center space-x-15 flex-wrap items-center">
                    <ProfileCard name="Nihal Yadav" mailid="yadavnihal544@gmail.com" github="https://github.com/nihal29055" instagram="https://www.instagram.com/nihaaalll_29" linkedin="https://www.linkedin.com/in/nihal-yadav2" about="Founder" image="/facesBehind/nihal.png" />
                    <ProfileCard name="Aditya Pratap Singh" about="Project Manager" mailid="adityapsingh565@gmail.com" instagram="https://www.instagram.com/aelius.16" github="https://github.com/AdiSinghCodes" linkedin="https://www.linkedin.com/in/aditya-singh-2b319b299/" image="/facesBehind/aditya.png" />
                    <ProfileCard name="Ayush Kushwaha" instagram="https://www.instagram.com/aayu_sh.7" linkedin="https://www.linkedin.com/in/ayush-kushwaha08" about="Graphic Designer" image="/facesBehind/aayush.png" />
                    <ProfileCard name="Akansha Sahoo" linkedin="https://www.linkedin.com/in/akansha-sahoo-3927372aa/" github="https://github.com/Akansha02code" about="Social Media Manager" image="/facesBehind/aakansha.png" />
                </div>

            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
}