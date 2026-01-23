import type { Metadata } from "next";
import "../globals.css";
import Nav from "../_components/Nav";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
    title: "Julian Rees",
    description: "Personal portfolio of Julian Rees",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col w-screen">
                <Nav />
                {/*<div className="flex flex-1">*/}
                {/*    {children}*/}
                {/*</div>*/}

                <main className="flex flex-1 flex-col px-5 sm:px-[20vw] py-5">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
