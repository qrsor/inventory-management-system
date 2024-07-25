export interface OrderProduct {
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  customerId: string;
  products: OrderProduct[];
  createdAt: string;
}