import { Router } from 'express';

import ontologies from './ontologies';
import data from './data';
import municipality from './municipality';


const router = Router();

router.use('/ontologies', ontologies);
router.use('/data', data);
router.use('/municipality', municipality);

router.use('/isAlive', (req, res) => {
  res.send('true');
});


export default router;
