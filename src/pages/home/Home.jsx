import { Flex, Heading, Avatar } from '@chakra-ui/react';
import React from 'react';

export const Home = () => {
  return (
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'calc(100vh - 5.2rem)'}
      >
        <Avatar
            size='2xl'
            name='DS'
            src='img/smsprofile.png'
        />

        <Heading fontSize={'3xl'}>Hi, my name is Daniel and I am an aspiring software engineer and full-stack developer!</Heading>
        <Heading>Welcome to my website!</Heading>
      </Flex>
  );
};
