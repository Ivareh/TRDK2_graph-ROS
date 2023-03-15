import React from "react";
import { Heading, Stack, Image, Flex, Box, Text } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
/* import SustainabilityGoals from '../molecules/SustainabilityGoalsList'; 
må opprettes:*/
import BusinessAreaView from "../components/homepage/BusinessAreaView";

/**
 * This is the front page that meets you once the website loads.
 * Includes Searchbar and overview of all Business Areas
 */

const HomePage: React.FC = () => (
  <Stack spacing="10" backgroundColor="#F5F9FF">
    <Flex
      align="center"
      justify="center"
      justifyContent="space-evenly"
      h="350px"
      backgroundColor="#B0C5D6"
    >
      <Stack spacing="10">
        <Heading size="lg" color="white">
          Søk blant integrasjoner
        </Heading>
        <Text>*søkefelt her*</Text>
        {/* <SearchBar limit={5} /> */}
      </Stack>
    </Flex>
    <Heading size="lg" color="#B0C5D6">
      Virksomhetsområder
    </Heading>
    <BusinessAreaView />
  </Stack>
);

export default HomePage;
