import {
  mapIdToOntologyEntity,
  parseOntologyEntityToQuery,
  parsePrefixesToQuery,
} from "../../common/database";
import { PREFIXES } from "../index";

export default (nodeId: string): string => {
  const node = mapIdToOntologyEntity(nodeId);
  if (!node) return "";

  const fullNodeName = parseOntologyEntityToQuery(node);
  const prefixString = parsePrefixesToQuery(
    PREFIXES.TRDK2,
    PREFIXES.SCHEMA,
    PREFIXES.RDFS
  );

  return `
      ${prefixString}
      SELECT ?Subject ?SubjectLabel ?description
      WHERE { 
        ?Subject TRDK2:hasSystemService ${fullNodeName}.
        optional{?Subject rdfs:label ?SubjectLabel}.
        optional{?Subject TRDK2:description ?description}
}ORDER BY ( xsd:string ( STRBEFORE ( STR ( ?SubjectLabel ), "" ) ) )
( xsd:long ( STRAFTER ( STR ( ?SubjectLabel ), "" ) ) )`;
};
