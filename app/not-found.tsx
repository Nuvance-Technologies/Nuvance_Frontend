"use client";
import { Button } from "@/components/ui/Button";
import NotFound from "@/components/ui/NotFound";
import { Redirect } from "@/icons/others/Redirect";
import { useRouter } from "next/navigation";

export default function Notfound() {

    const router = useRouter(); 

    return (
        <div className="h-screen">

            <div className="flex justify-center">
                <NotFound/>
            </div>

            <div className="flex justify-center">
                <Button text="HOME" variant="blue_variant" endIcon={<Redirect/>} onClick={() => router.push("/")} />
            </div>
        </div>
    )
}