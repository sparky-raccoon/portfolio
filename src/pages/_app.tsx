import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Space_Mono } from '@next/font/google'
import localFont from '@next/font/local'

const spaceMonoFont = Space_Mono({ weight: ["400", "700"], subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  return <div className={spaceMonoFont.className}><Component {...pageProps} /></div>
}
