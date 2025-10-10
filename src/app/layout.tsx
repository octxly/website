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
            <body className="min-h-screen flex flex-col w-screen">
                <Nav />
                <main className="flex flex-1 px-[20vw]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
