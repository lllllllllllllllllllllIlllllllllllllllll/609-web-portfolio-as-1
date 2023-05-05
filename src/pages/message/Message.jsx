import React from "react";
import { Stack, Text, Input, Box, Flex, Heading } from '@chakra-ui/react';
import { FormSubmitForm } from "../../components/formcontrols/FormSubmitForm";

export const Message = () => {
    return(
        <Flex flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'calc(100vh - 6rem)'}>
        
        <Heading>Interactive message sender</Heading>
        <Text>Flick me a quick message via Discord!</Text>
        <Text>(using power of discord webhooks)</Text>

        {/* whitespace*/}
        <Box boxSize={50}></Box>

        <Stack spacing={2} alignItems={'center'}>
        <FormSubmitForm/>
        </Stack>

        </Flex>
    )
}