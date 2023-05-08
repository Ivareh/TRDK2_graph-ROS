import {
  Annotation,
  BusinessArea,
  Node,
  Ontology,
  SubGoal,
} from "../types/ontologyTypes";
import api from "./api";

export const getRelations = async (
  nodeId: string
): Promise<Array<Ontology>> => {
  try {
    const data: Array<Ontology> = await api.GET(
      `ontologies/relations/${encodeURIComponent(nodeId)}`
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getAnnotations = async (nodeId: string): Promise<Annotation> => {
  try {
    const data: Promise<Annotation> = await api.GET(
      `ontologies/annotations/${encodeURIComponent(nodeId)}`
    );
    return await data;
  } catch (e) {
    console.log(e);
    return { label: "", description: "", moreInformation: "" };
  }
};

export const getSubclasses = async (nodeId: string): Promise<Array<Node>> => {
  try {
    const data: Array<Node> = await api.GET(
      `ontologies/subclasses/${encodeURIComponent(nodeId)}`
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getBusinessAreas = async (): Promise<Array<BusinessArea>> => {
  try {
    const data = await api.GET("ontologies/businessAreas");
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getContributions = async (
  nodeId: string
): Promise<Array<Node>> => {
  try {
    const data: Array<Node> = await api.GET(
      `ontologies/contributions/${encodeURIComponent(nodeId)}`
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const search = async (
  searchTerm: string,
  limit?: number
): Promise<Array<Node>> => {
  let url = `ontologies/search?search=${encodeURIComponent(searchTerm)}`;
  if (limit) {
    url += `&limit=${limit}`;
  }
  try {
    const data: Array<Node> = await api.GET(url);
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getDevelopmentArea = async (
  nodeId: string
): Promise<Array<Node>> => {
  try {
    const data: Array<Node> = await api.GET(
      `ontologies/developmentarea/${encodeURIComponent(nodeId)}`
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getSystemService = async (
  nodeId: string
): Promise<Array<SubGoal>> => {
  try {
    const data: Array<SubGoal> = await api.GET(
      `ontologies/systemservice/${encodeURIComponent(nodeId)}`
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
