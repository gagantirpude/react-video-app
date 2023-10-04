import {
  Avatar,
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

const Signup = () => {
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
          <Heading color={'purple.500'}>Sign Up</Heading>
          {/* //todo: Avatar */}
          <Avatar alignSelf={'center'} boxSize={['20', '36']} />
          {/* //todo: for Name */}
          <Input
            required
            type={'name'}
            placeholder={'Name'}
            color={'purple.500'}
            borderColor={'purple.500'}
            _placeholder={{ color: 'purple.500' }}
            focusBorderColor="purple.500"
          />

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
          {/*  */}
          <HStack>
            <Button colorScheme="purple" type="submit">
              Sign Up
            </Button>
          </HStack>
          <Text textAlign={'right'}>
            {' '}
            If You Have Account? {''}
            <Button variant={'link'} colorScheme="purple" type="submit">
              <Link to={'/login'}>Login</Link>
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

export default Signup;
