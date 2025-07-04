import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Loading from "./loading";
import Wrapper from "@/components/wrapper";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-sen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HousePLus",
  description: "Europe: vacation rentals",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${sen.variable} antialiased`}>
          <Suspense fallback={<Loading />}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Wrapper>{children}</Wrapper>
            </ThemeProvider>
          </Suspense>
          {/* <Provider locale={locale}>
           
          </Provider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
