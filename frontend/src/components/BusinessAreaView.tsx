import React, { useEffect, useState } from "react";
import { SimpleGrid, Stack } from "@chakra-ui/react";
/* import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBusinessAreas } from '../../api/ontologies';
import { mapBusinessAreaToNode } from '../../common/node';
import { setError } from '../../state/reducers/apiErrorReducer';
import { selectNode } from '../../state/reducers/ontologyReducer';
import { BusinessArea } from '../../types/ontologyTypes'; */
import IconContainer from "../components/homepage/IconContainer";

/**
 *
 * @returns Hentet fra SustainabilityGoalView, justert navn til vårt prosjekt:
 */
const BusinessAreaView: React.FC = () => {
  /* const [businessAreas, setBusinessAreas] = useState<Array<BusinessArea>>(); 
  const dispatch = useDispatch();
  const history = useHistory();*/

  const loadSustainabilityGoals = async () => {
    /*     const data = await getBusinessAreas();
    getBusinessAreas(data); */
  };

  useEffect(() => {
    loadSustainabilityGoals();
  }, []);

  /*   const onClickSDG = (sdg: BusinessArea) => {
    const node = mapBusinessAreaToNode(sdg);
    if (!node) {
      dispatch(setError(new Error("Could not map business area to node")));
      return;
    }
    dispatch(selectNode(node));
  }; */

  return (
    <Stack align="center" spacing="20">
      <SimpleGrid columns={[2, 2, 3, null, 4]} spacing={10}>
        {/*         {businessAreas &&
          businessAreas.map((sdg) => (
            <IconContainer
              key={sdg.instancesOf}
              onClick={() => {
                onClickSDG(sdg);
                window.scrollTo(0, 0);
                history.push("/ontology");
              }}
              businessAreaNode={sdg}
            />
          ))} */}
      </SimpleGrid>
    </Stack>
  );
};
export default BusinessAreaView;
