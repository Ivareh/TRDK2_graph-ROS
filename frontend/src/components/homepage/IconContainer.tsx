import React from "react";
import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import DummyData from "../../dummyTypes/DummyData";
import { BusinessArea } from "../../types/ontologyTypes";

/**
 * Hentet fra https://github.com/vemund0507/SDG-ontology-visualizer, justert navn og plasseringer.
 */

type IconContainerProps = {
  businessAreaNode: BusinessArea;
  instancesOf: string;
  icon: string;
  label: string;
  onClick: (ba: BusinessArea) => void;
};

const IconContainer: React.FC<IconContainerProps> = ({
  businessAreaNode,
  label,
  icon,
  onClick,
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
        <Box
          p={0}
          _hover={{
            cursor: "pointer",
          }}
          onClick={() => onClick(businessAreaNode)}
        ></Box>
      <Text fontSize="2xl" color="darkgrey">
        {label}
      </Text>
    </Stack>
  </Center>
);

export default IconContainer;
