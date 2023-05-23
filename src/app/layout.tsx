import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Find Your User',
  description: 'Projeto para meu portifólio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
