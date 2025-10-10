import Button from "@/app/_components/Button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="flex flex-1 items-center justify-around">
                <div className="flex flex-col">
                    <h2 className="text-textprimary text-3xl">Hi, I&#39;m</h2>
                    <h1 className="text-textsecondary text-5xl">Julian Rees</h1>
                    <h2 className="text-textprimary text-3xl">Welcome to my website!</h2>
                    <p className="text-texttertiary text-xl">
                        I build things using code. <br/>
                        Well, most of the time.
                    </p>
                    <Button text="Take a Look Around" href="/projects"/>
                </div>
                <div className="flex">
                    <Image src="https://picsum.photos/200/300" alt="AAAAA" width={250} height={99999}/>
                </div>
            </div>
            <div className="flex">
                <h1>Hello</h1>
            </div>
        </div>
    );
}
