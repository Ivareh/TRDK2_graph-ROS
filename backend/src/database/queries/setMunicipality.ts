import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

export default (code: string, name: string, population: number): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2);
  return `
    ${prefixString}
    insert {
      ?uri rdf:type TRDK2:Municipality.
      ?uri TRDK2:municipalityPopulation ${population}.
      ?uri TRDK2:municipalityCode "${code}".
      ?uri rdfs:label "${name}".
   }
   where {
    BIND(IRI("http://www.semanticweb.org/aga/ontologies/2017/9/TRDK2#municipality.${code}") as ?uri).
   }`;
};
