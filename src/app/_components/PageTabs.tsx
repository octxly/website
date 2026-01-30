"use client"

import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function PageTabs() {
    const [openTabs, setOpenTabs] = useState<string[]>([])
    const [pendingNav, setPendingNav] = useState<string | null>(null)

    const url = usePathname()
    const suppressNextAdd = useRef(false)
    const router = useRouter()

    useEffect(() => {
        if (suppressNextAdd.current) {
            suppressNextAdd.current = false
            return
        }

        if (!openTabs.includes(url) && url != "/") {
            setOpenTabs(tabs => [...tabs, url])
        }
    }, [url])

    useEffect(() => {
        if (pendingNav) {
            router.push(pendingNav)
            setPendingNav(null)
        }
    }, [pendingNav]);

    const onClose = (href: string) => {
        setOpenTabs(tabs => {
            const nextTabs = tabs.filter(e => e != href)

            if (href == url) {
                suppressNextAdd.current = true
                setPendingNav(nextTabs.at(-1) ?? "/")
            }

            return nextTabs
        })
    }

    return <nav className="h-10 bg-bgtertiary flex  z-40">
        {
            openTabs.map((url, index) => <Tab href={url} key={index} onClose={onClose} />)
        }
    </nav>
}

function Tab({ href, onClose }: { href: string, onClose(href: string): void}) {
    const isActive = usePathname() == href

    return <Link href={href} className={`pl-2.5 ${isActive ? "bg-bgprimary border-t-3 border-t-primary" : "bg-bgsecondary border-t-3 border-t-bgsecondary"} text-textprimary flex items-center mr-2.5`}>
        {href.split("/").at(-1)}
        <button className={`mx-1 w-5 rounded aspect-square ${isActive ? "hover:bg-bgsecondary" : "hover:bg-bgprimary"}`} onClick={e => {e.preventDefault(); onClose(href)}}>x</button>
    </Link>
}