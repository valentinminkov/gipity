import { Router } from 'express';
import * as openaiController from '../controllers/openaiController';
import { cacheMiddleware } from '../middlewares/cache';

const router = Router();

router.get('/models', cacheMiddleware(1440), openaiController.listModels);
// router.post('/completion', openaiController.createCompletion);

export default router;
