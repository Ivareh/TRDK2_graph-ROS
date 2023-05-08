import {
  Edge,
  GraphEdge,
  Node,
  Prefix,
  BusinessArea,
  CorrelationFilter,
  KpiFilter,
} from "../types/ontologyTypes";
import { D3Edge } from "../types/d3/simulation";

// From https://github.com/TDT4290-SDG-Ontology/SDG-ontology-visualizer/

export const mapPrefixNameToNode = (
  prefix: string,
  name: string,
  correlation?: number,
  type?: string
): Node => ({
  prefix: {
    prefix,
    iri: `http://www.semanticweb.org/TRDK2_graph-ROS/ontologies/2023/${prefix}#`,
  },
  name,
  id: `http://www.semanticweb.org/TRDK2_graph-ROS/ontologies/2023/${prefix}#${name}`,
  correlation: correlation || -1,
  type: type || "undefined",
});

export const parseNameFromClassId = (id: string): string => {
  const regex = /^[^_]*#/;
  const name = id.replace(regex, "");
  if (!name || name === id) return "";
  return name;
};

export const parsePrefixFromClassId = (id: string): Prefix | null => {
  const prefixRegex = /(?<=\/)([^/]*)(?=#)/;
  const prefixMatches = id.match(prefixRegex);
  if (!prefixMatches || !prefixMatches[0]) return null;

  const iriRegex = /^[^_]*#/;
  const iriMatches = id.match(iriRegex);
  if (!iriMatches || !iriMatches[0]) return null;

  return {
    prefix: prefixMatches[0],
    iri: iriMatches[0],
  };
};

export const mapIdToNode = (
  id: string,
  correlation?: number,
  type?: string
): Node | null => {
  const prefix = parsePrefixFromClassId(id);
  const name = parseNameFromClassId(id);
  if (!prefix || !name) return null;
  return {
    prefix,
    name,
    id,
    correlation: correlation || -1,
    type: type || "undefined",
  };
};

export const mapBusinessAreaToNode = (TRDK2: BusinessArea): Node | null => {
  const node = mapIdToNode(TRDK2.instancesOf);
  if (!node) return null;
  node.name = TRDK2.label;
  node.type = TRDK2.type;
  return node;
};

export const mapIdToEdge = (id: string, correlation: number): Edge | null => {
  const prefix = parsePrefixFromClassId(id);
  const name = parseNameFromClassId(id);
  if (!prefix || !name) return null;
  return {
    prefix,
    name,
    id,
    correlation,
  };
};

export const mapCorrelationToName = (correlation: number) => {
  switch (correlation) {
    case 3:
      return "høy";
    case 2:
      return "moderat";
    case 1:
      return "lav";
    default:
      return "";
  }
};

export const mapCorrelationToColor = (correlation: number) => {
  switch (correlation) {
    case 3:
      return ".800";
    case 2:
      return ".700";
    case 1:
      return ".600";
    default:
      return ".600";
  }
};

export const isWithinCorrelationLimit = (
  edge: D3Edge | GraphEdge,
  filter: CorrelationFilter
): boolean => {
  if (edge.correlation === 1 && filter.pLow) return true;
  if (edge.correlation === 2 && filter.pMedium) return true;
  if (edge.correlation === 3 && filter.pHigh) return true;
  if (edge.correlation === -1 && filter.nLow) return true;
  if (edge.correlation === -2 && filter.nMedium) return true;
  if (edge.correlation === -3 && filter.nHigh) return true;
  if (edge.correlation === 0) {
    return true;
  }
  return false;
};
