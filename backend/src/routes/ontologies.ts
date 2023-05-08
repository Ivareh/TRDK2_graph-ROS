import { Router } from "express";
import { verifyRequestQueryParams } from "../common/router";
import getAnnotations from "../database/getAnnotations";
import getClassesByString from "../database/getClassesByString";
import getRelations from "../database/getRelations";
import getSubclasses from "../database/getSubclasses";
import getBusinessAreas from "../database/getBusinessAreas";
import {
  AnnotationResponse,
  ClassIdRequest,
  EmptyRequest,
  NodeArrayResponse,
  OntologyArrayResponse,
  RegexRequest,
  BusinessAreaArrayResponse,
} from "../types/routerTypes";
import onError from "./middleware/onError";

const router = Router();

const getRelationsFromClass = async (
  req: ClassIdRequest,
  res: OntologyArrayResponse
) => {
  try {
    const data = await getRelations(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getSubclassesFromClass = async (
  req: ClassIdRequest,
  res: NodeArrayResponse
) => {
  try {
    const data = await getSubclasses(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getAnnotationsFromClass = async (
  req: ClassIdRequest,
  res: AnnotationResponse
) => {
  try {
    const data = await getAnnotations(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getBusinessAreasFromOntology = async (
  req: EmptyRequest,
  res: BusinessAreaArrayResponse
) => {
  try {
    const data = await getBusinessAreas();
    res.json(data);
  } catch (e: any) {
    console.log("WHATUPUP");
    onError(e, req, res);
  }
};

const regexSearch = async (req: RegexRequest, res: NodeArrayResponse) => {
  try {
    const searchTerm = req.query.search;
    const limitResults = req.query.limit;
    verifyRequestQueryParams(searchTerm);
    const data = await getClassesByString(searchTerm!, limitResults);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

router.get("/relations/:classId", getRelationsFromClass);
router.get("/subclasses/:classId", getSubclassesFromClass);
router.get("/annotations/:classId", getAnnotationsFromClass);
router.get("/businessAreas", getBusinessAreasFromOntology);
router.get("/search", regexSearch);

export default router;
