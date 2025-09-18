import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
            <div className="flex flex-col justify-center-safe w-screen">
                <nav className="w-screen flex justify-center sticky top-0 p-8 bg-linear-to-b from-red-500 to-red-500/25 transition duration-500 hover:bg-red-500">
                    <Link href="/">
                        <p>
                            Julian Rees
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p>
                            Contact
                        </p>
                    </Link>
                </nav>
                {children}
            </div>
        </body>
    </html>
  );
}
