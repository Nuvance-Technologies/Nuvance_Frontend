import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";

// Safe server-side localStorage shim for Node 22/25 experimental localStorage bug
if (typeof globalThis !== "undefined" && typeof (globalThis as unknown as { localStorage?: unknown }).localStorage !== "undefined") {
    const storage = (globalThis as unknown as { localStorage: Record<string, unknown> }).localStorage;
    if (typeof storage.getItem !== "function") {
        (globalThis as unknown as { localStorage: unknown }).localStorage = {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
            clear: () => {},
            key: () => null,
            length: 0
        };
    }
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL("https://nuvancetechnologies.com"),
    title: "Nuvance Technologies | Your success, our software.",
    description: "Nuvance Technologies — Your success, our software. We provide full-cycle software engineering, custom IT solutions, cloud architecture, and high-performance digital platforms.",
    keywords: [
        "Nuvance Technologies",
        "Your success, our software",
        "Software Engineering",
        "IT Solutions",
        "Your Tech Partner",
        "Software Engineering Consultancy",
        "Web Application Development",
        "Custom Software Development",
        "Mobile App Development",
        "Cloud Solutions",
        "Enterprise IT Services"
    ],
    openGraph: {
        title: "Nuvance Technologies | Your success, our software.",
        description: "Nuvance Technologies — Your success, our software. High-performance software engineering, web and mobile platforms, and enterprise cloud solutions.",
        url: "https://nuvancetechnologies.com",
        siteName: "Nuvance Technologies",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png" },
            { url: "/NuvanceLogo.png", type: "image/png" }
        ],
        apple: "/favicon.png",
        shortcut: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
            >
                <div className="flex-1 flex flex-col">
                    {children}
                </div>
                <CookieConsent />
            </body>
        </html>
    );
}
