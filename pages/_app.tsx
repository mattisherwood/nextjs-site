import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/structure.css"
import "../styles/typography.css"
import "../styles/variables.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
