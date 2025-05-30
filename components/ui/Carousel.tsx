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
      

      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prev}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};
