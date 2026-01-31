import {Route} from "next";
import Link from "next/link";

type ButtonProps = { text: string; href: Route}

export default function ButtonLink({text, href} : ButtonProps) {
    return (
        <Link href={href} className="inline-flex text-content-accent transition-colors duration-150 bg-base-300/50 hover:bg-base-300 border-base-300 border-3 p-2 rounded-xl">{text}</Link>
    )
}