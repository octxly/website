import ButtonLink from "@/app/_components/ButtonLink";
import Image from "next/image";
import ProjectCard from "@/app/_components/ProjectCard";
import {featuredIndexes} from "@/app/_projects/indexes";

export default function Home() {
    return (
        <>
            <section className="flex flex-1 flex-col md:flex-row items-center justify-around gap-5">
                <article className="flex flex-col text-center items-center md:text-left md:items-start">
                    <h2 className="text-textprimary text-3xl">Hi, I&#39;m</h2>
                    <h1 className="text-textsecondary text-5xl">Julian Rees</h1>
                    <h2 className="text-textprimary text-3xl">Welcome to my website!</h2>
                    <p className="text-texttertiary text-xl">
                        I buid stuff I'm passionate about.
                    </p>
                    <ButtonLink text="Take a Look Around" href="/projects"/>
                </article>
                <figure className="flex">
                    <Image src="https://picsum.photos/200/300" alt="Portrait of me." width={250} height={0}/>
                </figure>
            </section>

            <hr className="m-5 border-2"/>

            <section className="flex flex-col">
                <h2 className="text-textsecondary text-3xl text-center">Take a Look</h2>
                <div className="flex justify-center gap-5">
                    {featuredIndexes.map((project, index) => {
                        return <ProjectCard project={project} key={index} />
                    })}
                </div>
            </section>
        </>
    );
}
