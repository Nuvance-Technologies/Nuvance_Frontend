import { ReactNode } from "react";

export const metadata = {
    title: "Our Portfolio | Nuvance Technologies",
    description: "Explore the portfolio of Nuvance Technologies. Discover our past projects in web development, app development, AI/ML, cloud solutions, and more."
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}