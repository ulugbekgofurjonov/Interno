import { Poppins, DM_Serif_Display, Jost } from 'next/font/google'  // 1 ta Jost yetarli
import './globals.css'

// Poppins shrifti
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

// DM Serif Display shrifti
const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400'],
})

// Jost shrifti
const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {
  title: "Interno",
  description: "Interior Design Studio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSerif.variable} ${jost.variable}`}>  {/* Jost qo'shildi */}
        {children}
      </body>
    </html>
  )
}