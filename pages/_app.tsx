import React from 'react'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'

import Meta from '#/components/meta'
import ColorSwitcher from '#/components/color-switcher'
import { ThemeProvider } from 'theme-ui'
import theme from '#/lib/theme'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import Header from '#/components/header'
import Home from '#/components/home'
const globalStyles = css`
  @font-face {
    font-family: 'Tumbly';
    src: url('../public/Tubmly.otf') format('otf');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Tumbly', sans-serif;
  }
`

const mdxComponents = {}

const App = ({ Component, pageProps }: AppProps) => {
  const componentsWithStyles = useThemedStylesWithMdx(
    useMDXComponents(mdxComponents),
  )

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Meta />
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
