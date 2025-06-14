'use client';
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function TermsAndConditionsPage() {
    return (
        <div className="bg-mainBgColor px-4 py-8 ">
            <Navbar />
            <div className="mt-10 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="px-6 py-8 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">Terms and Conditions</h1>
                    <div className="text-center text-gray-600 space-y-1">
                        <p>
                            <strong>Effective Date:</strong> June 14, 2025
                        </p>
                        <p>
                            <strong>Last Updated:</strong> June 14, 2025
                        </p>
                    </div>
                </div>

                <div className="px-6 py-8 space-y-8">
                    <div className="prose prose-gray max-w-none">
                        <p className="text-lg text-center leading-relaxed text-gray-700">
                            Welcome to Nuvance Technologies (referred to as &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions
                            (&quot;Terms&quot;) govern your access to and use of the website{" "}
                            <a href="https://nuvancetechnologies.com" className="text-blue-600 hover:underline font-medium">
                                https://nuvancetechnologies.com
                            </a>{" "}
                            (the &quot;Site&quot;) and any services provided by us. By accessing or using our Site or services, you agree to be
                            bound by these Terms. If you do not agree, please do not use our services.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Company Information</h2>
                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <strong>Nuvance Technologies</strong>
                                </p>
                                <p>
                                    <strong>Headquarters:</strong> Jabalpur, Madhya Pradesh, India
                                </p>
                                <p>
                                    <strong>Email:</strong>{" "}
                                    <a
                                        href="mailto:contact@nuvancetechnologies.com"
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        contact@nuvancetechnologies.com
                                    </a>
                                </p>
                                <p>
                                    <strong>Phone:</strong>{" "}
                                    <a href="tel:+917219638172" className="text-blue-600 hover:underline font-medium">
                                        +91 7219638172
                                    </a>
                                    ,{" "}
                                    <a href="tel:+919109461901" className="text-blue-600 hover:underline font-medium">
                                        +91 9109461901
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Scope of Services</h2>
                            <p className="mb-3 text-gray-700">We offer a range of digital solutions, including:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li>Web & Mobile App Development</li>
                                <li>E‑commerce Development</li>
                                <li>Odoo Development</li>
                                <li>Cloud & WordPress Services</li>
                                <li>AI/ML & Work Automation</li>
                                <li>Custom Software & SEO Integration</li>
                            </ul>
                            <p className="mt-4 text-gray-700">
                                All services are delivered under separate project proposals and agreements.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Website Use</h2>
                            <p className="mb-3 text-gray-700">
                                You agree to use the Site only for lawful purposes. Prohibited activities include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li>Uploading malicious code or spam</li>
                                <li>Unauthorized access to other networks or systems</li>
                                <li>Infringement of intellectual property rights</li>
                            </ul>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Intellectual Property</h2>
                            <p className="text-gray-700">
                                All content on the Site—logos, design, text, graphics, code—are the intellectual property of Nuvance
                                Technologies unless stated otherwise. Unauthorized use is strictly prohibited.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Confidentiality & Privacy</h2>
                            <p className="text-gray-700">
                                Any data shared with us through projects or Site contact forms will be treated as confidential, in
                                accordance with our{" "}
                                <a href="#" className="text-blue-600 hover:underline font-medium">
                                    Privacy Policy
                                </a>{" "}
                                and project-specific NDAs (if applicable).
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Payments & Invoicing</h2>
                            <p className="text-gray-700">
                                Payments must be made as per the proposal or invoice terms. Late payments may incur additional charges
                                or cause service delays. Project timelines begin upon receipt of the initial payment as outlined in
                                project milestones.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Limitation of Liability</h2>
                            <p className="text-gray-700">
                                Nuvance Technologies will not be liable for indirect, incidental, or consequential damages arising from
                                use of our services or the Site. We do not guarantee error-free or uninterrupted access.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Termination</h2>
                            <p className="text-gray-700">
                                We reserve the right to suspend or terminate access to the Site or any services at our discretion—such
                                as in cases of violations of these Terms—without notice.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Modifications to Terms</h2>
                            <p className="text-gray-700">
                                We may update these Terms at any time. Continued use of the Site or services after changes are posted
                                indicates acceptance of the revised Terms.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Governing Law & Dispute Resolution</h2>
                            <p className="text-gray-700">
                                These Terms are governed by the laws of India, with any disputes subject to the exclusive jurisdiction
                                of the courts in Jabalpur, Madhya Pradesh.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Contact Us</h2>
                            <p className="mb-4 text-gray-700">
                                If you have any questions or concerns about these Terms, please reach out to us:
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <strong>Email:</strong>{" "}
                                    <a
                                        href="mailto:contact@nuvancetechnologies.com"
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        contact@nuvancetechnologies.com
                                    </a>
                                </p>
                                <p>
                                    <strong>Phone:</strong>{" "}
                                    <a href="tel:+917219638172" className="text-blue-600 hover:underline font-medium">
                                        +91 7219638172
                                    </a>
                                    ,{" "}
                                    <a href="tel:+919109461901" className="text-blue-600 hover:underline font-medium">
                                        +91 9109461901
                                    </a>
                                </p>
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-600">
                                    By using our Site or services, you acknowledge that you have read, understood and agreed to these
                                    Terms.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
