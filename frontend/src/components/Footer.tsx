import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Center,
  Heading,
} from '@chakra-ui/react';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ReactNode } from 'react';

const Footer = () => {

  return (
    <footer>
      <Center bg="cyan.800" w="100%" p={4} color="white" h="15vh" mt="20">
        <Heading size="md">TRDK02_graph-ROS</Heading>
      </Center>
    </footer>
  );
};

export default Footer;