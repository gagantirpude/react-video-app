import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiTwotoneMessage,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            SUBSCRIBE TO GET NOTIFIED
          </Heading>
          <HStack borderBottom={'2px'} p={'2px'}>
            {/* <Button size={'md'}>About us</Button> */}
            <Input
              placeholder="Enter Email Here"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiTwotoneMessage size={20} />
            </Button>
          </HStack>
        </VStack>
        {/*  */}
        <VStack
          alignItems={'stretch'}
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          textAlign={'center'}
        >
          <Heading textTransform={'uppercase'} size={'md'}>
            Quick Links
          </Heading>
          <Text>All Rights received</Text>
        </VStack>
        {/*  */}
        <VStack alignItems={'center'} w={'full'}>
          <Heading textTransform={'uppercase'} size={'md'}>
            Contact Us
          </Heading>
          <Text>Phone: +234 000 000 0000</Text>
          <Text>Email:</Text>

          {/*  */}
          <HStack alignItems={'center'}>
            <Button variant={'link'} colorScheme="whiteAlpha">
              <a href="#" target="blank">
                <AiFillYoutube size={20} />
              </a>
            </Button>
            <Button variant={'link'} colorScheme="whiteAlpha">
              <a href="#" target="blank">
                <AiFillInstagram size={20} />
              </a>
            </Button>
            <Button variant={'link'} colorScheme="whiteAlpha">
              <a href="#" target="blank">
                <AiFillTwitterSquare size={20} />
              </a>
            </Button>
            <Button variant={'link'} colorScheme="whiteAlpha">
              <a href="#" target="blank">
                <AiFillGithub size={20} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
