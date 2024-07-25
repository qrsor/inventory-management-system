import db from '../config/database.js';
import { Order } from '../models/order.js';
import { ProductCommands } from './productCommands.js';

export class OrderCommands {
    static async create(order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
        const newId = db.data!.orders.length > 0 ? Math.max(...db.data!.orders.map(o => o.id)) + 1 : 1;

        // Update stock
        for (const item of order.products) {
            await ProductCommands.updateStock(item.productId, -item.quantity);
        }

        const newOrder = {
            id: newId,
            ...order,
            createdAt: new Date().toISOString()
        };
        db.data!.orders.push(newOrder);
        await db.write();
        return newOrder;
    }
}