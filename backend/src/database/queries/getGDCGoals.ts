import { parsePrefixesToQuery } from "../../common/database";
import { PREFIXES } from "../index";

export default (
  municipality: string,
  baselineMunicipality: string,
  overrideMode: string
): string => {
  const prefixString = parsePrefixesToQuery(
    PREFIXES.TRDK2,
    PREFIXES.SCHEMA,
    PREFIXES.RDFS
  );

  if (overrideMode === "absolute") {
    return `
        ${prefixString}

        SELECT ?kpi ?baseline ?baselineYear ?target ?deadline ?startRange ?dataseries ?calculationMethod
        WHERE {
            ?indicator rdf:type TRDK2:U4SSCIndicator.
            ?indicator TRDK2:kpiNumber ?kpi.
            
            ?goal rdf:type TRDK2:U4SSCIndicatorGoal.
            ?goal TRDK2:goalDeadline ?deadline.
            ?goal TRDK2:goalTarget ?target.
            ?goal TRDK2:goalStartRange ?startRange.

            ?goal TRDK2:isGoalForMunicipality ?municipality.
            ?goal TRDK2:isGoalForDataseries ?ds.

            ?baselineGoal rdf:type TRDK2:U4SSCIndicatorGoal.
            ?baselineGoal TRDK2:goalBaseline ?baseline.
            ?baselineGoal TRDK2:goalBaselineYear ?baselineYear.

            ?baselineGoal TRDK2:isGoalForMunicipality ?baselineMuni.
            ?baselineGoal TRDK2:isGoalForDataseries ?ds.

            ?ds TRDK2:isDataSeriesFor ?indicator.
            ?ds TRDK2:dataseriesScoreCalculationMethod ?calculationMethod.

            OPTIONAL {
              ?ds TRDK2:dataseriesVariant ?dataseries.
            }

            ?municipality TRDK2:municipalityCode "${municipality}".
            ?baselineMuni TRDK2:municipalityCode "${baselineMunicipality}".
        }`;
  }

  return `
        ${prefixString}
        PREFIX ofn: <http://www.ontotext.com/sparql/functions/>

        SELECT ?kpi ?baseline ?baselineYear ?target ?deadline ?startRange ?dataseries ?calculationMethod
        WHERE {
            ?indicator rdf:type TRDK2:U4SSCIndicator.
            ?indicator TRDK2:kpiNumber ?kpi.
            
            ?goal rdf:type TRDK2:U4SSCIndicatorGoal.
            ?goal TRDK2:goalDeadline ?deadline.
            ?goal TRDK2:goalTarget ?goalTarget.
            ?goal TRDK2:goalStartRange ?startRange.
            ?goal TRDK2:goalBaseline ?targetBaseline.

            ?goal TRDK2:isGoalForMunicipality ?municipality.
            ?goal TRDK2:isGoalForDataseries ?ds.

            BIND(ofn:max(?targetBaseline, 0.01) as ?targetDenom).
            BIND(?goalTarget / ?targetDenom as ?targetFract).
            BIND(?targetFract * ?baseline as ?target).

            ?baselineGoal rdf:type TRDK2:U4SSCIndicatorGoal.
            ?baselineGoal TRDK2:goalBaseline ?baseline.
            ?baselineGoal TRDK2:goalBaselineYear ?baselineYear.

            ?baselineGoal TRDK2:isGoalForMunicipality ?baselineMuni.
            ?baselineGoal TRDK2:isGoalForDataseries ?ds.

            ?ds TRDK2:isDataSeriesFor ?indicator.
            ?ds TRDK2:dataseriesScoreCalculationMethod ?calculationMethod.

            OPTIONAL {
              ?ds TRDK2:dataseriesVariant ?dataseries.
            }

            ?municipality TRDK2:municipalityCode "${municipality}".
            ?baselineMuni TRDK2:municipalityCode "${baselineMunicipality}".
        }`;
};
