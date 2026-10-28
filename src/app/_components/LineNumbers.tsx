"use client"

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function LineNumbers() {
    const [lineCount, setLineCount] = useState(0);
    const pathname = usePathname();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateLineCount = () => {
            const mainElement = document.querySelector('main');
            if (mainElement) {
                const scrollHeight = mainElement.scrollHeight;
                const style = window.getComputedStyle(mainElement);
                const lineHeight = parseFloat(style.lineHeight);

                if (!isNaN(lineHeight) && lineHeight > 0) {
                    const totalLines = Math.ceil(scrollHeight / lineHeight);
                    setLineCount(totalLines);
                } else {
                    const fontSize = parseFloat(style.fontSize);
                    const estimatedLineHeight = fontSize * 1.5;
                    const lines = Math.ceil(scrollHeight / estimatedLineHeight);
                    setLineCount(lines);
                }
            }
        };

        // Update on mount and when pathname changes
        updateLineCount();

        // Use ResizeObserver to update when content changes size
        const mainElement = document.querySelector('main');
        if (mainElement) {
            const resizeObserver = new ResizeObserver(() => {
                updateLineCount();
            });
            resizeObserver.observe(mainElement);
            return () => resizeObserver.disconnect();
        }
    }, [pathname]);

    useEffect(() => {
        const mainElement = document.querySelector('main');
        if (!mainElement) return;

        const updateLineNumbersScroll = () => {
            if (containerRef.current && mainElement) {
                containerRef.current.scrollTop = mainElement.scrollTop;
            }
        };

        mainElement.addEventListener('scroll', updateLineNumbersScroll);
        return () => mainElement.removeEventListener('scroll', updateLineNumbersScroll);
    }, []);

    return (
        <div 
            ref={containerRef}
            className="flex flex-col text-right select-none text-content-main/30 bg-base-300 w-10 text-sm overflow-hidden"
            style={{ lineHeight: '1.5rem' }}
        >
            {Array.from({ length: Math.max(lineCount, 1) }).map((_, i) => {
                return <div key={i} className={`pr-2`}>{i + 1}</div>
            })}
        </div>
    );
}
