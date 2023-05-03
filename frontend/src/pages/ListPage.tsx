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
import Navbar from "../components/Navbar";
import InsecurityList from "../components/InsecurityView";
import DummyData from "../dummyTypes/DummyData";
import { MunicipalityEntity } from "../dummyTypes/OntologyTypes";

const ListPage: React.FC = () => (
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
    <Heading size="lg" color="#B0C5D6" textAlign={"center"}>
      Usikkerheter i relasjoner
    </Heading>
    <InsecurityList />
  </Stack>
);

export default ListPage;
