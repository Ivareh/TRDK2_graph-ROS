import React, { useEffect, useState } from "react";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
/* import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBusinessAreas } from '../../api/ontologies';
import { mapBusinessAreaToNode } from '../../common/node';
import { setError } from '../../state/reducers/apiErrorReducer';
import { selectNode } from '../../state/reducers/ontologyReducer';
import { BusinessArea } from '../../types/ontologyTypes'; */
import IconContainer from "./IconContainer";
import DummyData from "../../dummyTypes/DummyData";
import { MunicipalityEntity } from "../../dummyTypes/OntologyTypes";

/**
 *
 * @returns Hentet fra SustainabilityGoalView, justert navn til vårt prosjekt:
 */
const BusinessAreaView: React.FC = () => {
  const DD: Array<MunicipalityEntity> = DummyData();
  const [businessAreas, setBusinessAreas] = useState(DD);
  /* const [businessAreas, setBusinessAreas] =
    useState<Array<MunicipalityEntity>>(); */

  /* const dispatch = useDispatch();
  const history = useHistory();*/

  /*
  const loadBusinessAreas = async () => {
        const data = await getBusinessAreas();
    getBusinessAreas(data); 
  };

  useEffect(() => {
    loadBusinessAreas();
  }, []);*/

  /*   const onClickBA = (ba: BusinessArea) => {
    const node = mapBusinessAreaToNode(ba);
    if (!node) {
      dispatch(setError(new Error("Could not map business area to node")));
      return;
    }
    dispatch(selectNode(node));
  }; */

  return (
    <Stack align="center" spacing="20">
      <Text>BAView: her skal alle IconContainers vises i en grid:</Text>
      <SimpleGrid columns={[2, 2, 3, null, 4]} spacing={10}>
        {businessAreas &&
          businessAreas.map((ba) => (
            <IconContainer
              icon={ba.icon}
              instancesOf={ba.instancesOf}
              label={ba.label}
              /* onClick={() => {
                onClickBA(ba);
                window.scrollTo(0, 0);
                history.push("/ontology"); 
              }} */
              /*  businessAreaNode={ba} */
            />
          ))}
        {/*  <IconContainer /> */}
      </SimpleGrid>
    </Stack>
  );
};
export default BusinessAreaView;
