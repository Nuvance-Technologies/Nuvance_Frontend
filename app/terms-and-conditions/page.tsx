"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { FileText, Mail, MapPin, Phone, ArrowLeft } from "lucide-react";

export default function TermsAndConditionsPage() {
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
                        <FileText className="w-6 h-6" />
                        <span className="text-xs uppercase tracking-widest font-bold text-slate-500">
                            Legal & Service Terms
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-3">
                        Terms & Conditions
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
                            1. Acceptance of Terms
                        </h2>
                        <p className="mb-3">
                            Welcome to Nuvance Technologies (&quot;Nuvance&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern access to our website at <span className="font-semibold text-slate-900">https://nuvancetechnologies.com</span>, as well as software engineering, development, and consulting engagements delivered by Nuvance.
                        </p>
                        <p>
                            By accessing this website or entering into an agreement for our services, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not accept these Terms, do not utilize our digital properties or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            2. Scope of Professional Services
                        </h2>
                        <p className="mb-3">
                            Nuvance Technologies delivers custom software development, mobile application engineering, web platforms, cloud architecture, and technical consulting.
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 ml-1 text-slate-600">
                            <li>All project milestones, specifications, deliverable schedules, and acceptance criteria are formally defined in written Statements of Work (SOW) or Service Agreements.</li>
                            <li>Any modifications to agreed project scope require formal written change requests signed by authorized representatives of both parties.</li>
                            <li>Estimates and advisory consultations prior to a signed SOW do not constitute binding engineering commitments.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            3. Intellectual Property Rights
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 border border-slate-100 rounded-md">
                                <h3 className="font-bold text-slate-900 mb-1">A. Custom Client Deliverables</h3>
                                <p className="text-sm text-slate-600">
                                    Upon full payment of all contracted fees, ownership of bespoke software deliverables, source code, and custom assets developed specifically for the client shall transfer to the client as stipulated in the relevant Service Agreement.
                                </p>
                            </div>

                            <div className="p-4 bg-slate-50 border border-slate-100 rounded-md">
                                <h3 className="font-bold text-slate-900 mb-1">B. Pre-existing IP & Tools</h3>
                                <p className="text-sm text-slate-600">
                                    Nuvance Technologies retains all rights to its pre-existing libraries, developer tooling, proprietary architectural patterns, and website content. Any third-party or open-source software incorporated into deliverables remains governed by its applicable open-source license.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            4. Payment Terms & Invoicing
                        </h2>
                        <p className="mb-2">Unless otherwise defined in an active SOW:</p>
                        <ul className="list-disc list-inside space-y-1.5 ml-1 text-slate-600">
                            <li>Invoices are payable within the net terms stated on each respective invoice.</li>
                            <li>Work schedules and delivery timelines are contingent upon timely payment of agreed milestone installments.</li>
                            <li>All fees are exclusive of applicable taxes, which remain the responsibility of the client.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            5. Warranties & Limitation of Liability
                        </h2>
                        <p className="mb-3">
                            Website content and public technical insights are provided on an &quot;as-is&quot; basis without warranties of any kind. For contracted software services, warranty coverage and remediation windows are defined strictly within the applicable SOW.
                        </p>
                        <p className="text-slate-600">
                            To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, special, or consequential damages (including loss of profits, data, or business interruption) arising from use of our digital platforms or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            6. Confidentiality & Non-Disclosure
                        </h2>
                        <p>
                            Both parties agree to protect and treat as confidential all proprietary technical information, business data, and project source code disclosed during consultations and active development. Confidential information shall not be disclosed to any third party without prior written authorization.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-950 mb-3 border-b border-slate-100 pb-2">
                            7. Governing Law & Dispute Resolution
                        </h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of India. Any controversy or claim arising out of or relating to these Terms shall be resolved through good-faith executive negotiation, and failing resolution, through the courts of competent jurisdiction located in Madhya Pradesh, India.
                        </p>
                    </section>

                    <section className="bg-slate-50 border border-slate-200 rounded-md p-6">
                        <h2 className="text-base font-bold text-slate-950 mb-3">
                            8. Legal & Corporate Inquiries
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
