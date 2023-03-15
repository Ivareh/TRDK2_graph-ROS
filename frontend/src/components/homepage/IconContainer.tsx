import React from "react";
import { Image, Stack } from "@chakra-ui/react";
/* import { BusinessArea } from "../../types/ontologyTypes";
import { MotionBox } from "../../types/react/componentTypes"; */

/**
 * Hentet fra SDG-ontology-visualizer, justert navn og plasseringer.
 * Ettersom disse omhandler annen data enn vi har, kan det være dette må gjøres om på.
 */
/* 
type IconContainerProps = {
  businessAreaNode: BusinessArea;
  onClick: (sdg: BusinessArea) => void;
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
const IconContainer: React.FC = () => {
  return (
    <Stack align="center" spacing="20">
      <Image
        src={
          "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695726.jpg"
        }
        borderRadius="lg"
        overflow="hidden"
        alt={"bilde"}
        boxSize="250"
        object-fit="cover"
      />
    </Stack>
  );
};

export default IconContainer;
