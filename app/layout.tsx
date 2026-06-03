import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SunsetPlanner — Plan feature deprecation without breaking users',
  description: 'Track feature usage, identify deprecation candidates, plan migration paths, and automate user communication. Built for product managers at SaaS companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="618274c1-8013-48d3-82ca-dcf8b41b9525"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
