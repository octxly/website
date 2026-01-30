"use client"

import {useState} from "react";
import {IoTerminal} from "react-icons/io5";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {FaFolder} from "react-icons/fa";
import cntl from "cntl";
import {useRouter} from "next/navigation";

export default function ActivityBar({children}: {children: any}) {
    const [browserOpen, setBrowserOpen] = useState(true)

    const containerStyles = cntl`m-1 rounded p-1 hover:bg-bgprimary`
    const iconStyles = cntl`aspect-square size-5.5`

    const router = useRouter()

    return <div className="flex">
        <nav className="flex flex-col w-10 bg-bgsecondary text-textprimary justify-between">
            <div className="flex flex-col">
                <button className={`${containerStyles} ${browserOpen ? "bg-bgprimary" : ""}`} onClick={() => setBrowserOpen(!browserOpen)}><FaFolder className={iconStyles}/></button>

                <button className={`${containerStyles}`}><IoTerminal className={iconStyles}/></button>
            </div>

            <div className="flex flex-col">
                <button className={`${containerStyles}`} onClick={()=> router.push("https://github.com/")}><BsGithub className={iconStyles}/></button>
                <button className={`${containerStyles}`} onClick={() => router.push("https://www.linkedin.com/in/julian-rees-6120462ba")}><BsLinkedin className={iconStyles}/></button>
            </div>
        </nav>

        <div className={`flex-1 ${browserOpen ? "visible" : "hidden"}`}>
            {children}
        </div>
    </div>
}