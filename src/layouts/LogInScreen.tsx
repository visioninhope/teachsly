import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Center
} from '@chakra-ui/react'
import SignIn from '../components/SignIn'
import logo from '../assets/img/brand/logo.png'
import { GeneralInformation } from '../enums/GeneralInformation'
import { SocialButtons } from '../components/Buttons/SocialButtons'

export const LogInScreen = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading textStyle={'title'} fontSize={['2xl', '4xl']}>{GeneralInformation.PROJECT_NAME}</Heading>
          <Box>
            <Center>
              <Image src={logo} alt={GeneralInformation.PROJECT_NAME} />
            </Center>
          </Box>
        </Stack>
        <SignIn />
        <Stack spacing={4}>
          <Center flexDirection={'column'}>
            <Text textStyle={'paragraph'} fontWeight='bold' fontSize={'xs'} marginY={4}>
              {GeneralInformation.PROJECT_NAME} {new Date().getFullYear()}
            </Text>
            <SocialButtons />
          </Center>
        </Stack>
      </Stack>
    </Flex>
  )
}
