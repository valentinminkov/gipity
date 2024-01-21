import { Router } from 'express';
import * as openaiController from '../controllers/openaiController';

const router = Router();

router.get('/models', openaiController.listModels);
// router.post('/completion', openaiController.createCompletion);

export default router;
