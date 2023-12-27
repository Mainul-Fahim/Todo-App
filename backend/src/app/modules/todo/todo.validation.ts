import Joi from "joi";

// Joi schema for the Todo
export const todoValidationSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(50)
        .required(),
        description: Joi.string()
        .required(),
});