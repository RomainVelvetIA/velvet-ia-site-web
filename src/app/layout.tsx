import type { Metadata } from 'next'
import { Outfit, Roboto_Flex } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-outfit',
  display: 'swap'
})

const robotoFlex = Roboto_Flex({ 
  subsets: ['latin'],
  weight: ['200'],
  variable: '--font-roboto-flex',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Velvet IA  | Intelligence Artificielle Innovante',
  description: 'Velvet IA propose des solutions d\'intelligence artificielle innovantes pour transformer votre entreprise. Découvrez nos services et technologies.',
  openGraph: {
    title: 'Velvet IA  | Intelligence Artificielle Innovante',
    description: 'Velvet IA  propose des solutions d\'intelligence artificielle innovantes pour transformer votre entreprise. Découvrez nos services et technologies.',
    url: 'https://velvet-ia.com',
    siteName: 'Velvet IA ',
    images: [
      {
        url: 'https://velvet-ia.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Velvet IA Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE_URL || 'http://localhost:3000'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${outfit.variable} ${robotoFlex.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Force l'application du mode sombre
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          `
        }} />
      </head>
      <body className="min-h-screen">
        <ThemeProvider
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background text-foreground min-h-screen font-roboto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 