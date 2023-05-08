import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

export default (): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2);

  return `
      ${prefixString}
      SELECT ?name ?code ?population
      WHERE {
        ?mun rdf:type TRDK2:Municipality.
        ?mun TRDK2:municipalityPopulation ?population.
        ?mun TRDK2:municipalityCode ?code.
        ?mun rdfs:label ?name.
      }`;
};
