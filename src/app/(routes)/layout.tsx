import type { Metadata } from "next";
import "../globals.css";
import TopBar from "../_components/TopBar";
import Footer from "@/app/_components/Footer";
import SidebarBrowser from "@/app/_components/SidebarBrowser";
import PageTabs from "@/app/_components/PageTabs";

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
                <TopBar />

                <div className="flex-1 flex">
                    <SidebarBrowser />
                    <div className="flex flex-1 flex-col min-h-0">
                        <PageTabs />
                        <main className="flex-1 px-5 sm:px-[20vw] py-5 max-h-100 overflow-auto">
                            {children}
                        </main>
                    </div>
                </div>

                <Footer />
            </body>
        </html>
    );
}
