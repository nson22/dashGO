import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'

    >
      <Flex
        as='form'
        width='100%'
        maxWidth='360px'
        backgroundColor='gray.800'
        padding='8'
        borderRadius='8'
        flexDirection='column'
      >

       <Stack
        spacing='4'
       >
         <FormControl>
          <FormLabel htmlFor='email'>
            E-mail
          </FormLabel>

            <Input
              id='email'
              name='email'
              type='email'
              focusBorderColor='pink.500'
              backgroundColor='gray.900'
              variant='filled'
              _hover={{
                backgroundColor: 'gray.900'
              }}
              size='lg'
            />
        </FormControl> 
        <FormControl>
            <FormLabel htmlFor='password'>
              Password
            </FormLabel>


            <Input
              id='password'
              name='password'
              type='password'
              focusBorderColor='pink.500'
              backgroundColor='gray.900'
              variant='filled'
              _hover={{
                backgroundColor: 'gray.900'
              }}
              size='lg'
            />
        </FormControl> 
       </Stack>

        <Button
          type='submit'
          marginTop='6'
          size='lg'
          colorScheme='pink'
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
