import { DataPoint } from 'types/ontologyTypes';
import { ApiError } from '../types/errorTypes';
import DB from './index';

export default async (newDataPoint: DataPoint): Promise<any> => {
  if (!newDataPoint) {
    throw new ApiError(400, 'Could not parse ontology entity from the given class ID');
  }
};
