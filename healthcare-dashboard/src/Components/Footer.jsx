import React from 'react';
import { Box, Text, Link, Stack, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.200" py={4} mt={8}>
      <Divider />
      <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" px={4}>
        <Text>&copy; {new Date().getFullYear()} Healthcare Management System. All rights reserved.</Text>
        
        <Stack direction="row" spacing={6}>
          <Link href="/" _hover={{ color: 'teal.400' }}>Home</Link>
          <Link href="/appointments" _hover={{ color: 'teal.400' }}>Appointments</Link>
          <Link href="/medical-history" _hover={{ color: 'teal.400' }}>Medical History</Link>
          <Link href="https://yourcompany.com" isExternal _hover={{ color: 'teal.400' }}>Company</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
