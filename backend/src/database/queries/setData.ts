import { DataPoint } from 'types/ontologyTypes';
import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

export default (obj: DataPoint): string => {
  const prefixString = parsePrefixesToQuery(
    PREFIXES.RDF,
    PREFIXES.OWL,
    PREFIXES.TRDK2,
  );
  const dummyDataString = obj.isDummy ? '?uri TRDK2:isDummyData true.' : '';
  const dataseriesVariant =
    obj.dataseries === undefined || obj.dataseries === 'main'
      ? ''
      : `?dataseries TRDK2:dataseriesVariant "${obj.dataseries}".`;

  const dataseries =
    obj.indicatorName +
    (obj.dataseries === undefined || obj.dataseries === 'main' ? '' : `.${obj.dataseries}`);

  return `
    ${prefixString}
    insert {
      ?uri rdf:type TRDK2:Datapoint .
      ?uri TRDK2:datapointForSeries ?dataseries.
      ?uri TRDK2:datapointForMunicipality ?municipality.
      ?uri TRDK2:datapointYear ${obj.year}.
      ?uri TRDK2:datapointValue ${obj.data}.

      ${dummyDataString}
   }
   where {
      BIND(IRI(CONCAT("http://www.semanticweb.org/aga/ontologies/2017/9/TRDK2#datapoint.u4ssc.${dataseries}.${obj.municipality}.${obj.year}")) as ?uri)
      BIND(${obj.year} as ?year)

      ?municipality TRDK2:municipalityCode "${obj.municipality}".

      ?dataseries TRDK2:isDataSeriesFor ?indicator.

      ${dataseriesVariant}

      ?indicator TRDK2:kpiNumber "${obj.indicatorId}".
   }`;
};
