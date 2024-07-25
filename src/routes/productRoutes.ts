import express from 'express';
import { ProductController } from '../controllers/productController.js';
import { validateProduct } from '../validators/productValidator.js';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.post('/', validateProduct, ProductController.createProduct);
router.post('/:id/restock', ProductController.restockProduct);
router.post('/:id/sell', ProductController.sellProduct);

export default router;