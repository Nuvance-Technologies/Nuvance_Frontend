"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/ui/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/ui/Footer';
import TextBox from '@/components/ui/ConnectBtn';
import Button from '@/components/ui/ServiceButton';
import GetInTouchModal from '@/components/modals/GetInTouch';

interface Project {
    id: number;
    title: string;
    description: string;
    testimonial: string;
    videoUrl: string;
    websiteUrl: string;
    createdAt: string;
}

export default function Portfolio() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_PORTFOLIO_BACKEND_URL}/api/v1/portfolio`);
                setProjects(response.data);
            } catch (err) {
                setError('Something is Up with the Server!. Please try again later.');
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="relative min-h-screen bg-mainBgColor overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                    className="absolute animate-pulse bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-300/80 blur-[80px] md:blur-[150px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute animate-pulse top-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/40 blur-[60px] md:blur-[120px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2.4 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute animate-pulse top-1/2 left-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-red-500/40 blur-[50px] md:blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />

                <div className="flex mt-10 flex-col cursor-pointer items-center justify-center px-4 py-12 transition-all duration-300">
                    <div className="text-center hover:-translate-y-1 transition-all duration-500 font-extrabold text-gray-800 text-2xl md:text-4xl lg:text-5xl tracking-tight leading-snug animate-fade-in-up">
                        Innovating the Future with <span className="text-blue-600">Technology</span>
                    </div>

                    <div className="mt-3 text-center font-semibold text-black text-lg md:text-2xl lg:text-3xl max-w-4xl animate-fade-in-up delay-150">
                        Crafting world-class digital solutions with
                        <span className="text-blue-600 animate-pulse"> passion</span>,
                        <span className="text-blue-600 animate-pulse"> precision</span>, and
                        <span className="text-blue-600 animate-pulse"> purpose</span>.
                    </div>
                </div>

                <div>
                    <TextBox text='View More Work' />
                </div>
                {/* Loading State - Replace this with your Loader component */}
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-10 text-red-500 font-medium">
                        {error}
                    </div>
                )}

                {/* Projects List */}
                <div className="py-10 space-y-25">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                        >
                            {/* Video - Left/Right Alternating */}
                            <div className="w-full md:w-1/2">
                                <video
                                    controls
                                    className="w-full rounded-lg shadow-xl"
                                // poster={`${project.videoUrl}?thumbnail=1`}
                                >
                                    <source src={project.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Project Details - Right/Left Alternating */}
                            <div className="w-full md:w-1/2 cursor-pointer space-y-4">
                                <h2 className="text-2xl text-center md:text-left md:text-3xl font-bold text-gray-800">
                                    {project.title}
                                </h2>

                                <p className="text-gray-600 md:text-left text-center font-bold">
                                    {project.description}
                                </p>

                                <blockquote className="p-4 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                                    <p className="italic text-gray-700">&quot;{project.testimonial}&quot;</p>
                                </blockquote>

                                <div className="pt-4 flex justify-center md:justify-center">
                                    <Link
                                        href={project.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testiminoial Section */}
            <div className=" py-16 px-4 md:px-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
                    💬 Testimonials
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 md:p-8 cursor-pointer transition hover:-translate-y-2 duration-300 hover:shadow-xl">
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                            “Nuvance transformed our vision into a stunning digital product. Highly recommended.”
                        </p>
                        <div className="mt-4 text-right">
                            <span className="text-base font-semibold text-gray-900 dark:text-white">— CEO, HealthTech Co.</span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 md:p-8 transition cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-xl">
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                            “Their attention to detail and design elevated our school’s online presence.”
                        </p>
                        <div className="mt-4 text-right">
                            <span className="text-base font-semibold text-gray-900 dark:text-white">— Principal, St. Joseph School</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call of action */}

            <div className="mt-10 text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
                    📞 Let’s Work Together
                </h3>
                <p className="text-lg md:text-xl font-bold text-black mb-6">
                    Have a project in mind? Let’s build it together.
                </p>

                <Button label="Get In Touch" onClick={() => setIsModalOpen(true)} />

            </div>

            <GetInTouchModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    );
}