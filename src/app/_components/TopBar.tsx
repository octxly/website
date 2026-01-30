'use client'

import {useRouter} from "next/navigation";
import cntl from "cntl";
import Image from "next/image";

export default function TopBar(){
    const router = useRouter()

    const btnStyles = cntl`block w-7.5 hover:bg-bgprimary rounded`

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <nav className="w-full h-12 flex bg-bgsecondary p-2.5 z-50 justify-between items-center">
            <div className="flex">
                <Image src="/favicon.ico" alt="Icon" width={25} height={0}/>
                <h1 className="ml-5 text-textprimary"><b>Julian Rees's Website</b></h1>
            </div>
            <div className="flex text-textprimary gap-2.5 font-bold">
                <button className={btnStyles} onClick={() => router.push("/")}>-</button>
                <button className={btnStyles} onClick={toggleFullscreen}>o</button>
                <button className={btnStyles} onClick={() => window.location.href = "/"}>x</button>
            </div>
        </nav>
    );
}