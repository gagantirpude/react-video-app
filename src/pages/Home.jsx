import { Box, Text, Container, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//Images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

//
const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //   fontSize: { base: '4xl', md: '6xl' },
  size: '4',
  textTransform: 'uppercase',
  //   p: { base: '4', md: '8' },
  p: '4',
  textAlign: 'center',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        {/*  */}
        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          //todo: if you want to change the direction of the stack on different screen sizes, you can pass an array to the direction prop. The first value in the array will be applied to the stack on the base (sm) breakpoint, the second value will be applied to the stack on the md breakpoint, and so on.
          //
          //todo: that means on small screen it will be column and on medium screen it will be row
          direction={['column', 'row']}
        >
          {/* //todo: if screen will be small then hight will be 40 and if screen will be bigger then hight will be 400 */}
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          {/*  */}
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            dolorem eaque vitae odio ipsum, temporibus rerum, doloremque
            inventore repudiandae necessitatibus mollitia amet ullam quo
            aspernatur at laborum. Mollitia, cumque assumenda.{' '}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      {/*  */}
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>
      {/*  */}
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
      {/*  */}
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      {/*  */}
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
