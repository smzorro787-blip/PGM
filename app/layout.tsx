import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pequeñas Grandes Mentes | Transformando Vidas',
  description: 'Proyecto social juvenil dedicado a ayudar a niños y adolescentes en comunidades vulnerables a través de educación, mentoría y experiencias que transforman vidas.',
  keywords: ['ONG', 'educación', 'niños', 'voluntariado', 'donaciones', 'México', 'impacto social'],
  openGraph: {
    title: 'Pequeñas Grandes Mentes | Transformando Vidas',
    description: 'Proyecto social juvenil dedicado a ayudar a niños y adolescentes en comunidades vulnerables.',
    type: 'website',
    locale: 'es_MX',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B7355',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
