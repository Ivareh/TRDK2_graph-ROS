import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

/**
 * Returns SPARQL Query for getting all datapoints for a municipality.
 */
export default (municipality: string): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2, PREFIXES.SCHEMA, PREFIXES.RDFS);

  return `
        ${prefixString}
        SELECT DISTINCT ?year
        WHERE {
            ?dp TRDK2:datapointYear ?year.
            ?municipality TRDK2:municipalityCode "${municipality}".
            ?dp TRDK2:datapointForMunicipality ?municipality.
        }`;
};
