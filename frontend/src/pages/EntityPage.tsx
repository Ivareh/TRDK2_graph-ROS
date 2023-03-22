import React from "react";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { color } from "framer-motion";

function EntityPage() {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "footer footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      gap='1'
      bg='#F5F9FF'
      pl='4'
      pr='4'
    >
      <GridItem pl='2' area={'header'} w='100%' paddingTop='20px' >
        <Text m='0 auto' textAlign='center' fontSize='28'>
          Byutvikling
        </Text>
      </GridItem>
      <GridItem pl='2' area={'nav'} >
        <Card bg='#EDE7E0' h='350px' w='250px' >
          <CardBody>
            <Text> # Relaterte virksomhetsområder </Text>
            <Text> # Interne tjenester </Text>
            <Text> # Integrasjoner </Text>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem pl='2' area={'main'}>
      </GridItem>
      <GridItem pl='2' pt='4' area={'footer'} pr='2'>
      <Card bg='#B0C5D6' h='200px' w='100%' >
          <CardBody>
            <Text> Byutvikling </Text>
            <Text> Virksomhetsområde </Text>
            <Text> Noe info om området her, eventuell nødvendig tilleggsinformsjon eller spesifikasjoner om integrasjonene her </Text>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default EntityPage;
