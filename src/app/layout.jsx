import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from '@/components/providers/Providers';
import { siteMd } from '@/lib/metaData';
import { baseUrl } from '@/lib/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteMd.siteTitle,
    template: `%s - ${siteMd.siteTitle}`
  },
  description: siteMd.siteDescription,
  twitter: {
    card: "summary_large_image"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
