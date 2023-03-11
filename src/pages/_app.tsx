import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Space_Mono } from '@next/font/google'
import Layout from '@/components/layout';
import { useRouter } from 'next/router';

const spaceMonoFont = Space_Mono({ weight: ["400", "700"], subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <Layout className={spaceMonoFont.className} routerPathName={router.pathname}>
    <Component {...pageProps} />
  </Layout>
}
