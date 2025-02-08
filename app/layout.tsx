import './globals.css'
import type { Metadata } from 'next'
import { Dancing_Script, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { I18nProvider } from '@/components/I18nProvider'

const inter = Inter({ subsets: ['latin'] })

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  // Opcional: especifica los weights que necesitas
  weight: ['400', '700']
})
export const metadata: Metadata = {
  title: 'Grace Community Church',
  description: 'A welcoming Christian community in the heart of the city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={inter.className}>
        <I18nProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  )
}