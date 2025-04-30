import Image from "next/image";
import { Input } from "./Input-1";
import { Button } from "./Button";
import SocialFooter from "../cards/SocialFooter";

export default function Footer() {
    return (
        <footer className="bg-footerBg text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Top Section - Logo and Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    {/* Logo */}
                    <div className="flex items-center mb-6 md:mb-0">
                        <div className="cursor-pointer">
                            <Image
                                src="/NuvanceLogo-white.png"
                                alt="CompanyLogo"
                                width={42}
                                height={52}
                                className="hover:opacity-80 transition-opacity"
                            />
                        </div>
                        <div className="text-2xl cursor-pointer font-bold ml-3 text-white relative group">
                            Nuvance Technologies
                            <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:w-auto">
                        <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Your email address"
                            // className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-primary rounded-lg px-4 py-3 w-full sm:w-64"
                            />
                            <Button
                                variant="general_1"
                                text="Subscribe"
                            // className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 transition-colors"
                            >
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">AI Services</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Whitepapers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                House no 2701 Vishwakarma Moholla Ranjhi, Jabalpur
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📞</span>
                                +91 7219638172
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✉️</span>
                                <div onClick={() => { window.location.href = "mailto:info.techstudio@gmail.com"; }} style={{ cursor: 'pointer' }}>
                                    info.techstudio@gmail.com
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Social and Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
                    {/* Social Links */}


                    {/* Copyright */}
                    <div className="text-sm text-white/60">
                        © {new Date().getFullYear()} Nuvance Technologies. All rights reserved.
                    </div>

                    <div>
                        <SocialFooter />
                    </div>
                </div>
            </div>
        </footer>
    );
}