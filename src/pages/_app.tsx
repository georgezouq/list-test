import IndexLayout from '@/layouts/IndexLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <IndexLayout><Component {...pageProps} /></IndexLayout>
}
