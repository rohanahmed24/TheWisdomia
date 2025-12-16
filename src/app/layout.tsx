import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TheWisdomia - Where Every Tale Comes Alive',
  description: 'Discover real stories that matter. From history\'s shadows to today\'s headlines, we bring you the narratives that shaped our world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Merriweather+Sans:wght@400;700&family=Roboto:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
