import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Mhetre - LC Stats",
  description:
    "I am trying to get consistent with Leetcode. This is my stats page. This gets updated every hour and I earn points, I can then redeem these points to buy something which I save money for from my stipend on a monthly basis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="p-4 m-4 my-32 md:p-32 md:m-0 md:my-0 flex justify-center drop-shadow-sm border-2 rounded-xl border-gray-700 flex-col gap-4items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
