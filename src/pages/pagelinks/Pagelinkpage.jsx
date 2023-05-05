import React from 'react';
import { Text, Stack, Avatar, Icon, Flex, Heading } from '@chakra-ui/react';
import { FaDiscord, FaMailBulk, FaGithubSquare } from 'react-icons/fa';

export const Pagelinks = () => {
  return (
    <Flex
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    minH={'calc(100vh - 6rem)'}>

  <Stack spacing={2} alignItems={'center'}>
    <Heading fontSize={'6xl'}>Links</Heading>

    <Avatar
            size='lg'
            name='DS'
            src='img/smsprofile.png'
        />

    
    <Icon as={FaDiscord} w={8} h={8} /><Text>Discord: sms#4002</Text>

    <a href="mailto:2021005284@student.sit.ac.nz"><Icon as={FaMailBulk} w={8} h={8} /></a>
      <a href="mailto:2021005284@student.sit.ac.nz">Click to send me an email</a>

      <a href="https://github.com/lllllllllllllllllllllIlllllllllllllllll"><Icon as={FaGithubSquare} w={8} h={8} /></a>
      <a href="https://github.com/lllllllllllllllllllllIlllllllllllllllll">Click to visit GitHub Repository</a>
    </Stack>
  </Flex>
  );
};
