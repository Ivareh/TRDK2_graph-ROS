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
  HStack,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import InsecurityList from "./InsecurityList";
import { InsecureRelation } from "../dummyTypes/OntologyTypes";
import DummyInsecurities from "../dummyTypes/DummyInsecurities";
/**
 * data imports I would assume needed:
 * import {
  getInsecurities,
  getEntitiy,
} from '../../api/ontologies';
 */

const InsecurityView = () => {
  const DI: Array<InsecureRelation> = DummyInsecurities();
  const [insecureRelations, setInsecuritieRelations] = useState(DI);
  /* 
  some borrowed and inspired by SDGs SubGoaldsGrid and DetailView
  const [insecureRelations, setInsecuritieRelations] = useState<Array<InsecureRelation>>([]); 
  
  const loadInsecurities = async () => {
    if (!selectedNode) return;
    const data = await getInsecurities(selectedNode.id);
    setInsecureRelations(data);
  };

    useEffect(() => {
    loadInsecurities();
  }, [selectedNode]);
 */
  if (!insecureRelations || insecureRelations.length === 0) {
    return <Text>Fant ingen usikkerheter</Text>;
  }

  return (
    <>
      <Flex>
        <Box margin={25} borderWidth="1px" borderColor={"tomato"}>
          <List margin={5}>
            <ListItem>
              <ListIcon as={WarningIcon} color="green.500" />
              Litt usikker relasjon
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="yellow.500" />
              Litt mer usikker relasjon
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="orange.500" />
              Ganske usikker relasjon
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.500" />
              Veldig usikker relasjon
            </ListItem>
          </List>
        </Box>

        <Center>
          <List
            spacing={3}
            marginBottom={25}
            marginX={25} /* marginTop={-125} */
          >
            {insecureRelations.map((i: InsecureRelation) => (
              <InsecurityList
                instance1={i.instance1}
                instance2={i.instance2}
                insecurityLabel={i.label}
                insecuritySeverity={i.severity}
              />
            ))}
          </List>
        </Center>
      </Flex>
    </>
  );
};

export default InsecurityView;
