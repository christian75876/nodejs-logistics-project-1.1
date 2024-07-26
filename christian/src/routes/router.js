import { Router } from "express";
import warehouseRoutes from './warenhouseRoutes.js';

const router = Router();

router.use('/warehouses', warehouseRoutes);


export default router;