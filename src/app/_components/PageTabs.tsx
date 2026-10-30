"use client"

import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {MotionConfig, Reorder} from "framer-motion";

interface PageTabsProps {
    tabs: string[]
    setTabs: React.Dispatch<React.SetStateAction<string[]>>
    onExitClick: (event: React.MouseEvent<HTMLButtonElement>, href: string) => void
}

//Display logic here
function PageTabs({ tabs, setTabs, onExitClick }: PageTabsProps) {
    const currentUrl = usePathname()

    return <nav className="h-10 bg-base-200 z-10 flex gap-2.5">
        <MotionConfig transition={{type: false}}>
            <Reorder.Group
                axis="x"
                values={tabs}
                onReorder={setTabs}
                className="flex gap-2"
            >
                {
                    tabs.map(href =>
                        <Reorder.Item key={href} value={href} className={`h-full text-content-main flex items-center ${href == currentUrl ? "bg-base-100 border-t-3 border-t-accent-100" : "bg-base-300 border-t-3 border-t-base-300"}`}>
                            <Link className="pl-2.5 h-full content-center" href={href} draggable={false}>
                                {href.split("/").at(-1)}
                            </Link>
                            <button className={`mx-1 w-5 rounded aspect-square ${href == currentUrl ? "hover:bg-base-300" : "hover:bg-base-100"}`} onClick={event => onExitClick(event, href)}>x</button>
                        </Reorder.Item>
                    )
                }
            </Reorder.Group>
        </MotionConfig>
    </nav>
}

//Routing logic is here
export default function TabNavigator() {
    const [openTabs, setOpenTabs] = useState<string[]>([])

    const url = usePathname()
    //Needed because the effect only differentiates a change in route, but cant know whether it is a tab opening or closing
    const suppressNextAdd = useRef(false)

    const router = useRouter()

    useEffect(() => {
        if (suppressNextAdd.current) {
            suppressNextAdd.current = false
            return
        }

        if (!openTabs.find(tab => tab == url) && url != "/") {
            setOpenTabs(tabs => [...tabs, url])
        }
    }, [url])

    return <PageTabs
        tabs={openTabs}
        setTabs={setOpenTabs}
        onExitClick={(event, href) => {
            event.preventDefault()
            event.stopPropagation()

            setOpenTabs(tabs => tabs.filter(tab => tab != href))

            if (href == url) {
                suppressNextAdd.current = true //flag route change as

                router.push(
                    openTabs.filter(tab => tab != href).at(-1) ?? "/"
                )
            }
        }
    }/>
}

// //Display logic here
// function PageTabs({ tabs, setTabs, onExitClick }: PageTabsProps) {
//     const tabRefs = useRef<(HTMLDivElement | null)[]>([])
//
//     const [tabData, setTabData] = useState<{width: number, position: number}[]>([])
//
//     const isDraggingRef = useRef(false)
//     const currDragHref = useRef("")
//
//     const dragStartX = useRef(0)
//     const pointerDown = useRef(false)
//
//     useLayoutEffect(() => {
//         let sum = 0
//         const newTabData = tabs.map((tabHref, index) => {
//             const width = tabRefs.current[index]?.getBoundingClientRect().width ?? 0
//
//             const data = {
//                 width: width,
//                 position: sum
//             }
//
//             sum += width
//
//             return data
//         })
//
//         setTabData(newTabData)
//     }, [tabs])
//
//     const Tab = ({ href, index }: { href: string, index: number }) => {
//         const [isDragging, setIsDragging] = useState(false)
//
//         const isActive = usePathname() == href
//
//         const tabElement = useRef<HTMLDivElement>(null)
//
//         return <div
//             ref={el => {tabRefs.current[index] = el ?? null}}
//             className={`absolute h-full ${isDragging ? "bg-white" : "bg-white"}`}
//             style={{
//                 translate: `${(tabData[index]?.position ?? 0) + 15*index}px 0px`,
//                 width: `${tabData[index] && tabData[index].width != 0 ? tabData[index].width + "px" : ""}`
//             }}
//         >
//             <div
//                 ref={tabElement}
//                 draggable={false}
//                 className={`select-none h-full text-content-main flex items-center ${isDragging ? "z-10 absolute bg-green-300" : ""} ${isActive ? "bg-base-100 border-t-3 border-t-accent-100" : "bg-base-300 border-t-3 border-t-base-300"}`}
//             >
//                 <Link
//                     className="pl-2.5 h-full content-center"
//                     draggable={false}
//                     href={href}
//                     onPointerDown={event => {
//                         dragStartX.current = event.clientX
//                         isDraggingRef.current = false
//                         pointerDown.current = true
//                         currDragHref.current = href
//
//                         event.currentTarget.setPointerCapture(event.pointerId)
//                     }}
//                     onPointerMove={event => {
//                         if (currDragHref.current != href) return
//
//                         if (pointerDown.current && !isDraggingRef.current && Math.abs(event.clientX - dragStartX.current) > 5) {
//                             isDraggingRef.current = true
//                             setIsDragging(true)
//                         }
//
//                         if (isDraggingRef.current && tabElement.current) {
//                             const delta = event.clientX - dragStartX.current
//
//                             tabElement.current.style.left = `${delta}px`
//
//                             if (tabData[index].position + delta < tabData[index - 1].position) {
//                                 setTabs((oldTabs) =>
//                                     [oldTabs[1], oldTabs[0]]
//                                 )
//                             }
//                         }
//                     }}
//                     onPointerUp={event => {
//                         pointerDown.current = false
//
//                         if (!isDraggingRef.current) {
//                             return
//                         }
//
//                         setIsDragging(false)
//
//                         event.currentTarget.releasePointerCapture(event.pointerId)
//                     }}
//                     onClick={event => {
//                         if (!isDraggingRef.current) return
//
//                         event.preventDefault()
//                         event.stopPropagation()
//
//                         isDraggingRef.current = false
//
//                         if (tabElement.current) {
//                             tabElement.current.style.left = "0px"
//                         }
//                     }}
//                 >
//                     {href.split("/").at(-1)}
//                 </Link>
//                 <button className={`mx-1 w-5 rounded aspect-square ${isActive ? "hover:bg-base-300" : "hover:bg-base-100"}`} onClick={event => onExitClick(event, href)}>x</button>
//             </div>
//         </div>
//     }
//
//     return <nav className="h-10 bg-base-200 z-40 relative">
//         {
//             tabs.map((tab, index) => <Tab href={tab} key={index} index={index} />)
//         }
//     </nav>
// }
