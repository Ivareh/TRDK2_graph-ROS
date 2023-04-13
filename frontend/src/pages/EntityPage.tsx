import React from "react";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { color } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Overlay from "../components/formpageOverlay/Overlay";

function EntityPage() {
  return (
    <>
      <Stack bg="#F5F9FF">
        <Navbar />
        <Grid
          templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
          gap="4"
          pl="4"
          pr="4"
          pb="16"
        >
          <GridItem
            pl="2"
            area={"header"}
            w="100%"
            borderColor="darkgrey"
            borderStyle="solid none solid none"
            borderWidth="1px"
          >
            <Text m="0 auto" textAlign="center" fontSize="28">
              Byutvikling
            </Text>
          </GridItem>
          <GridItem pl="2" area={"nav"}>
            <Card bg="#EDE7E0" h="250px" w="250px">
              <CardBody>
                <Text> # Relaterte virksomhetsområder </Text>
                <Text> # Interne tjenester </Text>
                <Text> # Integrasjoner </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem pl="2" area={"main"}></GridItem>

          <GridItem pl="2" pt="2" area={"footer"} pr="2">
            <Card bg="#B0C5D6" h="150px" w="100%">
              <Flex justify="flex-end">
                <Overlay />
              </Flex>
              <CardBody>
                <Text> Byutvikling </Text>
                <Text> Virksomhetsområde </Text>
                <Text>
                  {" "}
                  Noe info om området her, eventuell nødvendig
                  tilleggsinformsjon eller spesifikasjoner om integrasjonene her{" "}
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
        <Stack>
          <Footer />
        </Stack>
      </Stack>
    </>
  );
}

export default EntityPage;
