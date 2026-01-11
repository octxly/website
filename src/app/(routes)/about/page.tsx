import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="flex flex-col justify-center  px-[25vw] py-10">
            <section className="flex items-start justify-between gap-10">
                <figure className="flex">
                    <Image src="https://picsum.photos/300/300" alt="picture of me" width={250} height={0}/>
                </figure>
                <article className="flex flex-col">
                    <h2 className="text-textsecondary text-3xl">Something About Me</h2>
                    <p className="text-textprimary text-lg">
                        I'm a honours computer science major currently studying at Carleton University.<br/>
                        This website is where I'm cataloguing all of the projects and stuff I make.
                    </p>
                </article>
            </section>

            <h2 className="text-textsecondary text-3xl">My Socials</h2>
            <article className="flex gap-5">
                <div className="text-texttertiary">
                    <p>Email</p>
                    <p>Github</p>
                </div>
                <div className="text-textquaternary">
                    <p>julianrees11234@gmail.com</p>
                    <p>octxly</p>
                </div>
            </article>
        </main>
    )
}