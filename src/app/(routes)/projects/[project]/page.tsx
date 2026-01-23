import indexes from "@/app/_projects/indexes";
import {notFound} from "next/navigation";
import Image from "next/image";
import {ProjectComponents, StackComponent} from "@/app/_projects/project";
import TableContents from "@/app/_components/TableContents";

export default async function Page({params}: { params: Promise<{ project: string }>
}) {
    const { project } = await params

    const pageProject = indexes.find(p => p.link === project)

    if (pageProject == undefined) {
        notFound()
    }

    return (
        <>
            <section className="h-100 relative w-screen -mx-5 sm:-mx-[20vw] -mt-5">
                <Image className="object-cover object-center" src={pageProject.featureImgSrc} alt="Hello" fill={true}/>
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-linear-to-b from-bgprimary/0 to-bgprimary">
                    <header className="bg-bgsecondary p-5 rounded-2xl mb-10 text-center">
                        <h1 className="text-3xl text-textsecondary">{pageProject.title}</h1>
                        <h2 className="text-texttertiary">{pageProject.description}</h2>
                        <h3 className="text-textprimary">{pageProject.timePeriod}</h3>
                        <h3 className="text-textquaternary text-center">
                            {pageProject.techUsed.join(" | ")}
                        </h3>
                    </header>
                </div>
            </section>
            <div className="flex flex-1">
                <section className="relative flex flex-col flex-1 text-textprimary bg-bgsecondary rounded-2xl px-5">
                    <TableContents contents={
                        pageProject.body.map((value, index) => {
                            if ("title" in value && value.title != undefined) return {title: value.title, id: index.toString()};
                            return null
                        })
                    } />

                    {pageProject.body.map((element, index) => {
                        return <div key={index} id={index.toString()} className="mt-2.5">
                            { renderStackContent(element) }
                        </div>
                    })}
                </section>
            </div>
        </>
    )
}

function renderStackContent(element: ProjectComponents) {
    switch (element.type) {
        case StackComponent.Header:
            return <article className="flex flex-col items-center">
                <h4 className="text-textquaternary text-2xl">{element.title}</h4>
                <h5>{element.subtitle}</h5>
            </article>
        case StackComponent.Break:
            return <hr className="border-2 border-textprimary"/>
        case StackComponent.Row:
            return <article className="">
                <h4>{element.title}</h4>
                <p>{element.text}</p>
            </article>
        case StackComponent.FullImage:
            return null
        case StackComponent.Video:
            return null
    }
}

export async function generateStaticParams() {
    return indexes.map(p => ({ project: p.link }))
}