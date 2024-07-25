import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const productSchema = Joi.object({
    name: Joi.string().max(50).required(),
    description: Joi.string().max(50).required(),
    price: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).required(),
});

export const validateProduct = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = productSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }
    next();
};