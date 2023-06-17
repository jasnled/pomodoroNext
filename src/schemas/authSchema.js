import * as Joi from 'joi';

const email = Joi.string();
const password = Joi.string().min(6);

const loginSchema = Joi.object({
    email: email.required(),
    password: password.required()
});

const createUserSchema = Joi.object({
    email: email.required(),
    password:password.required()
});

const recoveryPasswordSchema = Joi.object({
    email: email.required()
});

export{
    loginSchema,
    createUserSchema,
    recoveryPasswordSchema
};