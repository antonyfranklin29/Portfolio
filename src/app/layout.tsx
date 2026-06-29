import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Franklin Antony — Power BI Developer & Data Analyst',
  description:
    'Turning enterprise data into decisions leadership can act on. Microsoft PL-300 certified Power BI Developer with expertise in DAX, Azure, SQL, and business intelligence.',
  keywords: [
    'Power BI Developer',
    'Data Analyst',
    'Business Intelligence',
    'DAX',
    'Azure',
    'SQL',
    'Franklin Antony',
    'Microsoft PL-300',
  ],
  authors: [{ name: 'Franklin Antony' }],
  creator: 'Franklin Antony',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Franklin Antony — Power BI Developer & Data Analyst',
    description: 'Turning enterprise data into decisions leadership can act on.',
    siteName: 'Franklin Antony Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franklin Antony — Power BI Developer & Data Analyst',
    description: 'Turning enterprise data into decisions leadership can act on.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
