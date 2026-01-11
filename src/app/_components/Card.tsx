import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/app/_components/ButtonLink";

type CardProps = {
    title: string
    desc: string
    imgSrc: string
    imgAlt: string
    btnLink: string
}

export default function Card({ title, desc, imgSrc, imgAlt, btnLink} : CardProps) {
    return (
        <article className="flex flex-col max-w-50 bg-bgsecondary rounded-2xl overflow-hidden">
            <Image src={imgSrc} width={500} height={200} alt={imgAlt} objectFit="contain"/>
            <div className="flex flex-col text-textprimary p-2.5">
                <h1 className="text-textsecondary text-lg">{title}</h1>
                <p className="text-textprimary text-sm">{desc}</p>
                <Link href={btnLink} className="text-texttertiary mt-2.5 rounded-2xl bg-bgprimary/50 p-2.5 duration-250 hover:bg-bgprimary border-bgprimary border-3">Go</Link>
            </div>
        </article>
    )
}