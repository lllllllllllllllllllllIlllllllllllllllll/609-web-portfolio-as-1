import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import {useRouteError} from 'react-router-dom';

export const Error = () => {
  const error = useRouteError();
  console.error(error);

    return (
      <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      minH={'calc(100vh - 5.2rem)'}
    >
      <Heading fontSize={'6xl'}>Encountered error</Heading>
      <Heading>{error.statusText || error.message}</Heading>
    </Flex>
    )
}
