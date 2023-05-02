import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Heading } from '@chakra-ui/react';

export const Store = () => {
  return (
    <Flex
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    minH={'calc(100vh - 5.2rem)'}>
    <Heading fontSize={'6xl'}>This is Store page</Heading>
    <Heading>If you like animals, we have them :)</Heading>
  </Flex>
  );
};
