import React from "react";
import { Text, Heading } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Stack, StackDivider, Box } from '@chakra-ui/react'

export const Skills = () => {
    return(
   <Card>
  <CardHeader>
    <Heading size='lg'>Skills</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='sm'>
          Compiler Languages
        </Heading>
        <Text pt='2' fontSize='md'>
          C#, Java, Python
        </Text>
      </Box>
      <Box>
        <Heading size='sm'>
          Web Programming (Full stack)
        </Heading>
        <Text pt='2' fontSize='hd'>
          HTML, CSS, BootStrap, JavaScript, React, ASP.NET Core
        </Text>
      </Box>
      <Box>
        <Heading size='sm'>
          Database
        </Heading>
        <Text pt='2' fontSize='md'>
          SQL, Jade
        </Text>
      </Box>
      <Box>
        <Heading size='sm'>
          Other
        </Heading>
        <Text pt='2' fontSize='md'>
          Unity
        </Text>
      </Box>
    </Stack>
    </CardBody>
    </Card>
    )
}