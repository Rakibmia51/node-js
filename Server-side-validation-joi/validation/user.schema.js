const joi = require('joi')

exports.schemas = {
        registerSchema: joi.object({
                name: joi.string().min(3).max(31).required(),
                email: joi.string().email().required(),
                password: joi.string().min(6).max(31).required(),
                confirmPassword: joi.ref("password"),
                age: joi.number().required(),
                // languages: joi.array().items(joi.string()).required(),
                // isRegistered: joi.boolean().required(),
                dob: joi.date().greater(new Date("2000-01-01")).required()
        }),
        loginSchema: joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(31).required(),
        })
}
