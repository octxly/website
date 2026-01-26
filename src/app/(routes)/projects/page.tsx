import Image from "next/image";
import {indexes} from "@/app/_projects/indexes";
import ProjectCard from "@/app/_components/ProjectCard";

export default function ProjectsPage() {
    return (
        <>
            <header className="flex flex-col items-start justify-between">
                <h2 className="text-textsecondary text-3xl">Projects</h2>
                <p className="text-textprimary text-lg">
                    All of the projects that I've done and catalogued.
                </p>
            </header>
            <hr className="m-5 border-2"/>
            <section className="flex gap-5">
                {indexes.map((project, index) => {
                    return <ProjectCard key={index} project={project}/>
                })}
            </section>
        </>
    )
}