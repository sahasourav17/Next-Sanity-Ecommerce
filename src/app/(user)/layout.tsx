import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import PageButton from "@/components/PageButton";
export const metadata: Metadata = {
  title: "WholeSale Mart",
  description: "Whole Sale Mart: Shopping in ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display">
        <Navbar />
        <PageButton />
        {children}
      </body>
    </html>
  );
}
