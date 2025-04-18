import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { BooksContextProvider } from "./context/booksContext.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata: Metadata = {
  title: "My Bookshop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>
          <BooksContextProvider>
            <Navbar />
            {children}
          </BooksContextProvider>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
