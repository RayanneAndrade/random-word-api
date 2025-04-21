import express from 'express';
import { getPalavras } from '../controller/PalavraController.js';

const router = express.Router();

router.get('/', getPalavras);

export default router;
