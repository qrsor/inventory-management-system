import { JSONFilePreset } from 'lowdb/node'
import {Product} from "../models/product.js";
import {Order} from "../models/order.js";

type Data = {
    products: Product[];
    orders: Order[];
}

const db = await JSONFilePreset<Data>('db.json', { products: [], orders: []})
export default db