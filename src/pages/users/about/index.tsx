import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/pages/components/title'
import Manual from '@/pages/components/manual'
import Tabs from './component/tab'
const inter = Inter({ subsets: ['latin'] })


export default function About() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <Title title={'About'}/>

      <Tabs />

      <Manual />
    </main>
  )
}
