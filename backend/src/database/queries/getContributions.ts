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
  const prefixString = parsePrefixesToQuery(node.prefix, PREFIXES.RDFS);

  return `
    ${prefixString}
    SELECT *
    WHERE { 
      ${fullNodeName} TRDK2:harBidragTil ?Object.
      ?Object rdfs:label ?ObjectLabel
      Optional {
        ?Object TRDK2:harHøyKorrelasjon ${fullNodeName}.
        ?Object rdfs:label ?High }

     Optional {
      ?Object TRDK2:harModeratKorrelasjon ${fullNodeName}.
      ?Object rdfs:label ?Moderate }
  
     Optional {
      ?Object TRDK2:harLavKorrelasjon ${fullNodeName}.
      ?Object rdfs:label ?Low }
  

  }`;
};
