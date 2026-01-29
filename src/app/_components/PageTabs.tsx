"use client"

import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {redirect, usePathname, useRouter} from "next/navigation";

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

    return <nav className="min-h-10 bg-bgtertiary flex">
        {
            openTabs.map((url, index) => <Tab href={url} key={index} onClose={onClose} />)
        }
    </nav>
}

function Tab({ href, onClose }: { href: string, onClose(href: string): void}) {
    const isActive = usePathname() == href

    return <Link href={href} className={`pl-2.5 ${isActive ? "bg-bgprimary" : "bg-bgsecondary"} text-textprimary flex items-center mr-2.5`}>
        {href}
        <button className="mx-2.5 hover:bg-bgprimary" onClick={e => {e.preventDefault(); onClose(href)}}>x</button>
    </Link>
}