'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import cntl from "cntl";

interface NavLinkProps {
    href: string;
    text: string;
}

function NavLink({ href, text }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    const base = cntl`
        px-5 
        py-1 
        rounded-md 
        text-m 
        transition-colors 
        duration-300
    `

    const active = cntl`
        bg-bgprimary 
    `

    const inactive = cntl`
        hover:bg-bgprimary/25`

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
        <nav className="w-full sticky top-0 z-50 bg-gradient-to-b from-bgsecondary to-bgsecondary/25 hover:to-bgsecondary/50 transition duration-500">
            <ul className="max-w-5xl mx-auto flex items-center justify-center gap-2.5 p-4">
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