"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative cursor-pointer inline-block px-8 py-3 font-bold text-white bg-blue-400 border border-black rounded hover:bg-white hover:text-black transition-transform duration-200 ease-in-out active:translate-x-0 active:translate-y-0 active:shadow-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
    >
      {label}
    </button>
  );
};

export default Button;
