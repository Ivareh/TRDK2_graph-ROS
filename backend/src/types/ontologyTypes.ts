import { Prefix } from "@innotrade/enapso-graphdb-client";

export interface OntologyEntity {
  prefix: Prefix;
  id: string;
  name: string;
}

export interface Node extends OntologyEntity {
  type: string;
  correlation: number; // -3 High Negative, -2 Moderat N, -1 = low N, 0= undefined, 1 = Low Posetiv, 2 = medium P, 3 = high P
}

export interface Edge extends OntologyEntity {
  correlation: number; // -3 High Negative, -2 Moderat N, -1 = low N, 0= undefined, 1 = Low Posetiv, 2 = medium P, 3 = high P
}

export type Ontology = {
  Subject: Node | null;
  Object: Node | null;
  Predicate: Edge | null;
};

export type Annotation = {
  label: string;
  description: string;
  moreInformation: string | null;
};

export type BusinessArea = {
  instancesOf: string;
  label: string;
  icon: string;
  type: string;
};

export type Record = {
  Subject: string | null;
  SubjectLabel: string | null;
  Object: string | null;
  ObjectLabel: string | null;
  TypeLabel: string | null;
  Predicate: string;
}