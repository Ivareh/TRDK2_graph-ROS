import React, { useEffect, useState } from "react";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBusinessAreas } from "../../api/ontologies";
import { mapBusinessAreaToNode } from "../../common/node";
import { setError } from "../../state/reducers/apiErrorReducer";
import { selectNode } from "../../state/reducers/ontologyReducer";
import { BusinessArea } from "../../types/ontologyTypes";
import IconContainer from "./IconContainer";
import DummyData from "../../dummyTypes/DummyData";
import { MunicipalityEntity } from "../../dummyTypes/OntologyTypes";

/**
 *
 * Hentet fra SustainabilityGoalView i https://github.com/vemund0507/SDG-ontology-visualizer
 */
const BusinessAreaView: React.FC = () => {
  const DD: Array<MunicipalityEntity> = DummyData();
  const [businessAreas, setBusinessAreas] = useState<Array<MunicipalityEntity>>(DD);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickBA = (ba: BusinessArea) => {
    const node = mapBusinessAreaToNode(ba);
    if (!node) {
      dispatch(setError(new Error("Could not map business area to node")));
      return;
    }
    dispatch(selectNode(node));
  };

  return (
    <Stack align="center" spacing="20">
      {/* BAView: her skal alle IconContainers vises i en grid: */}
      <SimpleGrid columns={3} spacing={20} marginBottom={150} marginTop={25}>
        {businessAreas &&
          businessAreas.map((ba) => (
            <IconContainer
              icon={ba.icon}
              instancesOf={ba.instancesOf}
              label={ba.label}
            />
          ))}
      </SimpleGrid>
    </Stack>
  );
};

export default BusinessAreaView;
