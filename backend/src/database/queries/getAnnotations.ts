import {
  mapIdToOntologyEntity,
  parseOntologyEntityToQuery,
  parsePrefixesToQuery,
} from "../../common/database";
import { PREFIXES } from "../index";

export default (classId: string): string => {
  const node = mapIdToOntologyEntity(classId);
  if (!node) return "";

  const fullClassName = parseOntologyEntityToQuery(node);
  const prefixString = parsePrefixesToQuery(node.prefix, PREFIXES.RDFS);

  return `
    ${prefixString}
    select *
    where { 
    { 
         ${fullClassName} rdfs:label ?label.
    Optional {
         ${fullClassName} TRDK2:description ?description.
    }
    Optional {
         ${fullClassName} TRDK2:moreInformation ?moreInformation.
    }
    }
   } `;
};
