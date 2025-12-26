import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import { SmoothScrollProvider } from "@/components/Providers/smooth-scroll-provider";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Ishadh's Portfolio",
  icons: {
    icon: "/new-logo.png",
  },
  description:
    "Full-stack developer and Computer Science Undergraduate, building modern web products with a focus on clean design, scalable systems, and real-world impact.",
  keywords:
    "fullstack developer,backend developer, frontend developer, web development, JavaScript,JS, React, Node.js, portfolio",
  author: "Ishadh Ifham",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <NextTopLoader />
            <Header />

            {children}

            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                className:
                  "font-semibold backdrop-blur-md text-black rounded-3xl",
              }}
            />

            <GridPattern
              width={200}
              height={200}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom,white,transparent)]"
              )}
            />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
