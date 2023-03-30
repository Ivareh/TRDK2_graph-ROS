import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { InsecureRelation } from "../dummyTypes/OntologyTypes";
import { stringify } from "querystring";
import { fontStyle } from "@mui/system";
/**
   * data imports I would assume needed:
   * import {
    getInsecurities,
    getEntitiy,
  } from '../../api/ontologies';
  import { Annotation, Node, InsecureRelation } from '../../types/ontologyTypes';
   */

/**
 * A list item of an insecurity within the system. Ranged by assumed severity (0.1 = low, 0.7 = high).
 * Used to create items for the list in InsecurityView.tsx
 */

interface InsecurityProps {
  instance1: string | null;
  instance2: string | null;
  insecurityLabel: string;
  insecuritySeverity: number;
}

const InsecurityList: React.FC<InsecurityProps> = ({
  instance1,
  instance2,
  insecurityLabel,
  insecuritySeverity,
}: InsecurityProps) => {
  const severity = insecuritySeverity;
  let severityColor: string = "";
  if (severity >= 0.7) {
    severityColor = "red.500";
  } else if (severity >= 0.4) {
    severityColor = "orange.500";
  } else if (severity >= 0.1) {
    severityColor = "yellow.500";
  } else {
    severityColor = "green.500";
  }

  return (
    <>
      <ListItem fontSize="20px">
        {/* should be able to press someging for more info about the insecurity, create setstate for this */}
        <ListIcon as={WarningIcon} color={severityColor} />
        {insecurityLabel}
        <Text color={"darkgrey"} fontSize="15px">
          {instance1 != null && instance2 != null
            ? " mellom " + instance1 + " og " + instance2
            : ""}
        </Text>
        {/* If there are instances, these should somehow link to instance page */}
      </ListItem>
    </>
  );
};

export default InsecurityList;
