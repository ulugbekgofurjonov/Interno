import { Poppins, DM_Serif_Display, Jost } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'  // Client komponentni import

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400'],
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {  // ✅ Server Component da metadata ishlaydi
  title: "Interno",
  description: "Interior Design Studio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSerif.variable} ${jost.variable}`}>
        <ClientLayout>  {/* AOS ishlaydigan Client komponent */}
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}