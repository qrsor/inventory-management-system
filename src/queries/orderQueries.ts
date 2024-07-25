import db from '../config/database.js';
import { Order } from '../models/order.js';

export class OrderQueries {
    static getAll(): Order[] {
        return db.data!.orders;
    }
}