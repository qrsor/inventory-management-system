import db from '../config/database.js';
import { Product } from '../models/product.js';

export class ProductQueries {
    static getAll(): Product[] {
        return db.data!.products;
    }

    static getById(id: number): Product | undefined {
        return db.data!.products.find(p => p.id === id);
    }

    static async checkStock(id: number, quantity: number): Promise<void> {
        const product = db.data!.products.find(p => p.id === id);
        if (!product) throw new Error('Product not found');
        const newStock = product.stock + quantity;
        if (newStock < 0) throw new Error('Insufficient stock');
    }
}