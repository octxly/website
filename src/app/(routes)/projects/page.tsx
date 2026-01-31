import {indexes} from "@/app/_projects/indexes";
import ProjectCard from "@/app/_components/ProjectCard";
import {FileTreeNode, NodeType} from "@/app/_components/SidebarBrowser";

export default function ProjectsPage() {
    return (
        <>
            <header className="flex flex-col items-start justify-between" id="intro">
                <h2 className="text-content-major text-3xl">Projects</h2>
                <p className="text-content-main text-lg">
                    All of the projects that I've done and catalogued.
                </p>
            </header>
            <hr className="m-5 border-2"/>
            <section className="flex gap-5" id="display">
                {indexes.map((project, index) => {
                    return <ProjectCard key={index} project={project}/>
                })}
            </section>
        </>
    )
}

export function getProjectsTree(): FileTreeNode {
    return {
        type: NodeType.Page,
        name: "projects",
        href: "/projects",
        children: [
            {
                type: NodeType.Section,
                name: "intro",
                href: "/projects#intro",
                children: []
            },
            {
                type: NodeType.Folder,
                name: "projects",
                href: "/projects#display",
                children: indexes.map(project => {
                    return {
                        type: NodeType.Page,
                        name: project.link,
                        href: "/projects/" + project.link,
                        children: []
                    }
                })
            }
        ]
    }
}