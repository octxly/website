import Image from "next/image";
import Link from "next/link";
import Project from "@/app/_projects/project";

export default function ProjectCard(props : {project: Project}) {
    return (
        <article className="flex flex-col max-w-50 bg-bgsecondary rounded-2xl overflow-hidden">
            <Image src={props.project.featureImgSrc} width={500} height={200} alt={props.project.featureImgAlt} objectFit="contain"/>
            <div className="flex flex-col text-textprimary p-2.5">
                <h1 className="text-textsecondary text-lg">{props.project.title}</h1>
                <p className="text-textprimary text-sm">{props.project.description}</p>
                <Link href={"/projects/" + props.project.link} className="text-texttertiary mt-2.5 rounded-2xl bg-bgprimary/50 p-2.5 duration-250 hover:bg-bgprimary border-bgprimary border-3">Go</Link>
            </div>
        </article>
    )
}