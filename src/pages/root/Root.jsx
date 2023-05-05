import React from 'react';
import {
    ChakraProvider,
    Button,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    IconButton
  } from '@chakra-ui/react';
import { useNavigation, NavLink, Outlet} from "react-router-dom";
import { ToggleColor } from '../../components/togglecolor';
import { PhoneIcon } from '@chakra-ui/icons';
import {FaHome, FaOdnoklassniki, FaMailBulk, FaLaptop,
        FaToolbox, FaFolderOpen} from 'react-icons/fa';
import { Footer } from '../../components/footer';
const Root = () => {
    const navigation = useNavigation();
    
    return (
        <ChakraProvider theme={theme}>
        <Box>
            <NavLink to={'/'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                <Button
                    aria-label='Home-button'
                    rightIcon={<FaHome />}>Home</Button>
            </NavLink>

            <NavLink to={'About'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                <Button
                    aria-label='About-button'
                    rightIcon={<FaOdnoklassniki />}>About</Button>
            </NavLink>

            <NavLink to={'Projects'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                <Button
                    aria-label='Project-button'
                    rightIcon={<FaFolderOpen />}>Projects</Button>
            </NavLink>

            <NavLink to={'Skills'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                <Button
                    aria-label='Skills-button'
                    rightIcon={<FaToolbox />}>Skills</Button>
            </NavLink>

            <NavLink to={'Links'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                <Button
                    aria-label='Links-button'
                    rightIcon={<FaMailBulk />}>Links</Button>
            </NavLink>

            <NavLink to={'Message'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                <Button
                    aria-label='Message-button'
                    rightIcon={<FaLaptop />}>Message</Button>
            </NavLink>
            <ToggleColor />

            <Box>
                {navigation.state === 'loading' ? 'loading' : <Outlet />}
            </Box>
        </Box>

        <Footer />
        </ChakraProvider>

    );
}

export default Root;