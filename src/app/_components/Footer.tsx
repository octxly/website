"use client"

import {usePathname} from "next/navigation";

export default function Footer() {
    const url = usePathname()

    const pathSection = url.split("/").filter(e => e != "")

    return (
        <footer className="w-full sticky bottom-0 flex items-center justify-between bg-bgsecondary text-textprimary px-2.5 z-50">
            <div className="flex">
                {
                    pathSection.map((e, index) => {
                        return <p key={index} className="ml-2.5">&gt; {e}</p>
                    })
                }
            </div>
            <p>Updated January 2026</p>
        </footer>
    );
}