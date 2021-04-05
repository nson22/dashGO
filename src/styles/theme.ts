import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      fonts: {
        body: 'Poppins',
        heading: 'Poppins'
      },
      body: {
        background: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})