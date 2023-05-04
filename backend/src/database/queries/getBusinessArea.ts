import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

export default (): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2, PREFIXES.RDFS);

  return `
      ${prefixString}
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX schema: <http://schema.org/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
      PREFIX TRDK2: <http://www.semanticweb.org/TRDK2_graph-ROS/ontologies/2023#>
      SELECT ?instancesOf ?label ?icon ?type
            WHERE { 
              ?instancesOf  rdf:type TRDK2:MunicipalityBusinessArea.
              ?instancesOf  rdfs:label  ?label.
              OPTIONAL { ?instancesOf sesame:directType ?TypeRaw.
              }
          } ORDER BY ( xsd:string ( STRBEFORE ( STR ( ?instancesOf ), "B" ) ) )
          ( xsd:long ( STRAFTER ( STR ( ?instancesOf ), "B" ) ) )
};
