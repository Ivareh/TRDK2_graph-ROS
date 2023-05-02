import React from "react";
import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import DummyData from "../../dummyTypes/DummyData";
/* import { BusinessArea } from "../../types/ontologyTypes";
import { MotionBox } from "../../types/react/componentTypes"; */

/**
 * Hentet fra TRDK2-ontology-visualizer, justert navn og plasseringer.
 * Ettersom disse omhandler annen data enn vi har, kan det være dette må gjøres om på.
 * Henter per nå inn duy data med verdier for ikon, label og instancesOf.
 * Original kode er kommentert ut.
 */

/* 
type IconContainerProps = {
  businessAreaNode: BusinessArea;
  onClick: (ba: BusinessArea) => void;
};

const IconContainer: React.FC<IconContainerProps> = ({
  businessAreaNode,
  onClick,
}: IconContainerProps) => (
  <MotionBox
    p={0}
    whileHover={{ scale: 1.05 }}
    _hover={{
      cursor: "pointer",
    }}
    onClick={() => onClick(businessAreaNode)}
  >
    <Image
      src={businessAreaNode.icon}
      borderRadius="lg"
      overflow="hidden"
      alt={businessAreaNode.label}
      boxSize="250"
      object-fit="cover"
    />
  </MotionBox>
); */
type IconContainerProps = {
  instancesOf: string;
  icon: string;
  label: string;
};

const IconContainer: React.FC<IconContainerProps> = ({
  instancesOf,
  label,
  icon,
}: IconContainerProps) => (
  <Center bg={"#EDE7E0"} boxSize="250" borderRadius={"10%"}>
    <Stack align="center" spacing="20px">
      <Image
        src={icon}
        borderRadius="lg"
        overflow="hidden"
        alt={"icon"}
        boxSize="150"
        object-fit="cover"
      />
      <Text fontSize="2xl" color="darkgrey">
        {label}
      </Text>
    </Stack>
  </Center>
);

export default IconContainer;
