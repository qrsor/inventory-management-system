import { Request, Response } from 'express';
import { ProductQueries } from '../queries/productQueries.js';
import { ProductCommands } from '../commands/productCommands.js';

export class ProductController {
    static async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = ProductQueries.getAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    static async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await ProductCommands.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    static async restockProduct(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { quantity } = req.body;
            const product = await ProductCommands.updateStock(Number(id), quantity);
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    static async sellProduct(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { quantity } = req.body;
            const product = await ProductCommands.updateStock(Number(id), -quantity);
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}