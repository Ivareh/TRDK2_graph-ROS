import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

export default (
  municipality: string,
  kpi: string,
  indicatorName: string,
  dataseries: string,
  target: number,
  deadline: number,
  baseline: number,
  baselineYear: number,
  startRange: number,
  isDummy: boolean,
): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2, PREFIXES.SCHEMA, PREFIXES.RDFS);

  const dummyDataString = isDummy ? '?uri TRDK2:isDummyData true.' : '';
  const dataseriesVariant =
    dataseries === undefined || dataseries === 'main'
      ? ''
      : `?dataseries TRDK2:dataseriesVariant "${dataseries}".`;

  return `
    ${prefixString}
    insert {
      ?uri rdf:type TRDK2:U4SSCIndicatorGoal .
      ?uri TRDK2:goalStartRange ${startRange}.
      ?uri TRDK2:goalBaseline ${baseline}.
      ?uri TRDK2:goalBaselineYear ${baselineYear}.
      ?uri TRDK2:goalTarget ${target}.
      ?uri TRDK2:goalDeadline ${deadline}.

      ?uri TRDK2:isGoalForMunicipality ?municipality.
      ?uri TRDK2:isGoalForDataseries ?dataseries.

      ${dummyDataString}
   }
   where {
      BIND(IRI("http://www.semanticweb.org/aga/ontologies/2017/9/TRDK2#goals.u4ssc.${dataseries}.${municipality}") as ?uri)

      ?municipality TRDK2:municipalityCode "${municipality}".

      ?dataseries TRDK2:isDataSeriesFor ?indicator.

      ${dataseriesVariant}

      ?indicator TRDK2:kpiNumber "${kpi}".
   }`;
};
