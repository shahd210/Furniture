const joi = require("joi");

exports.schema = joi.object({
    name:joi.string().trim().min(3).max(50).required(),
        description:joi.string(),
        price:joi.number().required(),
        image:joi.string(),
        categoryId:joi.string().required(),
})