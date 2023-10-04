import React from 'react';
//
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'50%'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        {/* //todo: create a Content Box */}
        <DrawerOverlay />
        {/* //todo: Here we store Option inside content*/}
        <DrawerContent>
          {/* //todo: Create a Close Button inside of the Content */}
          <DrawerCloseButton />
          {/* //todo: Create a Header inside the Drawer  */}
          <DrawerHeader>CSLibrary</DrawerHeader>
          {/* //todo: Here we add link & Other options */}
          <DrawerBody>
            {/* //todo: display flex -> column mean Vertical Stack */}
            <VStack alignItems={'flex-start'}>
              {/* //todo: Button from chakra ui */}
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to="/about">About</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to="/video">Video</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to="/explore">Explore</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to="/upload">Upload</Link>
              </Button>
            </VStack>
            {/*  */}
            {/* //todo: display flex -> column mean Vertical Stack */}
            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              //   bgColor={'white'}
              w={'100%'}
              justifyContent={'space-evenly'}
            >
              <Button
                colorScheme={'purple'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
