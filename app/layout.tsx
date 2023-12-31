import './css/style.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieBanner from '@/components/cookiebanner'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-38MBWWFG0P'/>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-50 text-blue-700 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <CookieBanner/>
          <Banner />
        </div>
      </body>
    </html>
  )
}
 