import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

export default (municipality: string, endYear: number): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2, PREFIXES.SCHEMA, PREFIXES.RDFS);

  return `
        ${prefixString}
        SELECT ?kpi ?year ?value ?dataseries
        WHERE {
            BIND(${endYear} as ?endYear).

            ?ind rdf:type TRDK2:U4SSCIndicator.
            ?ind TRDK2:kpiNumber ?kpi.
            
            ?ds TRDK2:isDataSeriesFor ?ind.
            
            ?dp TRDK2:datapointForSeries ?ds.
            ?dp TRDK2:datapointValue ?value.
            ?dp TRDK2:datapointYear ?year.

            ?dp TRDK2:datapointForMunicipality ?mun.
            ?mun TRDK2:municipalityCode "${municipality}".

            Optional {
              ?ds TRDK2:dataseriesVariant ?dataseries.
            }

            FILTER(?year <= ?endYear).
        }`;
};
