import { Input, Box, Textarea, FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, Flex } from '@chakra-ui/react';
import React from 'react';


export const FormSubmitForm = () => {
    let [isSubmit, setSubmit] = React.useState('');
    let [contact, setContact] = React.useState('');
    let [name, setName] = React.useState('');
    let [message, setMessage] = React.useState('');

    let handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    let handleNameChange = (e) => {
        setName(e.target.value);
    }

    let handleContactChange = (e) => {
        setContact(e.target.value);
    }

    let handleSubmitChange = async (e) => {
        /* can only send message if the button hasnt changed to sent, stops spam sort of?*/
        /* can only send message when every field isnt empty, minimal validation */
        if (isSubmit === "" && name !== "" && contact !== "" && message !== "")
        {
            let discordMessage = {
                "username": "butterdog",
                "avatar_url":"https://i.imgur.com/2GDqwB9.png",
                "content": "Message received!", 
                "embeds" : [
                    {
                        fields: [
                            { name: 'Name', value: name},
                            { name: 'Contact', value: contact},
                            { name: 'Message', value: message}
                        ]
                    }
                ]
            }

            await fetch(
                /*uses environment variable*/
                `${process.env.REACT_APP_API_KEY}`,
                {method: 'post',body: JSON.stringify(discordMessage),
                headers: {'Content-Type': 'application/json'}
                }
            )
            let inputValue = e.target.value;
            setSubmit(inputValue);
        }
    }

    return(
        <Box>
        <FormControl isRequired>
        <FormLabel>Name</FormLabel>
            <FormHelperText>Enter your name</FormHelperText>
            <Input
                width='auto'
                onChange={handleNameChange}
                placeholder='Name'
                size='md'/>
        </FormControl>

        <FormControl isRequired>
        <FormLabel>Contact</FormLabel>
            <FormHelperText>Enter email, phone number or discord</FormHelperText>
            <Input
                width='auto'
                onChange={handleContactChange}
                placeholder='Contact'
                size='md'/>
        </FormControl>

        <FormControl isRequired>
        <FormLabel>Message</FormLabel>
            <FormHelperText>Enter brief message, max length: 1000</FormHelperText>
            <Textarea
                maxLength={1000}
                width='auto'
                onChange={handleMessageChange}
                placeholder='Message'
                size='md'/>
        </FormControl>

        <FormControl>
            <Button 
            type='submit'
            onClick={handleSubmitChange}
            colorScheme={isSubmit == "Sent!" ? 'green' : 'orange'}
            value="Sent!"
            disabled={false}>
                {isSubmit == "Sent!" ? "Sent!" : "Send"}
            </Button>
        </FormControl>
        </Box>
    );
}