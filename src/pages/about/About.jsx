import React from 'react';
import { Text, Avatar, Flex, Heading } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Stack, StackDivider, Box } from '@chakra-ui/react'

export const About = () => {
  return (
    <Card>
    <CardHeader>
      <Heading size='lg'>About me</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='sm'>
            Name
          </Heading>
          <Text pt='2' fontSize='md'>
            Daniel Suh
          </Text>
        </Box>
        <Box>
          <Heading size='sm'>
            Occupation
          </Heading>
          <Text pt='2' fontSize='hd'>
            Tertiary Student
          </Text>
        </Box>

        <Box>
          <Heading size='sm'>
            Focus
          </Heading>
          <Text pt='2' fontSize='hd'>
            Bachelor of Information Technology 3<Text as='sup'>rd</Text> year
          </Text>
        </Box>

        <Box>
          <Heading size='sm'>
            Institute
          </Heading>
          <Text pt='2' fontSize='md'>
            SIT Te Pukenga
          </Text>
        </Box>
        <Box>
          <Heading size='sm'>
            Personal Interests (in no particular order)
          </Heading>
          <Text pt='2' fontSize='md'>
            Coding, Algorithms, Digimon, Chess puzzles, Memes
          </Text>
        </Box>
      </Stack>
      </CardBody>
      </Card>
      )
};
