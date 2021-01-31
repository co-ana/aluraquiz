import { createGlobalStyle, ThemeProvider } from 'styled-components'
import SEO from '../src/components/SEO'
import db from '../db.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO
        title='Senhor dos Anéis'
        siteName='AluraQuiz'
        pageURL='https://aluraquiz-omega-bice.vercel.app/'
        shortDescription='Versão do AluraQuiz para fãs de LotR!'
        description='Um quiz desenvolvido para fãs de Senhor dos Anéis durante a imersão Next.js da Alura =)'
        ogImg={db.bg}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
