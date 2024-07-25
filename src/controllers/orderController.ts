import { Request, Response } from 'express';
import { OrderCommands } from '../commands/orderCommands.js';
import {ProductQueries} from "../queries/productQueries.js";

export class OrderController {
    static async createOrder(req: Request, res: Response): Promise<void> {
        try {

            // Check stock and update
            for (const item of req.body.products) {
                await ProductQueries.checkStock(item.productId, -item.quantity);
            }

            const order = await OrderCommands.create(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}