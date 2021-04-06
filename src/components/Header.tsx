import { Box, Flex, HStack, Icon, Input, Text, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export function Header(){
  return(
    <Flex
      as='header'
      width='100%'
      height='20'
      maxWidth={1400}
      marginX='auto'
      marginTop='4'
      paddingX='6'
      align='center'
    >
      <Text
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing='tight'
        width='64'
      >
        dashGO
        <Text
          as='span'
          color='pink.500'
          marginLeft='1'
        >.</Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        paddingY='2'
        paddingX='8'
        marginLeft='6'
        maxWidth={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        backgroundColor='gray.800'
        borderRadius='full'
      >
        <Input 
          color='gray.50'
          variant='unstyled'
          paddingX='4'
          marginRight='4'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400'}}
        />
        <Icon as={ RiSearchLine } fontSize='20'/>
      </Flex>

      <Flex
        align='center'
        marginLeft='auto'
      >
        <HStack
          spacing='6'
          marginX='8'
          paddingRight='8'
          paddingY='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'

        >
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>

        <Flex align='center'>
          <Box 
            marginRight='4'
            textAlign='right'
          >
            <Text>Glecinilson Braga da Silva</Text>
            
            <Text
              color='gray.300'
              fontSize='small'
            >glecinilson@gmail.com</Text>

          </Box>

          <Avatar size='md' name='Glecinilson Braga da Silva' src='https://avatars.githubusercontent.com/u/6181755?v=4' />
        </Flex>
      </Flex>
    </Flex>
  )
}