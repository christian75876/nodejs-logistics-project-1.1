import { Router } from "express";
import { getAll, post, getOne, put } from '../controller/warenhouse.js';

const router = Router();

router.get('/', getAll);
router.post('/', post);
router.get('/:id', getOne);
router.put('/:id', put);

export default router;