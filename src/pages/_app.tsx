import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/next-server/lib/router/router"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
