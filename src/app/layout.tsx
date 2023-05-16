import './globals.css'
import { Sora } from 'next/font/google'
import React from "react";
import {Metadata} from "next";
import { Analytics } from "@vercel/analytics/react";

const sora = Sora({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: 'Justian.dev',
  description: 'I am Justian Spijkerbosch, an indiemaker who likes to develop, design and market my own apps, themes and more.',
  generator: 'Justian.dev',
  applicationName: 'Justian.dev',
  referrer: 'origin-when-cross-origin',
  keywords: ['Freelance', 'developer', 'Apeldoorn', 'Indiemaker', 'Indiehacker', 'full stack', 'Justian', 'Spijkerbosch', 'Nederland', 'Netherlands', 'NextJS', 'React', 'NestJS', 'TypeScript', 'Javascript', 'Performance', 'UX', 'Interaction Design', 'Interaction Development'],
  authors: [{ name: 'Justian Spijkerbosch '}],
  colorScheme: "light",
  themeColor: "white",
  creator: "Justian Spijkerbosch",
  publisher: "Justian Spijkerbosch",
  openGraph: {
    title: "Justian.dev",
    description: "I am Justian Spijkerbosch, an indiemaker who likes to develop, design and market my own apps, themes and more.",
    url: "https://justian.dev",
    siteName: "Justian.dev",
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: 'summary',
    title: 'Justian.dev',
    description: 'I am Justian Spijkerbosch, an indiemaker who likes to develop, design and market my own apps, themes and more.',
    creator: '@justiandev'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
      <Analytics />
    </html>
  )
}
