import { Button, Checkbox, HStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import SearchBar from "../SearchBar";

type GraphToolBarProps = {
  onSubgoalFilter: () => void;
  onUnlockNodes: React.Dispatch<React.SetStateAction<boolean>>;
  onEdgeLabelsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const GraphToolBar: React.FC<GraphToolBarProps> = ({
  onSubgoalFilter,
  onUnlockNodes,
  onEdgeLabelsVisible,
}: GraphToolBarProps) => {
  const { isFullscreen } = useSelector(
    (state: RootState) => state.fullscreenStatus
  );

  return (
    <HStack
      bg="cyan.700"
      borderRadius={isFullscreen ? "none" : "lg"}
      p="3"
      spacing={[null, null, 2, 5, 10]}
    >
      <SearchBar limit={5} />
      <HStack spacing="10" display={["none", "none", "none", "none", "flex"]}>
        <Checkbox
          colorScheme="cyan"
          color="white"
          size="md"
          checked
          onChange={onSubgoalFilter}
        >
          Vis delmål
        </Checkbox>
        <Checkbox
          defaultChecked
          colorScheme="cyan"
          color="white"
          size="md"
          onChange={() => onEdgeLabelsVisible((current) => !current)}
        >
          Vis kanttekst
        </Checkbox>
      </HStack>
      <Button
        color="cyan.700"
        bg="white"
        size="sm"
        minW="8em"
        onClick={() => onUnlockNodes((current) => !current)}
      >
        Lås opp noder
      </Button>
    </HStack>
  );
};

export default GraphToolBar;
