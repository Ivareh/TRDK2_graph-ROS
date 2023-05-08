import { Router, Request, Response } from "express";

import onError from "./middleware/onError";

import { ApiError } from "../types/errorTypes";

import getSimilarlySizedMunicipalities from "../database/getSimilarlySizedMunicipalities";
import getAllMunicipalities from "../database/getAllMunicipalities";
import getMunicipalityInfo from "../database/getMunicipalityInfo";

import setMunicipality from "../database/setMunicipality";

const router = Router();

const findSimilar = async (req: Request, res: Response) => {
  try {
    const resp = await getSimilarlySizedMunicipalities(req.params.code, 0.25);
    res.json(resp);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const resp = await getAllMunicipalities();
    res.json(resp);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const getInfo = async (req: Request, res: Response) => {
  try {
    const resp = await getMunicipalityInfo(req.params.code);
    if (resp) res.json(resp[0]);
    else res.json([]);
  } catch (e: any) {
    onError(e, req, res);
  }
};

const addMunicipality = async (req: Request, res: Response) => {
  try {
    // 1. Check if municipality with the same code already exists...
    const alreadyExists = await getMunicipalityInfo(req.body.code);
    if (alreadyExists) throw new ApiError(400, "Municipality already exists!");

    await setMunicipality(req.body.code, req.body.name, req.body.population);
    res.json({});
  } catch (e: any) {
    onError(e, req, res);
  }
};

// These should really be get endpoints...
router.get("/similar/:code", findSimilar);
router.get("/info/:code", getInfo);
router.get("/all", getAll);

router.post("/add", addMunicipality);

export default router;
