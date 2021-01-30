import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as C from '~/components'

import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.dark}>
      <C.NavBar>
        <GlobalStyle />
        <Component {...pageProps} />
      </C.NavBar>
    </ThemeProvider>
  )
}
