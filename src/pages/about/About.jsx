import React from 'react';
import { Box } from '@chakra-ui/react';
import { Text, Avatar, Flex, Heading } from '@chakra-ui/react';

export const About = () => {
  return (
    <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'calc(100vh - 5.2rem)'}
      >
        <Heading fontSize={'6xl'}></Heading>

        <Avatar
            size='2xl'
            name='DS'
            src='img/smsprofile.png'
        />

        <Heading>Hello my name is Daniel and I am an aspiring software engineer!</Heading>
        <Text>My interests include</Text>
        
</Flex>)
};
