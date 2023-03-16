
/**
 * Copied from ontologyTypes in SDG-ontology-visualozer. 
 * Only changed name of SustainabilityGoal to MunicipalityEnity.
 */

export type Annotation = {
    label: string;
    description: string;
    moreInformation: string | null;
  };

export type MunicipalityEntity = {
    instancesOf: string;
    label: string;
    icon: string;
  };

  export interface SubGoal extends Node {
    SubjectLabel: string;
    description: string;
  }
  
  export interface UniqueObject {
    id: string;
  }
  
  export interface Node extends UniqueObject {
    name: string;
    type: string;
    prefix: Prefix;
    correlation: number;
  }
  
  export interface GraphNode extends Node{
    isLocked?: boolean;
    lockedX?: number;
    lockedY?: number;
    color?: string;
    type: string;
  }
  
  export interface Edge extends UniqueObject {
    name: string;
    prefix: Prefix;
    correlation: number;
  }
  
  export interface GraphEdge extends Edge {
    source: string;
    target: string;
    sourceToTarget: Edge[];
    targetToSource: Edge[];
  }
  
  export type Ontology = {
    Subject: Node;
    Object: Node;
    Predicate: Edge;
  };
  
  export type Prefix = {
    prefix: string;
    iri: string;
  };
  
  export type CorrelationFilter = {
    pLow: boolean;
    pMedium: boolean;
    pHigh: boolean;
    nLow: boolean;
    nMedium: boolean;
    nHigh: boolean;
  };