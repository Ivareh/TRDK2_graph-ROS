import { Router } from "express";

import ontologies from "./ontologies";

const router = Router();

router.use("/ontologies", ontologies);

router.use("/isAlive", (req, res) => {
  res.send("true");
});

export default router;
