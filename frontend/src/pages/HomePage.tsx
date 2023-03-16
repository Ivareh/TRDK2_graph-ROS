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
/* import SustainabilityGoals from '../molecules/SustainabilityGoalsList'; 
må opprettes:*/
import BusinessAreaView from "../components/homepage/BusinessAreaView";

/**
 * This is the front page that meets you once the website loads.
 * Should include Navbar, Searchbar and overview of all Business Areas
 */

const HomePage: React.FC = () => (
  <Stack spacing="10" backgroundColor="#F5F9FF">
    <Flex
      align="center"
      justify="center"
      justifyContent="space-evenly"
      h="250px"
      backgroundColor="#B0C5D6"
    >
      <HStack spacing="10">
        <Heading size="sm" color="white">
          Søk blant integrasjoner
        </Heading>
        <Text>*søkefelt her*</Text>
        {/* <SearchBar limit={5} /> */}
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
