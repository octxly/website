"use client"

import {useState} from "react";
import {IoTerminal} from "react-icons/io5";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {FaFolder} from "react-icons/fa";
import cntl from "cntl";
import {useRouter} from "next/navigation";

export default function ActivityBar({children}: {children: any}) {
    const [browserOpen, setBrowserOpen] = useState(true)

    const containerStyles = cntl`m-1 rounded p-1 hover:bg-base-100`
    const iconStyles = cntl`aspect-square size-5.5`

    const router = useRouter()

    return <div className="relative flex">
        <nav className="flex flex-col w-10 bg-base-300 text-content-main justify-between">
            <div className="flex flex-col">
                <button className={`${containerStyles} ${browserOpen ? "bg-base-100" : ""}`} onClick={() => setBrowserOpen(!browserOpen)}><FaFolder className={iconStyles}/></button>

                <button className={`${containerStyles}`}><IoTerminal className={iconStyles}/></button>
            </div>

            <div className="flex flex-col">
                <button className={`${containerStyles}`} onClick={()=> router.push("https://github.com/")}><BsGithub className={iconStyles}/></button>
                <button className={`${containerStyles}`} onClick={() => router.push("https://www.linkedin.com/in/julian-rees-6120462ba")}><BsLinkedin className={iconStyles}/></button>
            </div>
        </nav>

        <div className={`flex-1 ${browserOpen ? "visible" : "hidden"} absolute md:static h-full z-20 top-0 left-10`}>
            {children}
        </div>
    </div>
}