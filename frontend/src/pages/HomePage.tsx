import React from "react";
import { Heading, Stack, Image, Flex } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
/* import SustainabilityGoals from '../molecules/SustainabilityGoalsList'; 
må opprettes:*/
import BusinessAreaView from "../components/BusinessAreaView";

/**
 * This is the front page that meets you once the website loads.
 */

const HomePage: React.FC = () => (
  <Stack spacing="10">
    <Flex
      align="center"
      justify="center"
      justifyContent="space-evenly"
      h="350px"
      /* spacing="10" */
      bg="cyan.700"
    >
      <Stack spacing="10">
        <Heading size="lg" color="white">
          Søk blant integrasjoner
        </Heading>
        {/* <SearchBar limit={5} /> */}
      </Stack>

      <Image src="SDG.png" alt="SDG" w="250px" />
    </Flex>
    <Heading size="lg" /* align="center" */ color="cyan.700">
      Virksomhetsområder
    </Heading>
    <BusinessAreaView />
  </Stack>
);

export default HomePage;
