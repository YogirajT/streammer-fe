import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './contexts/theme-provider'
import { AppProvider } from './contexts/app-provider'
import SideBar from './components/sidebar'
import Dashboard from './components/dashboard'

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
        <AppProvider>
          <ThemeProvider>
            <main className="flex overflow-x-hidden h-screen">
              <SideBar />
              <Dashboard>
                {children}
              </Dashboard>
            </main>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
