"use client"

import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

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
        {
            type: NodeType.Page,
            name: "home",
            href: "/home",
            children: []
        },
        {
            type: NodeType.Page,
            name: "projects",
            href: "/projects",
            children: [
                {
                    type: NodeType.Page,
                    name: "tank",
                    href: "/projects/tank",
                    children: [
                        {
                            type: NodeType.Section,
                            name: "home section",
                            href: "/projects/tank#1",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            type: NodeType.Page,
            name: "resume",
            href: "/resume",
            children: []
        },
        {
            type: NodeType.Page,
            name: "about",
            href: "/about",
            children: []
        }
    ]
}

export default function SidebarBrowser() {
    return <nav className="w-75 bg-bgtertiary resize-x flex flex-col text-textprimary">
        <TreeNode node={fileTree} nodeDepth={0} />
    </nav>
}

function TreeNode({ node, nodeDepth } : { node: FileTreeNode, nodeDepth: number}) {
    const [open, setOpen] = useState(true);

    const isActive = usePathname() == node.href && node.type != NodeType.Folder;

    return <div>
        <Link href={node.href} style={{paddingLeft: `${nodeDepth * 1.5}rem`}} className={`block p-0.5 hover:bg-bgsecondary ${isActive ? "bg-bgprimary" : ""}`}>
            {
                node.type != NodeType.Section && node.children.length > 0 ?
                    <button className={`mr-1 hover:bg-bgprimary rounded-sm px-1 min-h-full`} onClick={e => {e.preventDefault(); setOpen(!open)}}>
                        <div className={`transition-transform duration-100 rotate-270 ${open ? "" : "-scale-x-100"}`}>&lt;</div>
                    </button>
                    : null
            }
            {node.name}
        </Link>
        <div className={`${open ? "visible" : "hidden"}`}>
            {
                node.children.map((child, index) => <TreeNode key={index} node={child} nodeDepth={nodeDepth + 1}/>)
            }
        </div>
    </div>
}