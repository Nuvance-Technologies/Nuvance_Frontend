"use client";
import CardHome from "@/components/cards/CardHome";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        // Main container with full viewport height and background color
        <div className="h-screen">

            <Navbar />

            {/* Hero section with background image */}
            <div 
                className="relative h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/bgimg-1.jpg')",
                }}
            >

                <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>
                

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
                        <Button variant="green_variant" text="Explore Our Services" onClick={() => {router.push("/services")}}/>
                    </div>
                </div>
            </div>
            
            <div className="mt-10">
                <div className="text-center text-4xl font-bold">
                    Discover How We Elevate Your Brand
                </div>
                
                <div className="flex justify-center space-x-20 mt-5">
                    <div>
                        <CardHome title="SEO Optimization" description="Achieve top rankings and increased visibility in search results, translating clicks into customers with our tailored SEO solutions designed for sustainable growth."/>
                    </div>
                    
                    <div>
                        <CardHome title="Web Development" description="Transform your online identity with our stunning, user-friendly websites that not only capture attention but also convert visitors into loyal customers."/>
                    </div>

                    <div>
                        <CardHome title="Social Media Management" description="Maximize your social media impact with our expert handling, fostering genuine interactions that drive brand loyalty and amplify your message."/>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <Footer/>
            </div>
        </div>
    )
}