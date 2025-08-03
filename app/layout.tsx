import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Roopesh (SDE-1) - Portfolio",
//   description: "Software Development Engineer portfolio",
//   generator: 'roopesh',
//   icons: {
//     icon: '/cropped.png',
//   },
// }
export const metadata: Metadata = {
  title: "Roopesh Vishwakarma (SDE-1)",
  description:
    "Official portfolio of Roopesh Vishwakarma — a skilled Frontend Developer specializing in React, Next.js, TypeScript, and modern UI/UX. Explore projects, GitHub, and LinkedIn.",
  generator: "Roopesh Vishwakarma",
  keywords: [
    "Roopesh Vishwakarma",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
    "Roopesh GitHub",
    "Roopesh LinkedIn",
    "SDE-1 Portfolio",
    "Frontend Engineer India"
  ],
  authors: [{ name: "Roopesh Vishwakarma", url: "https://roopesh.dev" }],
  creator: "Roopesh Vishwakarma",
  alternates: {
    canonical: "https://roopesh.dev",
  },
  openGraph: {
    title: "Roopesh Vishwakarma | Frontend & React Developer",
    description:
      "Explore the projects and skills of Roopesh Vishwakarma — a frontend engineer passionate about building fast, responsive web apps using React, Next.js, and TypeScript.",
    url: "https://roopesh.dev",
    siteName: "Roopesh Vishwakarma Portfolio",
    images: [
      {
        url: "/cropped.png",
        width: 800,
        height: 600,
        alt: "Roopesh Vishwakarma Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roopesh Vishwakarma | Frontend Developer",
    description: "Explore Roopesh's React & Next.js projects.",
    site: "@yourTwitterHandle",
    images: ["/cropped.png"],
  },
  icons: {
    icon: "/cropped.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  robots: "index, follow",
  themeColor: "#0F172A"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
