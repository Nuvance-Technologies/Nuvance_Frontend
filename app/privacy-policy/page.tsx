"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-mainBgColor px-4 py-8">
            <Navbar/>
            <div className="bg-white rounded-lg shadow-lg border mt-10 border-gray-200">
                <div className="px-6 py-8 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">Privacy Policy</h1>
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
                        <p className="text-lg leading-relaxed text-gray-700">
                            At Nuvance Technologies, your privacy is a priority. This Privacy Policy outlines how we collect, use,
                            disclose, and safeguard your information when you visit our website{" "}
                            <a href="https://nuvancetechnologies.com" className="text-blue-600 hover:underline font-medium">
                                https://nuvancetechnologies.com
                            </a>{" "}
                            or engage with our services.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700">
                            By using our website or submitting your personal information, you consent to the practices described in
                            this policy.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-gray-800">a) Personal Information</h3>
                                    <p className="mb-3 text-gray-700">Provided voluntarily through contact forms or service inquiries:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Company/Organization name</li>
                                        <li>Project requirements</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-gray-800">b) Technical Information</h3>
                                    <p className="mb-3 text-gray-700">Automatically collected via cookies and analytics tools:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                        <li>IP address</li>
                                        <li>Browser type</li>
                                        <li>Device information</li>
                                        <li>Pages visited</li>
                                        <li>Time spent on site</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
                            <p className="mb-3 text-gray-700">We use your information to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li>Respond to your queries or project requests</li>
                                <li>Provide, operate, and maintain our services</li>
                                <li>Improve website performance and user experience</li>
                                <li>Send service-related updates or promotional emails (you may opt-out at any time)</li>
                                <li>Ensure data security and prevent fraud</li>
                            </ul>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Sharing and Disclosure</h2>
                            <p className="mb-3 text-gray-700">
                                We do not sell or rent your personal data. Your information may be shared with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li>Our internal team for project purposes</li>
                                <li>Third-party tools (e.g., CRM, analytics, or payment gateways) only where necessary</li>
                                <li>Legal authorities if required by law or to enforce our terms</li>
                            </ul>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Retention</h2>
                            <p className="text-gray-700">
                                We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy
                                or to comply with legal obligations.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Your Rights</h2>
                            <p className="mb-3 text-gray-700">Depending on your location, you may have rights to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                <li>Access or update your personal data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to certain types of processing</li>
                                <li>Withdraw consent at any time (where processing is based on consent)</li>
                            </ul>
                            <p className="mt-4 text-gray-700">
                                To exercise any of these rights, contact us at{" "}
                                <a href="mailto:contact@nuvancetechnologies.com" className="text-blue-600 hover:underline font-medium">
                                    contact@nuvancetechnologies.com
                                </a>
                                .
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Cookies & Tracking Technologies</h2>
                            <p className="text-gray-700">
                                We use cookies to enhance your experience, monitor performance, and improve our services. You may choose
                                to disable cookies via your browser settings.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Data Security</h2>
                            <p className="text-gray-700">
                                We implement appropriate technical and organizational measures to protect your personal data from
                                unauthorized access, alteration, or destruction. However, no method of transmission over the internet is
                                100% secure.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. External Links</h2>
                            <p className="text-gray-700">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                                of those sites.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700">
                                We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised
                                effective date. Continued use of the website indicates acceptance of the updated policy.
                            </p>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Contact Us</h2>
                            <p className="mb-4 text-gray-700">
                                If you have any questions or concerns about this Privacy Policy, feel free to contact us:
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
                                <p>
                                    <strong>Website:</strong>{" "}
                                    <a href="https://nuvancetechnologies.com" className="text-blue-600 hover:underline font-medium">
                                        https://nuvancetechnologies.com
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
