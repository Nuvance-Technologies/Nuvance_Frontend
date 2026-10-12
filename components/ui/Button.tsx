import { ReactElement, ReactNode } from "react";

const buttonVariants = {
    general_1: "bg-white text-slate-900 border border-slate-300 font-medium px-4 py-2 rounded-md hover:bg-slate-100 hover:border-slate-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200",
    general_2: "bg-slate-900 text-white font-medium px-4 py-2 rounded-md hover:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200",
    blue_variant: "bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200",
    red_variant: "bg-red-700 text-white font-medium px-4 py-2 rounded-md hover:bg-red-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200",
    purple_variant: "bg-slate-800 text-white font-medium px-4 py-2 rounded-md hover:bg-slate-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200",
    green_variant: "bg-emerald-700 text-white font-medium px-4 py-2 rounded-md hover:bg-emerald-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
};

const defaultButtonStyles = "cursor-pointer inline-flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed";

interface ButtonProps {
    variant?: "general_1" | "general_2" | "blue_variant" | "red_variant" | "purple_variant" | "green_variant";
    text?: string;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    startIcon?: ReactElement;
    endIcon?: ReactElement | null;
    type?: "button" | "submit" | "reset";
}

export const Button = ({
    variant = "general_2",
    text,
    children,
    disabled = false,
    className = "",
    onClick,
    startIcon,
    endIcon,
    type = "button"
}: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${buttonVariants[variant]} ${defaultButtonStyles} ${className}`}
            onClick={onClick}
        >
            {startIcon && <span className="mr-2 inline-flex items-center">{startIcon}</span>}
            <span>{text || children}</span>
            {endIcon && <span className="ml-2 inline-flex items-center">{endIcon}</span>}
        </button>
    );
};
