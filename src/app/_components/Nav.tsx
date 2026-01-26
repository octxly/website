'use client'

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
        <nav className="w-full sticky top-0 flex justify-center sm:justify-between bg-bgsecondary sm:px-[20vw] py-2.5 z-100">
            <h1 className="hidden sm:flex shrink items-center text-xl font-bold text-textprimary"><Link href="/">Julian Rees</Link></h1>
            <div className="flex items-center justify-center gap-2.5">
                <NavLink href="/" text="Home" />
                <NavLink href="/projects" text="Projects" />
                <NavLink href="/about" text="About" />
            </div>
        </nav>
    );
}