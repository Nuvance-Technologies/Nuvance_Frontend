"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PointCard from "@/components/cards/PointCard";
import { Button } from "@/components/ui/Button";
import { Globe } from "lucide-react";
import ExecutionProcess from "@/components/ui/pageComponents/ExecutionProcess";
import Image from "next/image";
import BookDemoCall from "@/components/ui/BookCall";
import DiscoverNoFloating from "@/components/ui/pageComponents/DiscoverNoFloating";
import BestTech from "@/components/ui/pageComponents/BestTech";

const industries = [
    "Media & Entertainment",
    "Travel & Tourism",
    "Elearning & Education",
    "Healthcare Solutions",
    "Banking & Finance",
    "Hotel & Restaurants",
    "Retail & E-commerce",
    "Logistics & Supply",
    "Real Estate",
    "Automotive",
    "Agriculture",
    "Government"
];

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const backgroundImages = [
        '/bgimg-1.jpg',
        '/bgimg-2.jpg',
        '/bgimg-3.jpg',
        '/bgimg-4.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrameId: number;
        let position = 0;
        const speed = 0.5;

        const animate = () => {
            position -= speed;
            if (position <= -slider.scrollWidth / 2) {
                position = 0;
            }
            slider.style.transform = `translateX(${position}px)`;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[calc(100vh-80px)]">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                ))}

                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="relative z-10 px-4 text-center text-white max-w-4xl mx-auto animate-fade-in">

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight drop-shadow-md transition-all duration-500">
                            Nuvance Technologies: <br className="hidden sm:block" /> Building Digital Dreams, One Click at a Time
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-gray-200 animate-fade-in delay-200 transition-opacity duration-500">
                            Welcome to Nuvance Technologies, where digital innovation meets purpose.
                        </p>

                        <p className="text-lg md:text-2xl font-semibold mb-8 text-blue-100 animate-fade-in delay-400 transition-opacity duration-500">
                            Unlock your business&apos;s potential with Nuvance Technologies.
                        </p>

                        <div className="flex justify-center animate-fade-in delay-700">
                            <Button
                                variant="green_variant"
                                text="Explore Our Services"
                                startIcon={<Globe className="size-6" />}
                                onClick={() => router.push("/services")}
                                className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Services Section */}
            <div className="bg-mainBgColor py-10 px-4 sm:px-6">
                <div className="cursor-pointer text-center hover:-translate-y-1 transition-all duration-500 font-extrabold text-gray-800 text-2xl md:text-4xl lg:text-5xl tracking-tight leading-snug animate-fade-in-up">
                    Discover How We <span className="text-blue-600">Elevate</span> Your Brand
                </div>

                <div>
                    <DiscoverNoFloating />
                </div>

            </div>

            <div className="bg-mainBgColor">
                <div className="cursor-pointer text-center hover:-translate-y-1 transition-all duration-500 font-extrabold text-gray-800 text-2xl md:text-4xl lg:text-5xl tracking-tight leading-snug animate-fade-in-up">
                    Best <span className="text-blue-600">Technology</span> for your Project
                </div>
                <BestTech />
            </div>

            <div>
                <div className="text-2xl text-center cursor-pointer bg-mainBgColor md:text-5xl font-extrabold leading-tight tracking-tight transition-all duration-500">
                    Our Execution Process
                </div>
                <ExecutionProcess />
            </div>

            {/* Industries Section */}
            <div className="bg-mainBgColor py-10 px-4 sm:px-6">
                <div className="text-center text-3xl sm:text-4xl font-bold mb-10">
                    OUR EXPERTISE COVERS EVERY INDUSTRY
                </div>
                <div className="relative h-20 overflow-hidden mb-8">
                    <div ref={sliderRef} className="absolute whitespace-nowrap flex">
                        {[...industries, ...industries].map((industry, index) => (
                            <div key={index} className="inline-block mx-4">
                                <PointCard text={industry} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button
                        text="Explore Our Projects"
                        variant="blue_variant"
                        onClick={() => { router.push("/portfolio") }}
                    />
                </div>
            </div>

            {/* Ask experts Section */}

            <div className="flex flex-col md:flex-row bg-mainBgColor md:justify-around items-center">
                <div className="relative overflow-hidden rounded-2xl py-16 md:py-24 w-full">
                    <div className="absolute inset-0 bg-gradient-to-br">
                        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30"></div>
                    </div>

                    <div className="relative flex flex-row md:justify-around items-center max-w-7xl cursor-pointer mx-auto px-6 gap-10 md:gap-4">
                        <div className="cursor-pointer backdrop-blur-sm bg-white/30 dark:bg-black/20 p-8 rounded-2xl shadow-xl border border-white/40 dark:border-white/5 transform hover:translate-y-[-5px] transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0 md:space-x-6">
                                {/* Left Text Section */}
                                <div className="text-left space-y-6 w-full md:w-2/3">
                                    <div className="text-xl text-center md:text-2xl font-extrabold bg-clip-text bg-gradient-to-r text-black">
                                        TAKE A CALL WITH OUR EXPERTS
                                    </div>
                                    <div className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                        Let&apos;s Start Your Journey Now!!
                                    </div>
                                    <div className="justify-center flex pt-4">
                                        <BookDemoCall />
                                    </div>
                                </div>

                                {/* Right Image Section */}
                                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                                    <Image
                                        src="/contactPageIcons/askOurExperts.png"
                                        className="hover:scale-105 transition-all duration-300 drop-shadow-2xl"
                                        alt="Ask Our Experts"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}