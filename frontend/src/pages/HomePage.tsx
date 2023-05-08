import React from "react";
import {
  Heading,
  Stack,
  Image,
  Flex,
  Box,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import BusinessAreaView from "../components/homepage/BusinessAreaView";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => (
  <Stack spacing="3" backgroundColor="#F5F9FF">
    <Flex
      align="center"
      justify="center"
      justifyContent="space-evenly"
      h="250px"
      backgroundColor="#B0C5D6"
    >
      <HStack>
        <Heading size="sm" color="white">
          Søk blant integrasjoner
        </Heading>
        <SearchBar limit={5} />
      </HStack>
    </Flex>
    <VStack spacing={50}>
      <Heading size="lg" color="#B0C5D6" textAlign={"center"}>
        Virksomhetsområder
      </Heading>
      <BusinessAreaView />
    </VStack>
  </Stack>
);

export default HomePage;
