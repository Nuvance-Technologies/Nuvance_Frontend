"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
    children: React.ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % children.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            <div className="relative h-full flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, { offset, velocity }) => {
                            const swipe = Math.abs(offset.x) * velocity.x;
                            if (swipe < -100 || offset.x < -60) {
                                next();
                            } else if (swipe > 100 || offset.x > 60) {
                                prev();
                            }
                        }}
                        className="flex justify-center w-full cursor-grab active:cursor-grabbing"
                    >
                        {children[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-3 mt-6">
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous slide"
                    className="p-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer shadow-2xs active:scale-95"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-medium text-slate-600 px-3 bg-white py-1 rounded-full border border-slate-200">
                    {currentIndex + 1} / {children.length}
                </span>
                <button
                    type="button"
                    onClick={next}
                    aria-label="Next slide"
                    className="p-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer shadow-2xs active:scale-95"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
            <p className="text-center text-[11px] text-slate-400 mt-2">
                Swipe left or right to switch services
            </p>
        </div>
    );
};
