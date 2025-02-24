import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';

const NavigationBar = () => {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontSize="xl">Healthcare Dashboard</Box>
        <Flex alignItems="center">
          <Link to="/"><Button colorScheme="teal" variant="ghost">Dashboard</Button></Link>
          <Link to="/appointments"><Button colorScheme="teal" variant="ghost">Appointments</Button></Link>
          <Link to="/medical-history"><Button colorScheme="teal" variant="ghost">Medical History</Button></Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
