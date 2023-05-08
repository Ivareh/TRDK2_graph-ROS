import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

export default (code: string): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2);

  return `
      ${prefixString}
      SELECT ?uri
      WHERE {
        BIND("${code}" as ?code).
        ?uri rdf:type TRDK2:Municipality.
        ?uri TRDK2:municipalityCode ?code.
      }`;
};
