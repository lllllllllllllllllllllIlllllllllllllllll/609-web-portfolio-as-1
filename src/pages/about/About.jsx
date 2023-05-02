import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Heading } from '@chakra-ui/react';

export const About = () => {
  return (
    <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'calc(100vh - 5.2rem)'}
      >
        <Heading fontSize={'6xl'}>About page</Heading>
        <Heading>This is about page</Heading>
</Flex>)
};
