// Codes by mahdi tasha
// Importing part
import { RootLayoutProps } from "@/type/component";
import type { Metadata } from "next";
import { JSX } from "react";
import { Poppins } from "next/font/google";
import "@/style/index.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

// Creating and exporting meta data
export const metadata: Metadata = {
  title: "Breathe 🌱 | Quit Nicotine, Track Progress & Build Healthy Habits",
  description:
    "Breathe is a progressive web app (PWA) that helps you quit nicotine, track your smoke-free journey, and build healthier habits with reminders, goals, and progress tracking.",
  keywords: [
    "quit smoking",
    "quit nicotine",
    "nicotine withdrawal",
    "smoke-free app",
    "habit tracker",
    "pwa quit smoking",
    "nicotine free journey",
    "stop vaping",
    "smoking cessation",
  ],
  authors: [{ name: "Mahdi Tasha" }],
  creator: "Mahdi Tasha",
  publisher: "Breathe App",
  openGraph: {
    title: "Breathe 🌱 | Quit Nicotine, Track Progress & Build Healthy Habits",
    description:
      "Breathe is a progressive web app (PWA) to help people quit nicotine, track their progress, and stay motivated with reminders and milestones.",
    url: "https://breathe-air.vercel.app/",
    siteName: "Breathe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Breathe App – Quit Nicotine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://breathe-air.vercel.app/",
  },
};

// Defining fonts
const mainFont = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "block",
  style: "normal",
  subsets: ["latin"],
});

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  // Returning JSX
  return (
    <html lang="en" dir="ltr">
      <body className={cn("bg-background text-foreground", mainFont.className)}>
        <ThemeProvider>
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
