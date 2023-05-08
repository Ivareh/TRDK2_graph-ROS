import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

export default (): string => {
  const prefixString = parsePrefixesToQuery(
    PREFIXES.TRDK2,
    PREFIXES.RDF,
    PREFIXES.SCHEMA,
    PREFIXES.XSD,
    PREFIXES.RDFS
  );

  return `
      ${prefixString}
      SELECT ?instancesOf ?label 
      WHERE { 
          ?instancesOf  rdf:type TRDK2:AllUncertainties.
      } ORDER BY ( xsd:string ( STRBEFORE ( STR ( ?instancesOf ), "B" ) ) )
      ( xsd:long ( STRAFTER ( STR ( ?instancesOf ), "B" ) ) )
}`;
};
