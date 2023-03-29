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
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { InsecureRelation } from "../dummyTypes/OntologyTypes";
import { stringify } from "querystring";
/**
   * data imports I would assume needed:
   * import {
    getInsecurities,
    getEntitiy,
  } from '../../api/ontologies';
  import { Annotation, Node, InsecureRelation } from '../../types/ontologyTypes';
   */

/**
 * A list of all insecurities within the system. Ranged by assumed severity (0.1 = low, 0.7 = high).
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

  /* not sure if state and hook is necessary?
    
    const [severityColour, setSeverityColour] = useState<String>("green.500"); 
    
    const getSeverity() => {
      const severity = insecuritySeverity;
      let colour : string = "";
      if  (severity >= 0.7) {
        colour = "red.500"
      } else if (severity >= 0.4) {
        colour = "orange.500"
      } else if (severity >= 0.1) {
        colour = "yellow.500"
      } else {
        colour = "green.500"
      }
      setSeverityColour(colour);
    };
  
    useEffect(() => {
    getSeverity();
    }, []); */

  return (
    <>
      <ListItem>
        <ListIcon as={WarningIcon} color={severityColor} />
        {insecurityLabel}
      </ListItem>
    </>
  );
  /*   <Menu closeOnSelect={false} closeOnBlur autoSelect={false}>
      <MenuButton
        as={Button}
        bg="white"
        size="sm"
        color="cyan.700"
        minW="13.5em"
        rightIcon={<ChevronDownIcon />}
      >
        {isPositive ? "Positive " : "Negative "}
        virkninger
      </MenuButton>
      <MenuList bg="cyan.700">
        <CorrelationCheckbox text="Lav" isPositive={isPositive} index={0} />
        <CorrelationCheckbox text="Moderat" isPositive={isPositive} index={1} />
        <CorrelationCheckbox text="Høy" isPositive={isPositive} index={2} />
      </MenuList>
    </Menu> */
};

export default InsecurityList;
