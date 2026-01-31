import Image from "next/image";
import Link from "next/link";
import Project from "@/app/_projects/project";

export default function ProjectCard(props : {project: Project}) {
    return (
        <article className="flex flex-col max-w-50 bg-base-300 rounded-2xl overflow-hidden">
            <Image src={props.project.featureImgSrc} width={500} height={200} alt={props.project.featureImgAlt} objectFit="contain"/>
            <div className="flex flex-col flex-1 text-content-main p-2.5">
                <h1 className="text-content-major text-lg">{props.project.title}</h1>
                <p className="flex-1 text-content-main text-sm">{props.project.description}</p>
                <Link href={"/projects/" + props.project.link} className="text-content-minor mt-2.5 rounded-2xl bg-base-100/50 p-2.5 duration-250 hover:bg-base-100 border-base-100 border-3">Go</Link>
            </div>
        </article>
    )
}