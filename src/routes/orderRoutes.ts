import express from 'express';
import { OrderController } from '../controllers/orderController.js';
import { validateOrder } from '../validators/orderValidator.js';

const router = express.Router();

router.post('/', validateOrder, OrderController.createOrder);

export default router;