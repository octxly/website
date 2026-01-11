import indexes from "@/app/_projects/indexes";
import {notFound} from "next/navigation";
import Image from "next/image";
import {StackComponent} from "@/app/_projects/project";

export default async function Page({params}: { params: Promise<{ project: string }>
}) {
    const { project } = await params

    const pageProject = indexes.find(p => p.link === project)

    if (pageProject == undefined) {
        notFound()
    }

    return (
        <main className="flex flex-col">
            <section className="flex h-100 relative w-screen">
                <Image className="object-cover object-center" src={pageProject.featureImgSrc} alt="Hello" fill={true}/>
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-linear-to-b from-bgprimary/0 to-bgprimary">
                    <header className="bg-bgsecondary p-5 rounded-2xl mb-10 text-center">
                        <h1 className="text-3xl text-textsecondary">{pageProject.title}</h1>
                        <h2 className="text-texttertiary">{pageProject.description}</h2>
                        <h3 className="text-textprimary">{pageProject.timePeriod}</h3>
                    </header>
                </div>
            </section>
            <div className="flex flex-col px-[25vw] py-10 flex-1">
                <section className="relative flex-1 text-textprimary bg-bgsecondary rounded-2xl">
                    <nav className="absolute bg-bgtertiary right-full w-50 mr-2.5">
                        <h4 className="text-textsecondary text-xl">
                            Table of Contents
                        </h4>

                        <ol>
                            {pageProject.body.map((element, index) =>
                                <li key={index}>{element.title}</li>
                            )}
                        </ol>
                    </nav>
                    <aside className="absolute bg-bgtertiary left-full w-50 ml-2.5">
                        <h4 className="text-textsecondary text-xl">
                            Design Goals
                        </h4>

                        <ul>
                            {pageProject.designGoals.map((element, index) =>
                                <li key={index}>{element}</li>
                            )}
                        </ul>
                    </aside>

                    {pageProject.body.map((element, index) => {
                        switch (element.type) {
                            case StackComponent.Header:
                                return <article key={index} className="flex flex-col items-center">
                                    <h4 className="text-textquaternary text-2xl">{element.title}</h4>
                                    <h5>{element.subtitle}</h5>
                                </article>
                            break;
                            case StackComponent.Break:
                                return <hr key={index} className="m-5 border-2 border-textprimary"/>
                            break;
                        }
                    })}
                </section>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return indexes.map(p => ({ project: p.link }))
}