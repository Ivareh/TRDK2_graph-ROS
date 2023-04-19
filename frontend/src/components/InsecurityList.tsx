import {
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useState } from "react";
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
  insecurityDetails: string | null;
  insecuritySeverity: number;
}

const InsecurityList: React.FC<InsecurityProps> = ({
  instance1,
  instance2,
  insecurityLabel,
  insecurityDetails,
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

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  /**
   
   */

  return (
    <>
      <ListItem fontSize="20px" onClick={handleClick}>
        {/* should be able to press someging for more info about the insecurity, create setstate for this */}
        <ListIcon
          as={WarningIcon}
          color={severityColor}
          onClick={handleClick}
        />
        {insecurityLabel}
        <Text color={"darkgrey"} fontSize="15px">
          {instance1 != null && instance2 != null
            ? " mellom " + instance1 + " og " + instance2
            : ""}
        </Text>
        {isOpen ? (
          <Text fontSize="15px" as={"i"}>
            {insecurityDetails}
          </Text>
        ) : (
          <></>
        )}
        {/* If there are instances, these should somehow link to instance page */}
        {/* {insecurityDetails ? (<Text fontSize="15px" as={"i"}> {insecurityDetails} </Text> ): (<Text fontSize="15px" as={"i"}>Ingen detaljer</Text>)} */}
      </ListItem>
    </>
  );
};

export default InsecurityList;
