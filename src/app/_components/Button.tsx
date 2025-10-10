import {Route} from "next";
import Link from "next/link";

type ButtonProps = { text: string; href: Route}

export default function Button({text, href} : ButtonProps) {
    return (
        <Link href={href} className="inline-flex w-fit mt-5 text-textquaternary duration-250 bg-bgsecondary/50 hover:bg-bgsecondary border-bgsecondary border-3 p-2 rounded-2xl">{text}</Link>
    )
}