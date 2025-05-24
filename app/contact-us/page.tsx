"use client";

import Footer from "@/components/ui/Footer";
import InstaBtn from "@/components/ui/InstagramBtn";
import LinkedinBtn from "@/components/ui/LinkedinBtn";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function ContactUs() {
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

            {/* Main Content Starts Here */}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />


                <div className="relative mt-30 w-full h-[500px] rounded-xl overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/contactUsBg1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/30">
                        <div className="flex justify-center text-white text-2xl hover:scale-110 transition-all duration-500 cursor-pointer md:text-4xl font-extrabold">
                            Contact Us
                        </div>

                        <div className="flex justify-center p-2 text-center text-amber-100 md:text-3xl font-bold mt-10 cursor-pointer">
                            Feel free to reach out to us for any inquiries or collaborations!
                        </div>

                        <div className="flex justify-center text-center bg-slate-800/50 flex-col items-center mt-10 p-10 text-white font-extrabold text-lg md:text-2xl space-y-5">
                            <div className="cursor-pointer">
                                Address: House no 2701 Vishwakarma Moholla Ranjhi, Jabalpur
                            </div>
                            <div className="cursor-pointer">
                                +91 7219638172
                            </div>

                            <div className="cursor-pointer" onClick={() => { window.location.href = "mailto:info.techstudio@gmail.com"; }}>
                                info.techstudiio@gmail.com
                            </div>
                        </div>

                        <div className="flex justify-center space-x-7 mt-5">
                            <InstaBtn />
                            <LinkedinBtn />
                        </div>
                    </div>
                </div>


            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    )
}