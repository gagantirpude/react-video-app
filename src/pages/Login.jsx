import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      {/*  */}
      <form>
        {/*  */}
        <VStack
          alignItems={'center'}
          spacing={'8'}
          w={['full', 'xl']}
          m={'auto'}
          my={'20'}
        >
          <Heading color={'purple.500'}>Login</Heading>
          {/* //todo: for Email */}
          <Input
            required
            type={'email'}
            placeholder={'Email'}
            color={'purple.500'}
            borderColor={'purple.500'}
            _placeholder={{ color: 'purple.500' }}
            focusBorderColor="purple.500"
          />
          {/* //todo: for Password */}
          <Input
            required
            type={'password'}
            placeholder={'Password'}
            color={'purple.500'}
            borderColor={'purple.500'}
            _placeholder={{ color: 'purple.500' }}
            focusBorderColor="purple.500"
          />
          {/* //todo: forget button */}
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forget'}>Forget Password?</Link>
          </Button>
          {/*  */}
          <HStack>
            <Button colorScheme="purple" type="submit">
              Login
            </Button>
          </HStack>
          <Text textAlign={'right'}>
            {' '}
            New User? {''}
            <Button variant={'link'} colorScheme="purple" type="submit">
              <Link to={'/signup'}>Signup</Link>
            </Button>
          </Text>
          {/*  */}

          {/*  */}
        </VStack>
        {/*  */}
      </form>
      {/*  */}
    </Container>
  );
};

export default Login;
