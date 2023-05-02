import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

export default (): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2);

  return `
      ${prefixString}
      SELECT ?role
      WHERE {
        ?r TRDK2:rolename ?role.
      }`;
};
