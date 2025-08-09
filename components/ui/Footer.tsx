import Image from "next/image";
import SocialFooter from "../cards/SocialFooter";
import { useRouter } from "next/navigation";
import { Whatsapp } from "@/icons/SocialIcons/Whatsapp";
import Link from "next/link";

export default function Footer() {
    const router = useRouter();
    return (
        <footer className="bg-footerBg text-white pt-12 pb-6 sm:pt-16 sm:pb-8">
            <div className="container mx-auto px-4">
                {/* Top Section - Logo and Name */}
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <div className="cursor-pointer">
                            <Image
                                src="/NuvanceLogo-white.png"
                                alt="CompanyLogo"
                                width={42}
                                height={52}
                                className="hover:opacity-80 transition-opacity"
                            />
                        </div>
                        <div className="text-xl sm:text-2xl cursor-pointer font-bold ml-3 text-white relative group">
                            Nuvance Technologies
                            <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm text-white/60 text-center">Let&apos;s Grow Your Brand</p>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-xs sm:text-sm mb-8 sm:mb-12">
                    {/* Core Services */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-sm sm:text-base text-emerald-300 font-semibold mb-2 sm:mb-3">Core Services</h3>
                        <ul className="space-y-1 sm:space-y-2">
                            <li className="transition-all duration-500 hover:-translate-y-1 cursor-pointer">• Custom Software Development</li>
                            <li className="transition-all duration-500 hover:-translate-y-1 cursor-pointer">• Website Development</li>
                            <li className="transition-all duration-500 hover:-translate-y-1 cursor-pointer">• Mobile App Development</li>
                            <li className="transition-all duration-500 hover:-translate-y-1 cursor-pointer">• Ecommerce Development</li>
                            <li className="transition-all duration-500 hover:-translate-y-1 cursor-pointer">• AIML Solutions</li>
                        </ul>
                    </div>

                    {/* Insights */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-sm sm:text-base font-semibold text-emerald-300 mb-2 sm:mb-3">Insights</h3>
                        <ul className="">
                            <li><span className="transition-all duration-300 hover:text-blue-400 cursor-pointer">Blog</span></li>
                            <li className="transition-all duration-300 hover:text-blue-400 cursor-pointer">Events</li>
                        </ul>
                        <ul className="space-y-1 mt-5 md:mt-8 text-xs sm:text-sm">
                            <li><span className="font-medium transition-all duration-300 text-emerald-300 cursor-pointer">Careers</span></li>
                            <li className="transition-all duration-300 hover:text-blue-400 cursor-pointer">Job opportunities</li>
                            <li className="transition-all duration-300 hover:text-blue-400 cursor-pointer">Talent referral program</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-emerald-300">Company</h3>
                        <ul className="space-y-1 sm:space-y-2 cursor-pointer">
                            <li className="transition-all duration-300 hover:text-cyan-400" onClick={() => { router.push("/about-us") }}>• About</li>
                            <li className="transition-all duration-300 hover:text-cyan-400" onClick={() => { router.push("/case-study") }}>• Case Studies</li>
                            <li className="transition-all duration-300 hover:text-cyan-400" onClick={() => { router.push("/") }}>• Blogs</li>
                            <li className="transition-all duration-300 hover:text-cyan-400" onClick={() => { router.push("/contact-us") }}>• Careers</li>
                            <li className="transition-all duration-300 hover:text-cyan-400" onClick={() => { router.push("/contact-us") }}>• Contact</li>
                            <li className="transition-all duration-300 hover:text-cyan-400" onClick={() => { router.push("/") }}>• Sitemap</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center cursor-pointer sm:text-left">
                        <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-emerald-300">Contact</h3>
                        <p className="mb-1 sm:mb-2 text-xs sm:text-sm">
                            <strong>IND</strong><br />
                            Jabalpur, Madhya Pradesh
                        </p>
                        <p className="mb-1 sm:mb-2 text-xs sm:text-sm cursor-pointer">📞 +91 7219638172</p>
                        <p onClick={() => {
                            window.open("https://wa.me/919109461901")
                        }} className="mb-1 sm:mb-2 text-xs sm:text-sm flex items-center justify-center md:justify-start cursor-pointer"> <Whatsapp className="size-5 text-green-300 mr-1" />  +91 9109461901</p>
                        <p className="text-xs sm:text-sm">✉️{" "}
                            <span> Mail us at: </span>
                            <span
                                onClick={() => { window.location.href = "mailto:nuvancetechnologiess@gmail.com"; }}
                                className="cursor-pointer hover:text-blue-300 text-blue-200 break-all"
                            >
                                nuvancetechnologiess@gmail.com
                            </span>
                        </p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col items-center md:flex-row justify-between border-t border-white/10 pt-4 sm:pt-6 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-10 text-center md:text-left order-1 md:order-none cursor-pointer">
                        <div className="hover:scale-105 transition-all duration-500">
                            © {new Date().getFullYear()} Nuvance Technologies Inc. All rights reserved.
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
                            <Link href="/terms-and-conditions">
                                <div className="hover:text-blue-400 transition-all duration-300">• Terms and conditions</div>
                            </Link>

                            <Link href="/privacy-policy">
                                <div className="hover:text-blue-400 transition-all duration-300">• Privacy Policy</div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:flex-row gap-2 sm:gap-4 order-2 md:order-none mb-3 sm:mb-0">

                        <div className="flex flex-col items-center mt-5 md:mt-0">
                            <span
                                onClick={() => { router.push("/contact-us") }}
                                className="font-semibold cursor-pointer transition-all duration-300 hover:text-green-400 text-sm"
                            >
                                Get Connected
                            </span>
                            <SocialFooter />
                        </div>
                        <div className="ml-1">
                            <Image
                                src="/dmca.png"
                                alt="DMCA"
                                width={80}
                                height={30}
                                className="w-25 transition-all duration-300 cursor-pointer hover:scale-105 md:w-30"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}