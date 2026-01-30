'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GetStarted() {
    const router = useRouter();

    useEffect(() => {
        const referer = document.referrer;
        const host = window.location.host;

        // If there's no referer, it's a direct entry (external)
        // If there's a referer, check if it's from our own domain
        if (!referer || !referer.includes(host)) {
            router.replace("/home");
        }
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-4">You are currently at the root route.</p>
            <p className="mt-2">
                Visit <a href="/home" className="text-blue-500 underline">Home</a> to see the main content.
            </p>
        </div>
    );
}