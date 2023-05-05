import React from "react";
import { Box, Flex, Heading } from '@chakra-ui/react';

export const Skills = () => {
    return(
        <Flex flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'calc(100vh - 5.2rem)'}>
            <Heading>Skills</Heading>
        </Flex>
    )
}