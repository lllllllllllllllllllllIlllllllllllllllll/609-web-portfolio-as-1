import React from 'react';
import { Text, Avatar, Flex, Heading } from '@chakra-ui/react';
import { Image, Card, CardHeader, CardBody, CardFooter, Stack, StackDivider, Box } from '@chakra-ui/react'

export const Projects = () => {
  return (
    <Card>
    <CardHeader>
      <Heading size='lg'>Projects</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='sm'>
            Flight Booking System
          </Heading>
          <a href="https://github.com/lllllllllllllllllllllIlllllllllllllllll/606-jade-project"><Text pt='2' fontSize='md'>
            https://github.com/lllllllllllllllllllllIlllllllllllllllll/606-jade-project

          </Text></a>
        </Box>

        <Box>
          <Heading size='sm'>
            Interactive React Portfolio
          </Heading>

        <Image boxSize="200px"
            objectFit={'cover'}
            src='img/ss-portfolio.png'
            alt='Portfolio website screenshot'/>

          <a href="https://github.com/lllllllllllllllllllllIlllllllllllllllll/609-web-portfolio-as-1"><Text pt='2' fontSize='md'>
          https://github.com/lllllllllllllllllllllIlllllllllllllllll/609-web-portfolio-as-1

          </Text></a>
        </Box>

      </Stack>
      </CardBody>
      </Card>
      )
};

            