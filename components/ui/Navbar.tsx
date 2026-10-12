"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Menu, X, MessageCircle } from "lucide-react";
import CalendlyModal from "@/components/ui/CalendlyModal";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Automatically close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Lock body scroll and listen for Escape key when mobile menu is open
    useEffect(() => {
        if (!isMenuOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    const isActive = (href: string) => pathname === href;

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/about-us", text: "About Us" },
        { href: "/services", text: "Services" },
        { href: "/portfolio", text: "Portfolio" },
        { href: "/case-study", text: "Case Studies" },
        { href: "/contact-us", text: "Contact" },
    ];

    const handleCalendlyClick = () => {
        setIsMenuOpen(false);
        setShowCalendlyModal(true);
    };

    return (
        <>
            {/* Mobile Backdrop Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-950/75 backdrop-blur-xs md:hidden pointer-events-auto transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Floating Island Capsule Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-200">
                <div className="max-w-6xl mx-auto pointer-events-auto">
                    <div
                        className={`transition-all duration-300 rounded-full px-3.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between border ${
                            isScrolled
                                ? "bg-slate-900/95 backdrop-blur-md border-slate-700/80 shadow-2xl shadow-slate-950/40"
                                : "bg-slate-900/90 backdrop-blur-md border-slate-700/60 shadow-xl shadow-slate-950/20"
                        }`}
                    >
                        {/* Logo and company branding */}
                        <div
                            onClick={() => router.push("/")}
                            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group flex-shrink-0"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs border border-white/40 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/NuvanceLogo.png"
                                    alt="Nuvance Technologies"
                                    width={32}
                                    height={40}
                                    priority
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm xs:text-base sm:text-lg lg:text-[19px] font-extrabold sm:font-black text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                                    Nuvance Technologies
                                </span>
                                <span className="hidden min-[360px]:block text-[7px] sm:text-[8px] font-semibold tracking-widest text-sky-400 uppercase leading-none mt-0.5 whitespace-nowrap">
                                    Your success, our software.
                                </span>
                            </div>
                        </div>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {navLinks.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-3 py-1.5 text-[11px] lg:text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 ${
                                            active
                                                ? "text-white bg-slate-800 shadow-xs border border-slate-700"
                                                : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                                        }`}
                                    >
                                        {item.text}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Desktop Utilities & Gradient Pill CTA */}
                        <div className="hidden sm:flex items-center gap-2.5">
                            {/* WhatsApp Direct Action */}
                            <a
                                href="https://wa.me/919109461901"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-400 border border-slate-700 flex items-center justify-center transition-colors"
                                title="Chat on WhatsApp (9109461901)"
                                aria-label="Chat on WhatsApp"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>

                            {/* Phone Call Action */}
                            <a
                                href="tel:+917219638172"
                                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700 flex items-center justify-center transition-colors"
                                title="Call 7219638172"
                                aria-label="Call 7219638172"
                            >
                                <PhoneCall className="w-3.5 h-3.5" />
                            </a>

                            {/* Glowing Gradient Pill CTA */}
                            <button
                                type="button"
                                onClick={handleCalendlyClick}
                                className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 border border-blue-400/30 transition-all duration-200 cursor-pointer"
                            >
                                <span>Schedule a Call</span>
                            </button>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex sm:hidden items-center gap-1.5 xs:gap-2">
                            <button
                                type="button"
                                onClick={handleCalendlyClick}
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs border border-blue-400/30 active:scale-95 transition-transform"
                            >
                                <PhoneCall className="w-3 h-3" />
                                <span>Call</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 transition-colors active:scale-95"
                                aria-label="Toggle navigation menu"
                            >
                                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu Card */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-2 bg-slate-900/98 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl space-y-1 text-slate-200 max-h-[calc(100vh-100px)] overflow-y-auto animate-fade-in">
                            {navLinks.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors ${
                                            active
                                                ? "text-white bg-slate-800 border border-slate-700 font-extrabold"
                                                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                        }`}
                                    >
                                        {item.text}
                                    </Link>
                                );
                            })}
                            <div className="pt-3">
                                <button
                                    type="button"
                                    onClick={handleCalendlyClick}
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-blue-600/30 border border-blue-400/30 active:scale-98 transition-transform"
                                >
                                    <PhoneCall className="w-4 h-4" />
                                    <span>Schedule a Call</span>
                                </button>
                            </div>
                            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                                <div className="text-sky-400 font-bold uppercase tracking-wider text-[10px]">Your success, our software.</div>
                                <div><strong className="text-slate-300">Reg Off:</strong> 2701 Ranjhi, Jabalpur</div>
                                <div><strong className="text-slate-300">Phone:</strong> 7219638172 | <strong className="text-slate-300">WhatsApp:</strong> 9109461901</div>
                                <div><strong className="text-slate-300">Email:</strong> nuvancetechnologiess@gmail.com</div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Calendly Modal */}
            <CalendlyModal
                isOpen={showCalendlyModal}
                onClose={() => setShowCalendlyModal(false)}
            />
        </>
    );
}