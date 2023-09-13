import '@/styles/globals.css'
import '@/styles/styles.css' //Add css custom
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
