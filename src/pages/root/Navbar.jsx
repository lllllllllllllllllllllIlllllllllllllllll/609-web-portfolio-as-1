import React from 'react';
import navLinks from '../../data/navLinks.json';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent={'center'} py={5} borderBottom={'1px solid black'}>
        {navLinks.map(link => (
          <Link
            key={link.id}
            as={NavLink}
            to={link.path}
            style={{ textDecoration: 'none' }}
          >
            {({ isActive, isPending }) => (
              <Text
                px={10}
                mx={5}
                py={2}
                textDecoration={'none'}
                bgColor={'blue.100'}
                borderRadius={10}
                borderWidth={'1px'}
                borderColor={isActive ? 'purple.700' : 'blue.100'}
                borderStyle={'solid'}
                color={isActive ? 'red.700' : 'purple.700'}
                _hover={{ color: 'red.700', borderColor: 'purple.700' }}
                transitionDuration={'1s'}
                transitionProperty={'all'}
              >
                {link.name}
              </Text>
            )}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
