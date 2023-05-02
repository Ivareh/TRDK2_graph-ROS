import { parsePrefixesToQuery } from '../../common/database';
import { PREFIXES } from '../index';

export default (correlationCountry: string, kpi: string): string => {
  const prefixString = parsePrefixesToQuery(PREFIXES.TRDK2, PREFIXES.SCHEMA, PREFIXES.RDFS);

  return `
        ${prefixString}
        SELECT ?kpi ?correlation ?subgoal
        WHERE {
          {
            SELECT ?kpi ?correlation ?subgoal
            WHERE
            {
              ?fromKpi TRDK2:kpiNumber "${kpi}".
              ?fromKpi TRDK2:linkedTRDK2Subgoal ?fromSubgoal.

              ?corrUri TRDK2:subgoalCorrelationTo ?fromSubgoal.
              ?corrUri TRDK2:subgoalCorrelationFrom ?toSubgoal.

              ?toSubgoal rdfs:label ?subgoal.

              ?toKpi TRDK2:linkedTRDK2Subgoal ?toSubgoal.
              ?toKpi TRDK2:kpiNumber ?kpi.

              ?corrUri TRDK2:subgoalCorrelationCountry "${correlationCountry}"^^xsd:string.
              ?corrUri TRDK2:subgoalCorrelationFactor ?correlation.
            }
          } UNION {
            SELECT ?kpi ?correlation ?subgoal
            WHERE
            {
              BIND(1.0 as ?correlation).

              ?fromKpi TRDK2:kpiNumber "${kpi}".
              ?fromKpi TRDK2:linkedTRDK2Subgoal ?commonSubgoal.

              ?commonSubgoal rdfs:label ?subgoal.

              ?toKpi TRDK2:linkedTRDK2Subgoal ?commonSubgoal.
              ?toKpi TRDK2:kpiNumber ?kpi.

              FILTER(?fromKpi != ?toKpi).
            }
          }
        }`;
};
