import React from "react";
import { Image, Stack } from "@chakra-ui/react";
import DummyData from "../../dummyTypes/DummyData";
/* import { BusinessArea } from "../../types/ontologyTypes";
import { MotionBox } from "../../types/react/componentTypes"; */

/**
 * Hentet fra SDG-ontology-visualizer, justert navn og plasseringer.
 * Ettersom disse omhandler annen data enn vi har, kan det være dette må gjøres om på.
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
  /* const DD = DummyData();
  console.log("dummy data:", DD[0]); */

  <Stack align="center" spacing="20">
    {/* Et eksempelbilde for å vise i UI at det IconContainer fungerer */}
    <Image
      src={icon}
      borderRadius="lg"
      overflow="hidden"
      alt={"bilde"}
      boxSize="250"
      object-fit="cover"
      border={"medium"}
    />
  </Stack>
);

export default IconContainer;
