'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import ButtonLink from "@/app/_components/ButtonLink";

export default function GetStarted() {
    const router = useRouter();

    useEffect(() => {
        const referer = document.referrer;
        const host = window.location.host;

        console.log(referer)

        if (!referer || !referer.includes(host)) {
            router.replace("/home");
        }
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-2 text-content-main">
            <h1 className="text-2xl text-content-major">Get Started</h1>
            <p>You are at the root route of this website.</p>
            <p>Select a website in the sidebar browser to get started.</p>
            <p>
                 <ButtonLink text="Go to home" href="/home" /> for main content
            </p>
        </div>
    );
}