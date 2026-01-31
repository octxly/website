import Image from "next/image";
import {FileTreeNode, NodeType} from "@/app/_components/SidebarBrowser";

export default function ContactPage() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center gap-10" id="about-me">
                <figure className="flex">
                    <Image src="https://picsum.photos/300/300" alt="picture of me" width={350} height={0}/>
                </figure>
                <article className="flex flex-col">
                    <h2 className="text-content-major text-3xl">Something About Me</h2>
                    <p className="text-content-main text-lg">
                        I'm a honours computer science major currently studying at Carleton University.<br/>
                        This website is where I'm cataloguing all of the projects and stuff I make.
                    </p>
                </article>
            </section>

            <h2 className="mt-5 text-content-major text-3xl" id="socials">My Socials</h2>
            <article className="flex gap-5">
                <div className="text-content-minor">
                    <p>Email</p>
                    <p>Github</p>
                </div>
                <div className="text-content-accent">
                    <p>julianrees11234@gmail.com</p>
                    <p>octxly</p>
                </div>
            </article>
        </>
    )
}

export function getAboutTree(): FileTreeNode {
    return {
        type: NodeType.Page,
        name: "about",
        href: "/about",
        children: [
            {
                type: NodeType.Section,
                name: "something about me",
                href: "/about#about-me",
                children: []
            },
            {
                type: NodeType.Section,
                name: "socials",
                href: "/about#socials",
                children: []
            }
        ]
    }
}