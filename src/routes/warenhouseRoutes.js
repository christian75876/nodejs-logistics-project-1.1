import { Router } from "express";
import { getAll, post, getOne } from '../controller/warenhouse.js';

const router = Router();

router.get('/', getAll);
router.post('/', post);
router.get('/:id', getOne);

export default router;