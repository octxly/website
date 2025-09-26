import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_components/Nav";
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
            {/*create a navbar*/}
            <body>
                <div className="flex flex-col justify-center-safe w-screen min-h-full">
                    <Nav />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
