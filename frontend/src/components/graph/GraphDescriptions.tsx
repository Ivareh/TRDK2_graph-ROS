import { Stack } from "@chakra-ui/react";
import React from "react";
import GraphNodeKey from "./GraphNodeKey";

// From https://github.com/TDT4290-SDG-Ontology/SDG-ontology-visualizer/
interface GraphDescriptionsProps {
  float: boolean;
}

const GraphDescriptions: React.FC<GraphDescriptionsProps> = ({
  float,
}: GraphDescriptionsProps) => (
  <Stack
    width={[null, null, null, "20vw", "17vw"]}
    position={float ? "absolute" : "static"}
    right={0}
    bgColor="white"
    boxShadow="md"
    rounded="lg"
  >
    <GraphNodeKey description="Standardfarge/Startnode" />
    <GraphNodeKey description="Virksomhetsområde" />
    <GraphNodeKey description="System eller tjeneste" />
    <GraphNodeKey description="Integrasjon" />
    <GraphNodeKey description="Indikator" />
    <GraphNodeKey description="Enhetsområde" />
  </Stack>
);

export default GraphDescriptions;
