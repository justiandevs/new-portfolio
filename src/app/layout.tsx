import './globals.css'
import React from "react";
import {Metadata} from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from 'next/font/local'

const satoshi = localFont({
  src: [{
    path: './font/satoshi.woff2',
    weight: '400',
  },
    {
      path: './font/satoshi-medium.woff2',
      weight: '600',
    },
    {
      path: './font/satoshi-bold.woff2',
      weight: '700',
    }],
  display: 'swap',
  variable: '--font-satoshi'
})

export const metadata: Metadata = {
  title: 'Justian.dev',
  description: 'Passionate about creating digital solutions for the convenience of businesses and individuals, and sharing my journey online.',
  generator: 'Justian.dev',
  applicationName: 'Justian.dev',
  referrer: 'origin-when-cross-origin',
  keywords: ['Freelance', 'developer', 'Apeldoorn', 'Indiemaker', 'Indiehacker', 'full stack', 'Justian', 'Spijkerbosch', 'Nederland', 'Netherlands', 'NextJS', 'React', 'NestJS', 'TypeScript', 'Javascript', 'Performance', 'UX', 'Interaction Design', 'Interaction Development'],
  authors: [{ name: 'Justian Spijkerbosch '}],
  colorScheme: "dark",
  themeColor: "dark",
  creator: "Justian Spijkerbosch",
  publisher: "Justian Spijkerbosch",
  openGraph: {
    title: "Justian.dev",
    description: "Passionate about creating digital solutions for the convenience of businesses and individuals, and sharing my journey online.",
    url: "https://justian.dev",
    siteName: "Justian.dev",
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: 'summary',
    title: 'Justian.dev',
    description: 'Passionate about creating digital solutions for the convenience of businesses and individuals, and sharing my journey online.',
    creator: '@justiandev'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
