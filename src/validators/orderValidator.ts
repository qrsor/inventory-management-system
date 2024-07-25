import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const orderSchema = Joi.object({
    customerId: Joi.string().required(),
    products: Joi.array().items(
        Joi.object({
            productId: Joi.number().integer().required(),
            quantity: Joi.number().integer().min(1).required(),
        })
    ).min(1).required(),
});

export const validateOrder = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = orderSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }
    next();
};