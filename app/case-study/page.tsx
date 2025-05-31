"use client";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import { Redirect } from "@/icons/others/Redirect";
import { useRouter } from "next/navigation";

export default function CaseStudyPage() {
    const router = useRouter();
    return (
        <div className="h-screen bg-mainBgColor">
            <Navbar />

            <div className="flex justify-center">
                <div className="mt-40">
                    <Button text="HOME" variant="blue_variant" endIcon={<Redirect />} onClick={() => router.push("/")} /> 
                </div>
            </div>
        </div>
    )
}