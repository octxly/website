import ButtonLink from "@/app/_components/ButtonLink";
import Image from "next/image";
import Card from "@/app/_components/Card";

export default function Home() {
    return (
        <main className="flex flex-1 flex-col justify-around gap-12.5 px-[25vw] py-10">
            <section className="flex flex-1 items-center justify-between ">
                <article className="flex flex-col">
                    <h2 className="text-textprimary text-3xl">Hi, I&#39;m</h2>
                    <h1 className="text-textsecondary text-5xl">Julian Rees</h1>
                    <h2 className="text-textprimary text-3xl">Welcome to my website!</h2>
                    <p className="text-texttertiary text-xl">
                        This is where I record all of <br/>the things I build.
                    </p>
                    <ButtonLink text="Take a Look Around" href="/projects"/>
                </article>
                <figure className="flex">
                    <Image src="https://picsum.photos/200/300" alt="AAAAA" width={250} height={0}/>
                </figure>
            </section>

            <hr className="mx-5 border-2"/>

            <section className="flex flex-col">
                <h2 className="text-textsecondary text-3xl text-center">Some Stuff</h2>
                <div>
                    <Card title="Test Card" desc="Testing testing this is a test card aaaaaa" imgSrc="https://picsum.photos/300/200" imgAlt="Test image" btnLink="./projects" />
                </div>
            </section>
        </main>
    );
}
