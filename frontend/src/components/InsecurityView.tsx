import {
  Box,
  Center,
  List,
  ListItem,
  ListIcon,
  Text,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useState } from "react";
import InsecurityList from "./InsecurityList";
import { InsecureRelation } from "../dummyTypes/OntologyTypes";
import DummyInsecurities from "../dummyTypes/DummyInsecurities";
/**
  data imports I would assume needed:
  import {
  getInsecurities,
  getEntitiy,
} from '../../api/ontologies';
 */

const InsecurityView = () => {
  const DI: Array<InsecureRelation> = DummyInsecurities();
  const [insecureRelations, setInsecuritieRelations] = useState(DI);
  /* 
  some borrowed and inspired by SDGs SubGoaldsGrid and DetailView https://github.com/TDT4290-SDG-Ontology/SDG-ontology-visualizer/
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
      <Wrap spacing={"25px"}>
        <WrapItem>
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
        </WrapItem>
        <WrapItem>
          <Center>
            <List
              spacing={3}
              marginY={25}
              marginX={25}
              /* marginRight={25}
              marginLeft={"20%"}  */
            >
              {insecureRelations.map((insecure: InsecureRelation, k) => (
                <InsecurityList
                  key={k}
                  instance1={insecure.instance1}
                  instance2={insecure.instance2}
                  insecurityLabel={insecure.label}
                  insecurityDetails={insecure.details}
                  insecuritySeverity={insecure.severity}
                />
              ))}
            </List>
          </Center>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default InsecurityView;
