import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

export default (username: string, password: string, role: string): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2);
  return `
    ${prefixString}
    insert {
      ?uri rdf:type TRDK2:User .
      ?uri TRDK2:username "${username}".
      ?uri TRDK2:passwordHash "${password}".
      ?uri TRDK2:userHasRole ?role.
   }
   where {
    BIND(IRI("http://www.semanticweb.org/aga/ontologies/2017/9/TRDK2#TRDK2.user.${username}") as ?uri)
    BIND(IRI("http://www.semanticweb.org/aga/ontologies/2017/9/TRDK2#TRDK2.userrole.${role}") as ?role)
   }`;
};
