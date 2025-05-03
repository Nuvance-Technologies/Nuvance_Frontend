"use client";

import CardServices from "@/components/cards/CardServices";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <div className="relative min-h-screen bg-mainBgColor overflow-hidden">
            {/* Fixed glow effects - made smaller on mobile */}
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
                <Navbar/>

                <div className="mt-30 text-center animate-bounce">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-blue-600 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        Our Services
                    </span>
                </div>

                <div className="flex flex-wrap justify-center mt-10 space-x-8 cursor-pointer">
                    <CardServices title="IT Support" description="24/7 tech support for businesses."/>
                    <CardServices title="Graphic Design" description="Creative designs for digital and print media."/>
                    <CardServices title="Web Development" description="Custom websites tailored to your needs."/>
                </div>

                <div className="flex flex-wrap justify-center mt-5 space-x-8 cursor-pointer">
                    <CardServices title="Logistics" description="Reliable and efficient supply chain solutions."/>
                    <CardServices title="Cybersecurity" description="Protect your data with advanced security."/>
                    <CardServices title="E-commerce Solutions" description="Seamless online shopping experiences."/>
                </div>

                
            </div>

            <div className="mt-20">
                <Footer/>
            </div>
        </div>
    )
}