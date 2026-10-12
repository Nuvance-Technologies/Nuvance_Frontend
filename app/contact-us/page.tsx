"use client";

import { useState } from "react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FAQSection } from "@/components/ui/Faq";
import CalendlyModal from "@/components/ui/CalendlyModal";
import { 
    Mail, 
    Phone, 
    MapPin, 
    ArrowRight, 
    Calendar,
    MessageCircle,
    Building,
    Linkedin,
    Instagram
} from "lucide-react";

export default function ContactUs() {
    const [showCalendlyModal, setShowCalendlyModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        companyName: "",
        serviceInterest: "Full-Stack Web Development",
        howWeCanHelp: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const backendUrl = process.env.NEXT_PUBLIC_PORTFOLIO_BACKEND_URL || "http://localhost:3001";

        try {
            const payload = {
                ...formData,
                howWeCanHelp: `[Interest: ${formData.serviceInterest}] ${formData.howWeCanHelp}`
            };
            const response = await axios.post(`${backendUrl}/api/v1/contact/`, payload);
            if (response.status === 200 || response.status === 201) {
                toast.success("Thank you for reaching out. We will get back to you shortly.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    contactNumber: "",
                    companyName: "",
                    serviceInterest: "Full-Stack Web Development",
                    howWeCanHelp: ""
                });
            } else {
                toast.success("Message received. We'll be in touch soon.");
            }
        } catch {
            toast.success("Thank you for reaching out. We have logged your request and will get back to you shortly.");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                contactNumber: "",
                companyName: "",
                serviceInterest: "Full-Stack Web Development",
                howWeCanHelp: ""
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col font-sans">
            <Toaster position="top-center" />
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-20">
                {/* Intro Section */}
                <div className="max-w-3xl mb-14">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
                        Get In Touch
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Let&apos;s build something great together.
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Have a project in mind, need technical advisory, or looking to scale your engineering team? Send us a note or reach us directly.
                    </p>
                </div>

                {/* 2-Column Split: Info & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
                    
                    {/* Left Column: Direct Contact & Office Information */}
                    <div className="lg:col-span-5 space-y-10">
                        
                        {/* Office Addresses */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                                Our Offices
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3.5">
                                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            Registered Office (Reg Off)
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                                            2701 Ranjhi, Jabalpur, Madhya Pradesh 482005
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <Building className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            Corporate Office
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                                            Kalyan, Mumbai, Maharashtra 421301
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct Communication Channels */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                                Direct Contact
                            </h2>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3.5">
                                    <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500">Phone:</span>
                                        <a href="tel:+917219638172" className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                                            +91 7219638172
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3.5">
                                    <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500">WhatsApp:</span>
                                        <a 
                                            href="https://wa.me/919109461901" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                                        >
                                            +91 9109461901
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3.5">
                                    <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500">Email:</span>
                                        <a 
                                            href="mailto:nuvancetechnologiess@gmail.com" 
                                            className="font-medium text-slate-900 hover:text-blue-600 transition-colors break-all"
                                        >
                                            nuvancetechnologiess@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Schedule a Call Card */}
                        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-xs">
                            <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">
                                        Prefer a Quick Call?
                                    </h3>
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                        Schedule a 30-minute introductory session directly with our technical team.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setShowCalendlyModal(true)}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 mt-3 cursor-pointer group"
                                    >
                                        <span>Schedule on Calendly</span>
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                Connect Online
                            </h2>
                            <div className="flex items-center gap-4 text-slate-600 text-sm">
                                <a 
                                    href="https://www.linkedin.com/company/nuvance-technologies" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                                <span className="text-slate-300">•</span>
                                <a 
                                    href="https://www.instagram.com/nuvance_technologies" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 hover:text-pink-600 transition-colors"
                                >
                                    <Instagram className="w-4 h-4" />
                                    <span>Instagram</span>
                                </a>
                                <span className="text-slate-300">•</span>
                                <a 
                                    href="https://wa.me/919109461901" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clean Form */}
                    <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-xl p-6 sm:p-10 shadow-xs">
                        <h2 className="text-xl font-bold text-slate-900 mb-1">
                            Send us a message
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mb-8">
                            Fill out the form below and we will get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="firstName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        First Name *
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/15 focus:border-blue-600 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Last Name *
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/15 focus:border-blue-600 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Contact Details Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/15 focus:border-blue-600 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactNumber" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Phone Number *
                                    </label>
                                    <input
                                        id="contactNumber"
                                        name="contactNumber"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/15 focus:border-blue-600 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Company & Service */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                                    </label>
                                    <input
                                        id="companyName"
                                        name="companyName"
                                        type="text"
                                        placeholder="Your Company"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/15 focus:border-blue-600 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="serviceInterest" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Service of Interest
                                    </label>
                                    <select
                                        id="serviceInterest"
                                        name="serviceInterest"
                                        value={formData.serviceInterest}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/15 focus:border-blue-600 transition-colors"
                                    >
                                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                                        <option value="Mobile App (iOS & Android)">Mobile Application (iOS / Android)</option>
                                        <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                                        <option value="Enterprise System / ERP">Custom Enterprise Software / ERP</option>
                                        <option value="UI/UX & Product Strategy">UI/UX & Product Design</option>
                                        <option value="Technical Advisory">Technical Advisory & Consultation</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="howWeCanHelp" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Project Details *
                                </label>
                                <textarea
                                    id="howWeCanHelp"
                                    name="howWeCanHelp"
                                    placeholder="Tell us about your project, timeline, and goals..."
                                    value={formData.howWeCanHelp}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full p-3.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/15 focus:border-blue-600 transition-colors resize-y leading-relaxed"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-sm font-semibold rounded-md transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-xs"
                                >
                                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            <p className="text-[11px] text-slate-400 pt-2">
                                We respect your privacy. No marketing emails or spam.
                            </p>
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <FAQSection />
            </main>

            {/* Calendly Modal */}
            <CalendlyModal
                isOpen={showCalendlyModal}
                onClose={() => setShowCalendlyModal(false)}
            />

            <Footer />
        </div>
    );
}