import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

export default (municipalityCode: string, factor: number): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2);

  const minFactor = 1.0 - factor;
  const maxFactor = 1.0 + factor;

  return `
      ${prefixString}
      SELECT ?name ?code ?population
      WHERE {
        ?mun rdf:type TRDK2:Municipality.
        ?mun TRDK2:municipalityPopulation ?population.
        ?mun TRDK2:municipalityCode ?code.
        ?mun rdfs:label ?name.

        ?currentMun rdf:type TRDK2:Municipality.
        ?currentMun TRDK2:municipalityPopulation ?currentPop.
        ?currentMun TRDK2:municipalityCode "${municipalityCode}".

        BIND(xsd:long((xsd:double(?currentPop) * xsd:double(${minFactor}))) as ?minPop).
        BIND(xsd:long((xsd:double(?currentPop) * xsd:double(${maxFactor}))) as ?maxPop).

        FILTER(xsd:long(?population) >= ?minPop).
        FILTER(xsd:long(?population) <= ?maxPop).
        FILTER(?mun != ?currentMun).
      }`;
};
