import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { useNavigation, NavLink, Outlet} from "react-router-dom";


const Root = () => {
    const navigation = useNavigation();
    
    return (
        <Box>
            <NavLink to={'/'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                Home
            </NavLink>

            <br />

            <NavLink to={'Store'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                Store
            </NavLink>

            <br />

            <NavLink to={'About'}
            className={({isActive, isPending}) =>
            isActive ? 'active' : isPending ? 'pending' : ''}>
                About
            </NavLink>
            
            <br />

            <Box>
                {navigation.state === 'loading' ? 'loading' : <Outlet />}
            </Box>
        </Box>
    );
}

export default Root;