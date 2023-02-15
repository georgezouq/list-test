import IndexLayout from '@/layouts/IndexLayout'
import { Store, StoreProvider } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const store = new Store();

  return <StoreProvider store={store}>
    <IndexLayout><Component {...pageProps} /></IndexLayout>
  </StoreProvider>
}
