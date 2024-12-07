import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './index.css'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NghiaNM',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <title>NghiaNM</title>
        <meta
          name="description"
          content={metadata.description ?? 'Default description'}
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  )
}
