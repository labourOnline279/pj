"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const onScroll = (e: any) => {
        lenis.raf(e);
      };
      requestAnimationFrame(onScroll);
      return () => {
        cancelAnimationFrame(requestAnimationFrame(onScroll));
      };
    }
  }, [lenis]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactLenis root>
          <Navbar />
          <ParallaxProvider>{children}</ParallaxProvider>
          <Footer />
          <ToastContainer />
        </ReactLenis>
      </body>
    </html>
  );
}
