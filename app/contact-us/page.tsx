"use client";

import { useState } from "react";
import Footer from "@/components/ui/Footer";
import { Input } from "@/components/ui/Input-1";
import InstaBtn from "@/components/ui/InstagramBtn";
import LinkedinBtn from "@/components/ui/LinkedinBtn";
import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import ConnectWithUs from "@/components/ui/ConnectBtn";
import { Button } from "@/components/ui/Button";
import { FAQSection } from "@/components/ui/Faq";
import TextBox from "@/components/ui/ConnectBtn";
import TypingText from "@/components/ui/TypingText";
import WhatsappBtn from "@/components/ui/Buttons/WhatsappBtn";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        companyName: "",
        companySize: "",
        howWeCanHelp: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post(`http://localhost:3001/api/v1/contact/`, formData);
            if (response.status === 200) {
                toast.success("Thank you for contacting us! We'll get back to you soon.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    contactNumber: "",
                    companyName: "",
                    companySize: "",
                    howWeCanHelp: ""
                });
            }
        } catch (error) {
            // toast.error("Failed to submit form. Please try again.");
            toast.error("It will work when we will deploy our website properly");
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-mainBgColor overflow-hidden">
            <Toaster position="top-center" />

            {/* Animated Blur Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                    className="absolute animate-pulse bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-red-300/80 blur-[80px] md:blur-[150px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute animate-pulse top-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/40 blur-[60px] md:blur-[120px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2.4 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute animate-pulse top-1/2 left-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-emerald-500/40 blur-[50px] md:blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />

                <div className="mt-30">
                    <TextBox text="Get in touch" />
                </div>

                <h1 className="text-2xl mt-4 cursor-pointer md:text-4xl text-center font-extrabold mb-5 leading-tight tracking-tight drop-shadow-md transition-all duration-500">
                    <TypingText text="Share with visitors how they can contact you and encourage them to ask any questions they may have."/>
                </h1>

                {/* Contact Form Section */}
                <div className="flex flex-col lg:flex-row justify-around items-center mt-20 gap-12">
                    <div className="flex flex-col items-center gap-8">
                        <div className="text-center">
                            <div className="cursor-pointer text-center hover:-translate-y-1 transition-all duration-500 font-extrabold text-gray-800 text-2xl md:text-4xl lg:text-5xl tracking-tight leading-snug animate-fade-in-up">
                                <span className="text-blue-600">Contact Us</span>
                            </div>
                            <div className="font-bold text-2xl mt-4 text-gray-800">Fill in the form to get in touch.</div>
                        </div>
                        <div>
                            <Image
                                src="/contactPageIcons/contactUs.png"
                                alt="Contact Us"
                                className="cursor-pointer hover:-translate-y-1 transition-all duration-500 rounded-2xl"
                                width={350}
                                height={350}
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 bg-white/30 dark:bg-cyan-200/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/40 dark:border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm text-gray-700 dark:text-black font-bold mb-1">
                                    First Name *
                                </label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm text-gray-700 dark:text-black font-bold mb-1">
                                    Last Name *
                                </label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-black mb-1">
                                Email *
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-bold text-gray-700 dark:text-black mb-1">
                                Contact Number *
                            </label>
                            <Input
                                id="contactNumber"
                                name="contactNumber"
                                type="tel"
                                placeholder="Contact Number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-bold text-gray-700 dark:text-black mb-1">
                                    Company Name
                                </label>
                                <Input
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    placeholder="Company Name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="companySize" className="block text-sm font-bold text-gray-700 dark:text-black mb-1">
                                    Company Size
                                </label>
                                <Input
                                    id="companySize"
                                    name="companySize"
                                    type="text"
                                    placeholder="Company Size"
                                    value={formData.companySize}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="howWeCanHelp" className="block text-sm font-bold text-gray-700 dark:text-black mb-1">
                                How Can We Help *
                            </label>
                            <textarea
                                id="howWeCanHelp"
                                name="howWeCanHelp"
                                placeholder="Tell us about your project or inquiry"
                                value={formData.howWeCanHelp}
                                onChange={handleChange}
                                required
                                rows={4} // You can adjust the number of visible rows
                                className="w-full p-2 border bg-white rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
                <div>
                    <div>
                        <div className="mt-20">
                            <ConnectWithUs text="Connect With Us" />
                        </div>
                        <div className="font-bold mt-5 text-blue-600 text-2xl text-center">
                            Follow us on social media for updates, insights, and tech trends
                        </div>
                    </div>

                    <div className="flex justify-center items-center space-x-8 mt-4 mb-5">
                        <InstaBtn />
                        <LinkedinBtn />
                        <WhatsappBtn/>
                    </div>
                </div>

                <div className="mt-10 text-center animate-bounce">
                    <span className="bg-gradient-to-r text-2xl md:text-4xl font-extrabold from-black via-blue-700 to-slate-800 bg-clip-text text-transparent decoration-cyan-800 cursor-pointer hover:underline">
                        Our Trusted Partners
                    </span>
                </div>

                <div className="flex justify-center flex-col md:flex-row items-center">
                    <Image src="/contactPageIcons/redHat.png" className="cursor-pointer hover:scale-105 transition-all duration-500" alt="Our Trusted Partners" width={500} height={500} />
                    <Image src="/contactPageIcons/aws.png" className="cursor-pointer hover:scale-105 transition-all duration-500" alt="Our Trusted Partners" width={400} height={400} />
                </div>

                <div className="w-full flex justify-center flex-col md:w-auto">
                    <h3 className="text-2xl font-bold mb-3 text-center">Subscribe to our newsletter</h3>
                    <div className="flex flex-col justify-center items-center space-y-1 space-x-5 sm:flex-row gap-2">
                        <Input
                            type="email"
                            placeholder="Your email"
                        // className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-primary rounded-lg px-4 py-3 w-full sm:w-64"
                        />
                        <Button
                            variant="blue_variant"
                            text="Subscribe"
                        // className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 transition-colors"
                        >
                        </Button>
                    </div>
                </div>

                <FAQSection />

            </div>

            <div className="mt-10">
                <Footer />
            </div>

        </div>
    );
}