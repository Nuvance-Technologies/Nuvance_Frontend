"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from 'next/image';
import "@/app/globals.css";
import React from "react";

export default function AboutUs() {
    return (
        <div className="h-screen bg-mainBgColor">
            <Navbar />
            <div className="text-center mt-20">
                <div className="min-h-screen bg-[#e9f0fb] flex flex-col items-center px-4 py-12">
                    <h1 className="box text-4xl font-bold text-[#0c1e5b] mb-6">About us</h1>
                    <p className="paragraph-glow text-center max-w-3xl text-gray-700 mb-10 leading-relaxed">
                        {"At Nuvance Technologies, we are committed to driving innovation and delivering cutting-edge solutions that empower businesses to thrive in a digital era. Our mission is to create transformative technology that simplifies operations and enhances efficiency for our clients. Guided by a vision to build a sustainable and interconnected future, we aim to redefine possibilities through collaboration, creativity, and integrity."
                            .split(" ")
                            .map((word, i, arr) => (
                                <React.Fragment key={i}>
                                    <span className="word-glow">{word}</span>
                                    {i !== arr.length - 1 && " "}
                                </React.Fragment>
                            ))}
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-lg max-w-5xl w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
                        <Image
                            src="/aboutus1.png"
                            alt="Team working together"
                            width={1200}
                            height={700}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-20">
                            <Footer />
                        </div>
        </div>
    );
}
