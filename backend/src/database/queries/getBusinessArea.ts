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
      SELECT ?instancesOf ?label ?icon ?type
      WHERE { 
        ?instancesOf  rdf:type TRDK2:MunicipalityBusinessArea.
        ?instancesOf  rdfs:label  ?label.
        ?instancesOf  schema:icon  ?icon.
        OPTIONAL { ?instancesOf sesame:directType ?TypeRaw.
          ?TypeRaw rdfs:label ?type}

          FILTER NOT EXISTS { 
           ?instancesOf rdf:type ?c . 
           ?c rdfs:subClassOf + TRDK2:MunicipalityBusinessArea.
           FILTER (?c != TRDK2:MunicipalityBusinessArea )  
      }
    } ORDER BY ( xsd:string ( STRBEFORE ( STR ( ?instancesOf ), "B" ) ) )
    ( xsd:long ( STRAFTER ( STR ( ?instancesOf ), "B" ) ) )`;
};
