import type { Metadata } from "next";
import "../globals.css";
import TopBar from "../_components/TopBar";
import Footer from "@/app/_components/Footer";
import SidebarBrowser from "@/app/_components/SidebarBrowser";
import PageTabs from "@/app/_components/PageTabs";
import ActivityBar from "@/app/_components/ActivityBar";
import LineNumbers from "@/app/_components/LineNumbers";

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
            <body className="h-screen flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 flex overflow-hidden">
                    <ActivityBar>
                        <SidebarBrowser />
                    </ActivityBar>
                    <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
                        <PageTabs />
                        <div className="flex flex-1 overflow-hidden">
                            <LineNumbers />
                            <main className="flex-1 overflow-y-auto px-5 sm:px-[15vw] py-5">
                                {children}
                            </main>
                        </div>
                    </div>
                </div>

                <Footer />
            </body>
        </html>
    );
}
