'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import cntl from "cntl";


type NavLinkProps = { href: string; text: string; }

function NavLink({ href, text }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    const base = cntl`
        px-5 
        py-1 
        rounded-md  
        duration-300
        border-2
        border-bgprimary
        text-textprimary
    `

    const active = cntl`
        bg-bgprimary 
    `

    const inactive = cntl`
        hover:bg-bgprimary/50
    `

    return (
        <Link
            href={href}
            className={`${base} ${isActive ? active : inactive}`}
        >
            {text}
        </Link>
    );
}

export default function Nav() {
    return (
        <nav className="w-full sticky top-0 flex justify-between bg-gradient-to-b from-bgsecondary to-bgsecondary/25 hover:to-bgsecondary/50 transition duration-250 px-[20vw]">
            <h1 className="w-1/4 flex items-center text-lg font-bold text-textprimary">Julian Rees</h1>
            <ul className="flex items-center justify-center gap-2.5 p-4">
                <li>
                    <NavLink href="/" text="Home" />
                </li>
                <li>
                    <NavLink href="/projects" text="Projects" />
                </li>
                <li>
                    <NavLink href="/contact" text="Contact" />
                </li>
            </ul>
        </nav>
    );
}