"use client"

import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {FaFolder} from "react-icons/fa";
import {BsTextLeft} from "react-icons/bs";
import {IoCodeSlash} from "react-icons/io5";
import {getHomeTree} from "@/app/(routes)/home/page";
import {getAboutTree} from "@/app/(routes)/about/page";
import {getProjectsTree} from "@/app/(routes)/projects/page";

export enum NodeType {
    Page, Section, Folder
}

export type FileTreeNode = {
    type: NodeType,
    name: string,
    href: string,
    children: FileTreeNode[]
}

const fileTree: FileTreeNode = {
    type: NodeType.Folder,
    name: "julianrees.ca",
    href: "/",
    children: [
        getHomeTree(),
        getProjectsTree(),
        {
            type: NodeType.Page,
            name: "resume",
            href: "/resume",
            children: []
        },
        getAboutTree()
    ]
}

export default function SidebarBrowser() {
    return <nav className="h-full w-75 bg-base-200 resize-x flex flex-col text-content-main overflow-y-auto overflow-x-hidden border-r-5 border-base-300">
        <TreeNode node={fileTree} nodeDepth={0} defaultOpen/>
    </nav>
}

function TreeNode({ node, nodeDepth, defaultOpen } : { node: FileTreeNode, nodeDepth: number, defaultOpen:boolean }) {
    const [open, setOpen] = useState(defaultOpen);

    const isActive = usePathname() == node.href && node.type != NodeType.Folder;

    return <div>
        <Link href={node.href} style={{paddingLeft: `${(nodeDepth * 1) + (node.children.length == 0 ? 1.5 : 0)}rem`}} className={`flex items-center p-0.5 hover:bg-base-300 ${isActive ? "bg-base-100" : ""}`}>
            {
                node.children.length > 0 ?
                    <button className="w-6 aspect-square hover:bg-base-100 rounded-sm min-h-full" onClick={e => {e.preventDefault(); setOpen(!open)}}>
                        <div className={`transition-transform duration-100 rotate-270 ${open ? "" : "-scale-x-100"}`}>&lt;</div>
                    </button>
                    : null
            }
            <div className="w-5">{FileIcon(node.type)}</div>
            {node.name}
        </Link>
        <div className={`${open ? "visible" : "hidden"}`}>
            {
                node.children.map((child, index) => <TreeNode key={index} node={child} nodeDepth={nodeDepth + 1} defaultOpen={child.children.filter(e => e.type != NodeType.Section).length > 0}/>)
            }
        </div>
    </div>
}

function FileIcon(type: NodeType) {
    switch (type) {
        case NodeType.Folder: return <FaFolder />
        case NodeType.Page: return <IoCodeSlash className="text-content-minor" />
        case NodeType.Section: return <BsTextLeft className="text-content-major" />
    }
}