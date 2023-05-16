import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Streammer Demo',
  description: 'P2P auto-scalable Video streaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
