import db from '../config/database.js';
import { Product } from '../models/product.js';

export class ProductCommands {
    static async create(product: Omit<Product, 'id'>): Promise<Product> {
        const newId = db.data!.products.length > 0 ? Math.max(...db.data!.products.map(p => p.id)) + 1 : 1;
        const newProduct = { id: newId, ...product };
        db.data!.products.push(newProduct);
        await db.write();
        return newProduct;
    }

    static async updateStock(id: number, quantity: number): Promise<Product> {
        const product = db.data!.products.find(p => p.id === id);
        if (!product) throw new Error('Product not found');
        const newStock = product.stock + quantity;
        if (newStock < 0) throw new Error('Insufficient stock');
        product.stock = newStock;
        await db.write();
        return product;
    }
}