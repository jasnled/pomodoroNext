import * as Joi from 'joi';

const email = Joi.string().email({ tlds: { allow: false } });
const password = Joi.string().min(6);
const confirmPass = Joi.string().min(6);
const newPassword = Joi.string().min(6);
const confirmNewPassword = Joi.string().min(6);
const pomodoro = Joi.number().min(60).max(5940);
const shortBreak = Joi.number().min(60).max(5940);
const longBreak = Joi.number().min(60).max(5940);

const loginSchema = Joi.object({
    email: email.required(),
    password: password.required()
});

const createUserSchema = Joi.object({
    email: email.required(),
    password:password.required(),
    confirmPass: confirmPass.required()
});

const recoveryPasswordSchema = Joi.object({
    email: email.required()
});

const changePasswordSchema = Joi.object({
    newPassword: newPassword.required(),
    confirmNewPassword: confirmNewPassword.required()
});

const changeConfigSchema = Joi.object({
    pomodoro,
    shortBreak,
    longBreak
});

export{
    loginSchema,
    createUserSchema,
    recoveryPasswordSchema,
    changePasswordSchema,
    changeConfigSchema
};