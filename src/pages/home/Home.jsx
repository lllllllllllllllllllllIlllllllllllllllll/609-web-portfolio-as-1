import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export const Home = () => {
  return (
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'calc(100vh - 5.2rem)'}
      >
        <Heading fontSize={'6xl'}>Pet Store!</Heading>
        <Heading>If you like animals, we have them :)</Heading>
      </Flex>
  );
};
