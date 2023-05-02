import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

export default (username: string): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2);

  return `
      ${prefixString}
      SELECT ?role
      WHERE {
        ?user TRDK2:username "${username}".
        ?user TRDK2:userHasRole ?role.
      }`;
};
