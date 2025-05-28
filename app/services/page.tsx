"use client";

import GetInTouchModal from "@/components/modals/GetInTouch";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ServiceButton from "@/components/ui/ServiceButton";
import ServiceHeroCard from "@/components/ui/ServiceCard";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();


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

                <div className="mt-30 flex flex-wrap justify-center items-center space-x-20">
                    <ServiceHeroCard titleMain="Website Development" iconImage="/serviceIcons/websiteDev.png" title1="Why it matters?" desc1="Your website is often your first impression. A fast, responsive, and modern website builds trust, improves engagement, and drives conversions." title2="What We Do:" desc2="We design and develop custom websites that reflect your brand and deliver results." />
                    <ServiceHeroCard titleMain="App Development" iconImage="/serviceIcons/appDev.png" title1="Why it matters?" desc1="Mobile apps increase customer engagement, streamline services, and expand your reach to smartphone users." title2="What We Do:" desc2="We build robust, intuitive apps for iOS, Android, and cross-platform environments." />
                    <ServiceHeroCard titleMain="AI/ML Solution" iconImage="/serviceIcons/aimlSol.png" title1="Why it matters?" desc1="AI transforms how businesses analyze data, predict outcomes, and make decisions." title2="What We Do:" desc2=" We develop intelligent models that help automate tasks and uncover insights from complex data." />
                </div>

                <div className="mt-20 flex flex-wrap justify-center items-center space-x-20">
                    <ServiceHeroCard titleMain="Cloud Services" iconImage="/serviceIcons/cloud.png" desc1="Cloud solutions reduce costs, enhance scalability, and offer unmatched flexibility and security." desc2="We help businesses migrate, manage, and optimize their operations on the cloud." title1="Why it matters?" title2="What We Do:" />
                    <ServiceHeroCard titleMain="Custom Software Development" iconImage="/serviceIcons/customSoftware.png" desc1="Off-the-shelf software doesn’t always fit. Custom solutions align perfectly with your workflows and needs." desc2="We design and build tailored software to solve your unique business challenges." title1="Why it matters?" title2="What We Do:" />
                    <ServiceHeroCard titleMain="SEO Optimization" iconImage="/serviceIcons/seo.png" desc1="Without SEO, your website might never be found. SEO drives organic traffic and improves online visibility." desc2="We implement advanced strategies to boost your search engine rankings and attract the right audience." title1="Why it matters?" title2="What We Do:" />
                </div>

                <div className="mt-10 flex justify-center">
                    <button onClick={() => { router.push("/portfolio") }} className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-80 cursor-pointer border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                        Explore More Services
                    </button>
                </div>

                <div className="flex justify-around items-center cursor-pointer">
                    <div>
                        <div className="text-4xl font-extrabold"> Ready to Bring Your Vision to Life? </div>
                        <div className="text-xl font-bold w-120 text-left mt-4">
                            Let&apos;s build something amazing together. Whether you&apos;re a startup or an enterprise, we offer scalable and innovative solutions tailored to your goals.
                        </div>
                    </div>

                    <div>
                        <Image src="/serviceIcons/readyToBring.png" alt="readyToBring" width={400} height={400} />
                    </div>
                </div>

                <div className="flex justify-center">
                    <ServiceButton label="Schedule a Free Call" onClick={() => setIsModalOpen(true)} />
                </div>

                <GetInTouchModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>

            <div className="mt-20">
                <Footer/>
            </div>
        </div>
    );
}