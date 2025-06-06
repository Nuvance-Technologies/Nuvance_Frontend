"use client";

import { Button } from "@/components/ui/Button";
import CaseStudyBox from "@/components/ui/CaseStudyBox";
import TextBox from "@/components/ui/ConnectBtn";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import TypingText from "@/components/ui/TypingText";
import { Back } from "@/icons/others/Back";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CaseStudyPage() {
    const router = useRouter();
    return (
        <div className="relative min-h-screen bg-mainBgColor overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                    className="absolute animate-pulse bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-purple-300/80 blur-[80px] md:blur-[150px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute animate-pulse top-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-emerald-500/40 blur-[60px] md:blur-[120px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2.4 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute animate-pulse top-1/2 left-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-red-500/40 blur-[50px] md:blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />

                <div className="mt-25">
                    <Button text="Back" variant="general_2" startIcon={<Back />} onClick={() => router.push("/portfolio")} />
                </div>

                <div className="mt-3 text-center animate-bounce">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-blue-700 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        Nuvance Technologies - Case Studies
                    </span>
                </div>
                <div className="flex justify-center">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl text-center font-extrabold from-black via-emerald-500 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        <TypingText text="Real Projects! Real Innovation! Real Results!" />
                    </span>
                </div>

                <div className="mt-15 cursor-pointer flex justify-center items-center text-center text-sm md:text-2xl font-bold text-black">
                    At Nuvance Technologies, we design and develop experiences that solve real-world problems — creatively and technically. Below are select case studies showcasing our work across event marketing, education, e-commerce, and healthcare.
                </div>

                <div className="md:mt-10">
                    <CaseStudyBox />
                </div>

                <div className="mt-5 cursor-pointer flex justify-center items-center text-center text-sm md:text-2xl font-bold text-black">
                    Ready to create something impactful? Whether it&apos;s a micro-site, school portal, product landing page, <br/> or AI-powered platform — we can build it.
                </div>

                <div className="mt-10">
                    <TextBox onClick={() => {router.push("/contact-us")}} text="Contact Us" />
                </div>

            </div>

            <div className="mt-20">
                <Footer/>
            </div>

        </div>
    )
}