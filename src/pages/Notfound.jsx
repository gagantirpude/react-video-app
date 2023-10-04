import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <Heading color={'blackAlpha.800'}>404 - Not Found</Heading>
        <Text>The page you are looking for does not exist.</Text>
        <FaExclamationCircle className="icon" size={'10vmax'} />
        <Button variant={'link'} color={'purple.500'}>
          <Link to="/">Go back to the homepage</Link>
        </Button>
      </VStack>
    </Container>
  );
};

export default Notfound;
