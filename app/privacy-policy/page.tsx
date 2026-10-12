"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-10 sm:pb-16">
                {/* Breadcrumb / Back Navigation */}
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                {/* Document Header Card */}
                <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-10 mb-8 shadow-xs">
                    <div className="flex items-center gap-3 mb-4 text-blue-600">
                        <ShieldCheck className="w-6 h-6" />
                        <span className="text-xs uppercase tracking-widest font-bold text-slate-500">
                            Legal & Compliance
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-3">
                        Privacy Policy
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-4">
                        <span><strong>Effective Date:</strong> January 1, 2026</span>
                        <span>•</span>
                        <span><strong>Last Revised:</strong> October 2026</span>
                        <span>•</span>
                        <span><strong>Entity:</strong> Nuvance Technologies Inc.</span>
                    </div>
                </div>

                {/* Content Document */}
                <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-12 shadow-xs space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            1. Introduction & Overview
                        </h2>
                        <p className="mb-3">
                            Nuvance Technologies (&quot;Nuvance&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy describes how we collect, store, process, and protect your information when you visit our website at{" "}
                            <span className="font-semibold text-slate-900">https://nuvancetechnologies.com</span>, engage our software engineering services, or communicate with our team.
                        </p>
                        <p>
                            By utilizing our website or submitting your inquiries, you acknowledge the terms outlined herein. If you have questions regarding our data practices, contact us directly at{" "}
                            <a href="mailto:nuvancetechnologiess@gmail.com" className="text-blue-600 hover:underline font-medium">
                                nuvancetechnologiess@gmail.com
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            2. Information We Collect
                        </h2>
                        <p className="mb-4">
                            We collect only the information necessary to provide software engineering services, communicate project specifications, and maintain platform security.
                        </p>

                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 border border-slate-100 rounded-md">
                                <h3 className="font-bold text-slate-900 mb-1">A. Information Provided Voluntarily</h3>
                                <p className="text-sm text-slate-600 mb-2">
                                    When you submit consultation requests, contact forms, or enter service agreements:
                                </p>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-1">
                                    <li>Full Name and Professional Title</li>
                                    <li>Corporate Email Address and Direct Contact Phone Number</li>
                                    <li>Company Name, Size, and Industry</li>
                                    <li>Project Scope, Technical Architecture Requirements, and Budget Specifications</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-slate-50 border border-slate-100 rounded-md">
                                <h3 className="font-bold text-slate-900 mb-1">B. System & Technical Data</h3>
                                <p className="text-sm text-slate-600 mb-2">
                                    Automatically collected via server logs and essential analytics to prevent abuse and ensure uptime:
                                </p>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-1">
                                    <li>IP address and approximate geolocation</li>
                                    <li>Browser type, engine version, and operating system</li>
                                    <li>Timestamped access logs and referral URLs</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            3. Cookies and Tracking Technologies
                        </h2>
                        <p className="mb-3">
                            We employ standard, unobtrusive cookies to operate this site:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-1 text-slate-600">
                            <li>
                                <strong className="text-slate-900">Strictly Necessary Cookies:</strong> Essential for site routing, session maintenance, and security verification.
                            </li>
                            <li>
                                <strong className="text-slate-900">Performance & Analytics Cookies:</strong> Used strictly to quantify aggregate traffic and optimize loading speeds.
                            </li>
                        </ul>
                        <p className="mt-3">
                            You may configure cookie preferences at any time through our bottom cookie banner or directly via your web browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            4. Purpose of Data Processing
                        </h2>
                        <p className="mb-2">We process your data strictly under valid lawful bases:</p>
                        <ul className="list-disc list-inside space-y-1.5 ml-1 text-slate-600">
                            <li>To fulfill service requests and deliver engineering proposals.</li>
                            <li>To execute software development contracts and client deliverables.</li>
                            <li>To maintain system integrity, detect malicious requests, and prevent denial-of-service.</li>
                            <li>To comply with regulatory standards and financial recordkeeping requirements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            5. Zero Data Sale & Information Sharing
                        </h2>
                        <p className="mb-3">
                            <strong>We never sell, rent, or monetize client or visitor data.</strong> Information is shared solely with vetted operational providers required to execute services:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 ml-1 text-slate-600">
                            <li>Hosting and cloud infrastructure vendors (e.g., AWS, GCP) operating under strict data protection addendums.</li>
                            <li>Direct calendar scheduling providers (e.g., Calendly) when you initiate an appointment.</li>
                            <li>Competent public authorities only when compelled by valid legal processes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            6. Data Security & Storage Controls
                        </h2>
                        <p>
                            We enforce industry-standard security protocols, including TLS 1.3 encryption in transit, strict role-based access control (RBAC), and periodic dependency vulnerability reviews. Data is stored within secure enterprise data centers and retained only as long as necessary for active client engagements or legal compliance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            7. Your Legal Privacy Rights
                        </h2>
                        <p className="mb-2">
                            Depending on your jurisdiction (such as GDPR, CCPA, or DPDP Act), you maintain specific statutory rights:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-1 text-slate-600">
                            <li>The right to access and obtain a portable copy of personal records.</li>
                            <li>The right to demand correction of incomplete or outdated records.</li>
                            <li>The right to request complete data erasure (&quot;Right to be Forgotten&quot;).</li>
                            <li>The right to withdraw consent for non-essential communications at any time.</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 border border-slate-200 rounded-md p-6">
                        <h2 className="text-base font-bold text-slate-950 mb-3">
                            8. Contact Our Data Compliance Team
                        </h2>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                            <p><strong>Nuvance Technologies Inc.</strong></p>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-500" />
                                <span>Jabalpur, Madhya Pradesh, India</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-slate-500" />
                                <a href="mailto:nuvancetechnologiess@gmail.com" className="text-blue-600 hover:underline">
                                    nuvancetechnologiess@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-slate-500" />
                                <span>+91 7219638172 / +91 9109461901</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
