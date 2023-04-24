import { EnapsoGraphDBClient, EndpointOptions } from '@innotrade/enapso-graphdb-client';
import config from '../config';

export const PREFIXES = {
  OWL: EnapsoGraphDBClient.PREFIX_OWL,
  RDF: EnapsoGraphDBClient.PREFIX_RDF,
  RDFS: EnapsoGraphDBClient.PREFIX_RDFS,
  XSD: EnapsoGraphDBClient.PREFIX_XSD,
  PROTONS: EnapsoGraphDBClient.PREFIX_PROTONS,
  TRDK2: {
    prefix: 'TRDK2',
    iri: 'http://www.semanticweb.org/TRDK2_graph-ROS/ontologies/2023/inf#',
  },
  SCHEMA: {
    prefix: 'schema',
    iri: 'http://schema.org/',
  },
};

export default new EnapsoGraphDBClient.Endpoint({
  baseURL: config.GRAPHDB_BASE_URL,
  repository: config.GRAPHDB_REPOSITORY,
} as EndpointOptions);
