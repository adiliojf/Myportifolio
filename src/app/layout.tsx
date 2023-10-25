import './globals.css'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jam-juree',
})

export const metadata = {
  title: 'Adilio Freitas',
  description: 'Portfólio de Adilio Freitas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree}  bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-cover font-sans text-gray-50`}
      >
        <main></main>
        <div className="">{children}</div>
      </body>
    </html>
  )
}
