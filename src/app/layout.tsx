import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

export const metadata: Metadata = {
  title: 'エリアド',
  description: 'エリアドとは',
}

const notoSansJP = Noto_Sans_JP({ subsets: [], display: 'swap', weight: "500" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
      {/* <body className={notoSansJP.className}> */}
        {children}
      </body>
    </html>
  )
}
