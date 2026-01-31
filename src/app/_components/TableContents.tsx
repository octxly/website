"use client"

import {useState} from "react";
import Link from "next/link";

export default function TableContents(props: { contents: ({title: string, id: string} | null)[] }) {
    const [open, setOpen] = useState(false);

    return <>
        <nav className="relative text-center bg-base-300 rounded-t-2xl sm:absolute sm:right-full sm:w-[20vw] sm:max-w-65" onClick={() => setOpen(!open)}>
            Table of Contents

            <nav className={`absolute rounded-b-2xl bg-base-200 object-cover flex flex-col w-full z-50 sm:text-left transition-opacity duration-150 sm:opacity-100 ${open ? "opacity-100" : "opacity-0"}`}>
                {props.contents.map((value, index) => {
                    if (value == null) return null

                    return <Link key={index} href={`#${value.id}`} className="transition-colors duration-75 hover:bg-base-300 px-2.5">
                        {value.title}
                    </Link>
                })}
            </nav>
        </nav>
    </>
}