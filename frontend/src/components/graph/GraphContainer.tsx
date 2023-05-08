import { Flex, Stack } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { isWithinCorrelationLimit } from "../../common/node";
import { RootState } from "../../state/store";
import { D3Edge } from "../../types/d3/simulation";
import { GraphEdge, GraphNode } from "../../types/ontologyTypes";
import Graph from "./Graph";
import GraphDescriptions from "./GraphDescriptions";

// component wrapping the Graph, Graphtoolbar and GraphDescriptions. Also creates nodeFilter and edgeFilter callbacks. From https://github.com/TDT4290-SDG-Ontology/SDG-ontology-visualizer/
const GraphContainer: React.FC = () => {
  const [showSystemService, setShowSystemService] = useState<boolean>(false);
  const [unlockNodes, setUnlockNodes] = useState<boolean>(false);
  const [edgeLabelsVisible, setEdgeLabelsVisible] = useState<boolean>(true);
  const { isFullscreen } = useSelector(
    (state: RootState) => state.fullscreenStatus
  );
  const { correlationFilter } = useSelector(
    (state: RootState) => state.ontology
  );
  const { kpiFilter } = useSelector((state: RootState) => state.ontology);

  const filterSystemServices = () => {
    setShowSystemService(!showSystemService);
  };

  const filterKPISetSelection = useCallback(
    (node: GraphNode): boolean => {
      return true;
    },
    [kpiFilter.u4ssc, kpiFilter.oecd, kpiFilter.unIndicator]
  );

  const nodeFilter = useCallback(
    (node: GraphNode): boolean => {
      return true;
    },
    [showSystemService]
  );

  const edgeFilter = useCallback(
    (edge: D3Edge | GraphEdge): boolean => {
      if (!isWithinCorrelationLimit(edge, correlationFilter)) return false;
      return true;
    },
    [
      correlationFilter.pLow,
      correlationFilter.pMedium,
      correlationFilter.pHigh,
      correlationFilter.nLow,
      correlationFilter.nMedium,
      correlationFilter.nHigh,
    ]
  );

  return (
    <Stack
      spacing={isFullscreen ? 0 : 2}
      h={isFullscreen ? "100vh" : "65vh"}
      w={isFullscreen ? "100vw" : ""}
      position={isFullscreen ? "absolute" : "static"}
    >
      <Flex h="100%" justify="space-between">
        <Graph
          nodeFilter={nodeFilter}
          edgeFilter={edgeFilter}
          unlockAllNodes={unlockNodes}
          edgeLabelsVisible={edgeLabelsVisible}
          filterKPISetSelection={filterKPISetSelection}
        />
        <GraphDescriptions float={isFullscreen} />
      </Flex>
    </Stack>
  );
};

export default GraphContainer;
