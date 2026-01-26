import {indexes} from "@/app/_projects/indexes";
import {notFound} from "next/navigation";
import Image from "next/image";
import {StackComponent, StackComponentType} from "@/app/_projects/project";
import TableContents from "@/app/_components/TableContents";

export default async function Page({params}: { params: Promise<{ project: string }>
}) {
    const { project } = await params

    const pageProject = indexes.find(p => p.link === project)

    if (pageProject == undefined) {
        notFound()
        return
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
                <section className="relative flex flex-col flex-1 text-textprimary bg-bgsecondary rounded-2xl px-5 pb-5">
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

function renderStackContent(element: StackComponent) {
    switch (element.type) {
        case StackComponentType.Header:
            return <article className="flex flex-col items-center">
                <h4 className="text-textquaternary text-2xl">{element.title}</h4>
                <h5>{element.subtitle}</h5>
            </article>
        case StackComponentType.Break:
            return <hr className="border-2 border-textprimary"/>
        case StackComponentType.ImageRow:
            return <article className={`flex flex-col sm:flex-row ${element.reverse ? "sm:flex-row-reverse" : ""} gap-5`}>
                <div className="flex-1">
                    <h4 className="text-textquaternary text-2xl">{element.title}</h4>
                    <p className="text-sm">{element.text}</p>
                </div>
                <div className="flex-1 relative min-h-50">
                    <Image className="object-cover rounded-2xl" src={element.imageSrc} alt={element.imageAlt} fill/>
                </div>
            </article>
        case StackComponentType.TextRow:
            return <article className={`gap-5`}>
                    <h4 className="text-textquaternary text-2xl">{element.title}</h4>
                    <p className="text-sm">{element.text}</p>
            </article>
        case StackComponentType.FullImage:
            return <article className="flex flex-col">
                <h4 className="text-center text-2xl text-textquaternary">{element.title}</h4>
                <div className="relative min-h-100">
                    <Image className="object-cover object-center" src={element.imageSrc} alt={element.imageAlt} fill/>
                </div>
                <p>{element.subtitle}</p>
            </article>
        case StackComponentType.Video:
            return <article>
                <h4 className="text-center text-2xl text-textquaternary">{element.title}</h4>
                <video className="rounded-2xl" src={element.videoSrc} controls/>
                <p>{element.subtitle}</p>
            </article>
    }
}

export async function generateStaticParams() {
    return indexes.map(p => ({ project: p.link }))
}