"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { EnterDoor } from "@/icons/others/EnterDoor";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isHovering, setIsHovering] = useState(false);

    // Here Checking if the current route matches the link
    const isActive = (href: string) => {
        return pathname === href;
    };

    return (
        <div className="flex justify-around items-center py-5 rounded-2xl bg-mainBgColor">
            <div className="flex items-center">
                <div onClick={() => router.push("/")} className="cursor-pointer">
                    <Image src="/NuvanceLogo.png" alt="CompanyLogo" width={42} height={52} />
                </div>

                <div 
                    className="text-2xl cursor-pointer font-bold ml-1 mx-10 text-black relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => router.push("/")}
                >
                    Nuvance Technologies
                    <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-in-out ${isHovering ? 'w-full' : 'w-0'}`}
                    ></span>
                </div>

                <div className="ml-5 flex space-x-5">
                    <div className="relative group">
                        <Link 
                            href="/" 
                            className={`${isActive('/') ? 'font-semibold text-blue-600' : 'text-black hover:text-blue-600'} transition-colors duration-200`}
                        >
                            Home
                            <span className={`absolute -bottom-1 left-0 h-0.5 ${isActive('/') ? 'bg-blue-600 w-full' : 'bg-blue-600 w-0 group-hover:w-full transition-all duration-300'}`}></span>
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link 
                            href="/services" 
                            className={`${isActive('/services') ? 'font-semibold text-blue-600' : 'text-black hover:text-blue-600'} transition-colors duration-200`}
                        >
                            Services
                            <span className={`absolute -bottom-1 left-0 h-0.5 ${isActive('/services') ? 'bg-blue-600 w-full' : 'bg-blue-600 w-0 group-hover:w-full transition-all duration-300'}`}></span>
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link 
                            href="/portfolio" 
                            className={`${isActive('/portfolio') ? 'font-semibold text-blue-600' : 'text-black hover:text-blue-600'} transition-colors duration-200`}
                        >
                            Portfolio
                            <span className={`absolute -bottom-1 left-0 h-0.5 ${isActive('/portfolio') ? 'bg-blue-600 w-full' : 'bg-blue-600 w-0 group-hover:w-full transition-all duration-300'}`}></span>
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link 
                            href="/contact-us" 
                            className={`${isActive('/contact-us') ? 'font-semibold text-blue-600' : 'text-black hover:text-blue-600'} transition-colors duration-200`}
                        >
                            Contact Us
                            <span className={`absolute -bottom-1 left-0 h-0.5 ${isActive('/contact-us') ? 'bg-blue-600 w-full' : 'bg-blue-600 w-0 group-hover:w-full transition-all duration-300'}`}></span>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <Button endIcon={<EnterDoor/>} variant="purple_variant" text="Login"/>
            </div>
        </div>
    )
}