import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import ThemeProvider from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/Providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MicroDocs",
  description: "AI solution for your documents",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <ClerkProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </ThemeProvider>
        {/* </ClerkProvider> */}
      </body>
    </html>
  );
}
