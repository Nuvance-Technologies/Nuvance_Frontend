"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CardHome from "@/components/cards/CardHome";
import PointCard from "@/components/cards/PointCard";
import { Button } from "@/components/ui/Button";

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

                <div className="absolute inset-0 cursor-pointer bg-black/60 flex items-center justify-center">
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                        <h1 className="text-3xl sm:text-4xl hover:scale-105 transition-all duration-500 md:text-6xl font-bold mb-6 leading-tight">
                            Nuvance Technologies: Building Digital Dreams, One Click at a Time
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                            Welcome to Nuvance Technologies, where digital innovation meets purpose.
                        </p>
                        <p className="text-lg md:text-2xl font-semibold mb-10">
                            Unlock your business&apos;s potential with Nuvance Technologies.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                variant="green_variant"
                                text="Explore Our Services"
                                onClick={() => { router.push("/services") }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-mainBgColor py-10 px-4 sm:px-6">
                <div className="text-center animate-bounce text-3xl sm:text-4xl font-bold mb-10">
                    Discover How We Elevate Your Brand
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-15 max-w-6xl mx-auto">
                    <CardHome
                        title="SEO Optimization"
                        description="Achieve top rankings and increased visibility in search results."
                    />
                    <CardHome
                        title="Web Development"
                        description="Transform your online identity with our stunning websites."
                    />
                    <CardHome
                        title="Social Media Management"
                        description="Maximize your social media impact with our expert handling."
                    />
                </div>
            </div>

            {/* Industries Section */}
            <div className="bg-mainBgColor py-10 px-4 sm:px-6">
                <div className="text-center animate-bounce text-3xl sm:text-4xl font-bold mb-10">
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

            <Footer />
        </div>
    );
}