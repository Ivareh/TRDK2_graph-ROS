import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

/**
 * Returns SPARQL Query for getting all datapoints for a municipality.
 */
export default (municipality: string): string => {
  const prefixString = parsePrefixesToQuery(
    PREFIXES.TRDK2,
    PREFIXES.SCHEMA,
    PREFIXES.RDFS
  );

  return `
        ${prefixString}
        SELECT ?kpiNumber ?value ?year ?dataseriesVariant
        WHERE {
            ?ind rdf:type TRDK2:U4SSCIndicator.
            ?ind TRDK2:kpiNumber ?kpiNumber.
            ?ds TRDK2:isDataSeriesFor ?ind.
            ?dp TRDK2:datapointForSeries ?ds.
            ?dp TRDK2:datapointValue ?value.
            ?dp TRDK2:datapointYear ?year.

            ?municipality TRDK2:municipalityCode "${municipality}".
            ?dp TRDK2:datapointForMunicipality ?municipality.

            OPTIONAL {
                ?ds TRDK2:dataseriesVariant ?dataseriesVariant.
            }
        }`;
};
