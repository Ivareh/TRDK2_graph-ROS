import DB from "./index";
import { BusinessArea } from "../types/ontologyTypes";
import getBusinessAreas from "./queries/getBusinessArea";

export default async (): Promise<Array<BusinessArea>> => {
  const query = getBusinessAreas();
  return DB.query(query, { transform: "toJSON" }).then((resp) => resp.records);
};
