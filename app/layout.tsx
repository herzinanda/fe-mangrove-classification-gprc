import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPRC Mangrove",
  description: "Web for Classification of Mangrove Plant Zone with Gaussian Process Regression for Classification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <EdgeStoreProvider>
          <main>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
              { children }
            </div>
          </main>
        </EdgeStoreProvider>
      </body>
    </html >
  );
}
