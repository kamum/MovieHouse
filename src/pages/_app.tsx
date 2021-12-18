import type { AppProps } from 'next/app'

import { Header } from '../components/Header'

import { MoviesProvider } from '../MoviesContext';

import { GlobalStyle } from '../styles/global'


function MyApp({ Component, pageProps }: AppProps ) {

  return (
    <MoviesProvider> 
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </MoviesProvider>
  )
}


export default MyApp
