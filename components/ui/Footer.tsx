"use client";

import Image from "next/image";
import SocialFooter from "../cards/SocialFooter";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section - Brand Identity */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-10 mb-10 border-b border-slate-800 gap-6">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
                        <Image
                            src="/NuvanceLogo-white.png"
                            alt="Nuvance Technologies"
                            width={38}
                            height={46}
                            className="h-9 w-auto"
                        />
                        <div>
                            <span className="text-xl font-bold tracking-tight text-white block">
                                Nuvance Technologies
                            </span>
                            <span className="text-xs text-sky-400 font-semibold block mt-0.5">
                                Your success, our software.
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm"
                        >
                            Schedule Consultation
                        </Link>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-sm mb-12">
                    {/* Core Services */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                            Engineering Services
                        </h3>
                        <ul className="space-y-2.5 text-slate-400">
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Custom Software Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Web Application Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Mobile Application Engineering
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Cloud Architecture & DevOps
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    AI & Data Pipeline Integration
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions & Work */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                            Solutions & Insights
                        </h3>
                        <ul className="space-y-2.5 text-slate-400">
                            <li>
                                <Link href="/case-study" className="hover:text-white transition-colors">
                                    Case Studies & Deliveries
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="hover:text-white transition-colors">
                                    Deployed Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Enterprise Modernization
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="hover:text-white transition-colors">
                                    Technical Advisory
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2.5 text-slate-400">
                            <li>
                                <Link href="/about-us" className="hover:text-white transition-colors">
                                    About Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-study" className="hover:text-white transition-colors">
                                    Methodology & Milestones
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="hover:text-white transition-colors">
                                    Careers & Opportunities
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="hover:text-white transition-colors">
                                    Contact Engineering Team
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
                            Headquarters & Contact
                        </h3>
                        <div className="space-y-3 text-slate-400 text-sm">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="block text-slate-200 font-semibold text-xs">Reg Off (Registered Office):</span>
                                    <span>2701 Ranjhi, Jabalpur, MP, India</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="block text-slate-200 font-semibold text-xs">Corp Office:</span>
                                    <span>Kalyan, Mumbai, MH, India</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                                <a href="tel:+917219638172" className="hover:text-white transition-colors">
                                    7219638172 (+91 7219638172)
                                </a>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <a
                                    href="https://wa.me/919109461901"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-emerald-300 transition-colors"
                                >
                                    9109461901 (+91 9109461901)
                                </a>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                                <a
                                    href="mailto:nuvancetechnologiess@gmail.com"
                                    className="hover:text-white transition-colors break-all"
                                >
                                    nuvancetechnologiess@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-5">
                            <span className="text-xs text-slate-400 font-medium block mb-2">Connect:</span>
                            <SocialFooter />
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Legal & Copyright */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Nuvance Technologies — Your success, our software. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white transition-colors underline-offset-4 hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-slate-700" aria-hidden="true">•</span>
                        <Link
                            href="/terms-and-conditions"
                            className="hover:text-white transition-colors underline-offset-4 hover:underline"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Image
                            src="/dmca.png"
                            alt="DMCA Protected"
                            width={76}
                            height={26}
                            className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}