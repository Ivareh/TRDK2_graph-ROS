import { Router, Request } from 'express';
import { verifyRequestQueryParams } from '../common/router';
import getAnnotations from '../database/getAnnotations';
import getClassesByString from '../database/getClassesByString';
import getContributions from '../database/getContributions';
import getDevelopmentArea from '../database/getDevelopmentArea';
import getRelations from '../database/getRelations';
import getSubclasses from '../database/getSubclasses';
import getSubGoals from '../database/getSubGoals';
import getSustainabilityGoals from '../database/getSustainabilityGoals';
import getTradeOff from '../database/getTradeOffTo';
import CheckMunicipalityByCode from '../database/CheckMunicipalityByCode';
import {
  AnnotationResponse,
  AnyResponse,
  ClassIdRequest,
  EmptyRequest,
  NodeArrayResponse,
  OntologyArrayResponse,
  RegexRequest,
  SustainbilityGoalArrayResponse,
} from '../types/routerTypes';
import onError from './middleware/onError';

const router = Router();

const getRelationsFromClass = async (req: ClassIdRequest, res: OntologyArrayResponse) => {
  try {
    const data = await getRelations(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getSubclassesFromClass = async (req: ClassIdRequest, res: NodeArrayResponse) => {
  try {
    const data = await getSubclasses(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getAnnotationsFromClass = async (req: ClassIdRequest, res: AnnotationResponse) => {
  try {
    const data = await getAnnotations(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getSustainabilityGoalsFromOntology = async (
  req: EmptyRequest,
  res: SustainbilityGoalArrayResponse,
) => {
  try {
    const data = await getSustainabilityGoals();
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getContributionsToNodes = async (req: ClassIdRequest, res: NodeArrayResponse) => {
  try {
    const data = await getContributions(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getTradeOffToNodes = async (req: ClassIdRequest, res: NodeArrayResponse) => {
  try {
    const data = await getTradeOff(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getDevelopmentAreaToNodes = async (req: ClassIdRequest, res: NodeArrayResponse) => {
  try {
    const data = await getDevelopmentArea(req.params.classId);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getSubGoalsfromSDG = async (req: Request, res: NodeArrayResponse) => {
  try {
    const data = await getSubGoals(req.params.classId);
    res.json(data);
  } catch (e: any) {
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

const checkMunicipalityByCode = async (req: Request, res: AnyResponse) => {
  try {
    const data = await CheckMunicipalityByCode(req.body.municipalityCode);
    res.json(data);
  } catch (e: any) {
    onError(e, req, res);
  }
};

router.get('/relations/:classId', getRelationsFromClass);
router.get('/subclasses/:classId', getSubclassesFromClass);
router.get('/annotations/:classId', getAnnotationsFromClass);
router.get('/sustainabilityGoals', getSustainabilityGoalsFromOntology);
router.get('/search', regexSearch);
router.get('/contributions/:classId', getContributionsToNodes);
router.get('/tradeoff/:classId', getTradeOffToNodes);
router.get('/developmentarea/:classId', getDevelopmentAreaToNodes);
router.get('/subgoals/:classId', getSubGoalsfromSDG);
router.get('/checkMunicipalityByCode', checkMunicipalityByCode);

export default router;
