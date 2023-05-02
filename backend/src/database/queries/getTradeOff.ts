import {
  mapIdToOntologyEntity,
  parseOntologyEntityToQuery,
  parsePrefixesToQuery,
} from '../../common/database';
import { PREFIXES } from '../index';

export default (nodeId: string): string => {
  const node = mapIdToOntologyEntity(nodeId);
  if (!node) return '';

  const fullNodeName = parseOntologyEntityToQuery(node);
  const prefixString = parsePrefixesToQuery(node.prefix, PREFIXES.RDFS);

  return `
    ${prefixString}
    SELECT ?Object ?ObjectLabel ?High ?Moderate ?Low 
      WHERE { 
      ${fullNodeName} TRDK2:harTradeOffTil ?Object.
      ?Object rdfs:label ?ObjectLabel
      Optional {
          ?Object TRDK2:harHøyTradeOffTil ${fullNodeName}.
          ?Object rdfs:label ?High }

      Optional {
          ?Object TRDK2:harModeratTradeOffTil ${fullNodeName}.
          ?Object rdfs:label ?Moderate }

      Optional {
          ?Object TRDK2:harLavTradeOffTil ${fullNodeName}.
          ?Object rdfs:label ?Low }
    }`;
};
