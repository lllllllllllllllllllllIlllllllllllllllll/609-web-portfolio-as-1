import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export const Error = () => {
  return (
    <Flex
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    minH={'calc(100vh - 5.2rem)'}
  >
    <Heading fontSize={'6xl'}>Encountered error</Heading>
    <Heading></Heading>
  </Flex>
  )
}
