"use client";
import CardHome from "@/components/cards/CardHome";
import PointCard from "@/components/cards/PointCard";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

    const backgroundImages = [
        '/bgimg-1.jpg',
        '/bgimg-2.jpg',
        '/bgimg-3.jpg',
        '/bgimg-4.jpg',
    ];


    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrameId: number;
        let position = 0;
        const speed = 0.5; // Adjust speed here (lower = slower)

        const animate = () => {
            position -= speed;
            if (position <= -slider.scrollWidth / 2) {
                position = 0;
            }
            slider.style.transform = `translateX(${position}px)`;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        // Change image every 3 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex: number) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const router = useRouter();
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

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

                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Nuvance Technologies: Building Digital Dreams, One Click at a Time
                        </h1>

                        <p className="text-lg md:text-xl mb-8 leading-relaxed">
                            Welcome to Nuvance Technologies, where digital innovation meets purpose. From first impressions to lasting connections, we help your brand make a memorable impact online.
                        </p>

                        <p className="text-xl md:text-2xl font-semibold mb-10">
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

            {/* Main content */}
            <div className="bg-mainBgColor">
                {/* Services section */}
                <div className="py-10">
                    <div className="text-center text-4xl font-bold">
                        Discover How We Elevate Your Brand
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 px-4">
                        <CardHome
                            title="SEO Optimization"
                            description="Achieve top rankings and increased visibility in search results, translating clicks into customers with our tailored SEO solutions designed for sustainable growth."
                        />
                        <CardHome
                            title="Web Development"
                            description="Transform your online identity with our stunning, user-friendly websites that not only capture attention but also convert visitors into loyal customers."
                        />
                        <CardHome
                            title="Social Media Management"
                            description="Maximize your social media impact with our expert handling, fostering genuine interactions that drive brand loyalty and amplify your message."
                        />
                    </div>
                </div>

                <div className="py-10">
                    <div className="text-center text-4xl mb-10 font-bold">
                        OUR EXPERTISE COVERS EVERY INDUSTRIES
                    </div>

                    {/* First Slider */}
                    <div className="relative h-20 overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="absolute whitespace-nowrap flex"
                        >
                            {[...industries, ...industries].map((industry, index) => (
                                <div key={index} className="inline-block mx-4">
                                    <PointCard text={industry} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Slider (moving in opposite direction) */}
                    {/* <div className="relative h-40 overflow-hidden">
                        <div
                            className="absolute whitespace-nowrap flex"
                            style={{
                                animation: "slide 40s linear infinite",
                                animationDirection: "reverse"
                            }}
                        >
                            {[...industries, ...industries].map((industry, index) => (
                                <div key={`reverse-${index}`} className="inline-block mx-4">
                                    <PointCard text={industry} />
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className="flex justify-center mt-5">
                        <Button text="Explore Our Projects" variant="blue_variant" onClick={() => { router.push("/portfolio") }} />
                    </div>
                    
                    {/* CSS for the second slider's animation */}
                    <style jsx>{`
                        @keyframes slide {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                        }
                    `}</style>

                </div>
            </div>


            <div>
                <Footer />
            </div>
        </div>
    );
}