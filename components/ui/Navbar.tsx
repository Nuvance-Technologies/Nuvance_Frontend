"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { MenuBars } from "@/icons/others/MenuBars";
import { Close } from "@/icons/others/Close";
import { PhoneCall } from "@/icons/others/Call";

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
            initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
        };
    }
}

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);
    const calendlyWidgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => pathname === href;

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/about-us", text: "About Us" },
        { href: "/services", text: "Services" },
        { href: "/portfolio", text: "Portfolio" },
        { href: "/contact-us", text: "Contact Us" },
    ];

    useEffect(() => {
        if (window.Calendly) return;

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (showCalendlyModal && calendlyWidgetRef.current && window.Calendly) {
            // Initialize the inline widget when modal is shown
            window.Calendly.initInlineWidget({
                url: "https://calendly.com/nihal-nuvancetechnologies/30min?hide_event_type_details=1&hide_gdpr_banner=1",
                parentElement: calendlyWidgetRef.current
            });
        }
    }, [showCalendlyModal]);

    const handleCalendlyClick = () => {
        setIsMenuOpen(false);
        setShowCalendlyModal(true);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-mainBgColor/70 backdrop-blur-md shadow-md"
                    : "bg-mainBgColor"
                    }`}
            >
                <div className="flex justify-between items-center py-4 px-4 max-w-7xl mx-auto">
                    {/* Logo and company name */}
                    <div className="flex items-center">
                        <div
                            onClick={() => router.push("/")}
                            className="cursor-pointer"
                        >
                            <Image
                                src="/NuvanceLogo.png"
                                alt="CompanyLogo"
                                width={42}
                                height={52}
                            />
                        </div>
                        <div
                            className="text-lg cursor-pointer font-bold ml-3 text-black relative"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            onClick={() => router.push("/")}
                        >
                            Nuvance Technologies
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-in-out ${isHovering ? "w-full" : "w-0"
                                    }`}
                            ></span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center ml-6 space-x-8">
                        {navLinks.map((item) => (
                            <div key={item.href} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`${isActive(item.href)
                                        ? "font-bold text-blue-600"
                                        : "text-black hover:text-blue-600"
                                        } transition-colors duration-200`}
                                >
                                    {item.text}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 ${isActive(item.href)
                                            ? "bg-blue-600 w-full"
                                            : "bg-blue-600 w-0 group-hover:w-full transition-all duration-300"
                                            }`}
                                    ></span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center">
                        <Button
                            endIcon={<PhoneCall />}
                            variant="blue_variant"
                            text="Schedule a Call"
                            onClick={handleCalendlyClick}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black relative w-8 h-8"
                        >
                            <span
                                className={`mt-1 absolute inset-0 transition-all duration-300 transform ${isMenuOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
                                    }`}
                            >
                                <MenuBars />
                            </span>
                            <span
                                className={`mt-1 absolute inset-0 transition-all duration-300 transform ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                    }`}
                            >
                                <Close />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`md:hidden transition-all duration-500 transform ${isMenuOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                        } absolute top-[68px] left-0 right-0 bg-mainBgColor/95 backdrop-blur-md z-40 p-4 rounded-b-xl shadow-lg`}
                >
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`py-2 px-3 rounded-md transition-colors duration-300 ${isActive(item.href)
                                    ? "font-bold text-blue-600"
                                    : "text-black hover:text-blue-600"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.text}
                            </Link>
                        ))}
                        <Button
                            endIcon={<PhoneCall />}
                            variant="blue_variant"
                            text="Schedule a Call"
                            className="mt-3"
                            onClick={handleCalendlyClick}
                        />
                    </div>
                </div>
            </div>

            {/* Calendly Modal */}
            {showCalendlyModal && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 bg-opacity-50 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
                        <button
                            className="absolute cursor-pointer top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowCalendlyModal(false)}
                        >
                            <Close />
                        </button>
                        <div
                            ref={calendlyWidgetRef}
                            className="calendly-inline-widget w-full h-full"
                            style={{ minWidth: '320px', height: '100%' }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}