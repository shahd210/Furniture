const { schema } = require("../validation/product.validation");

exports.productSchema = (req, res, next) => {
    try {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({ Message: "invalid input", error });
        }
        req.body = value;
        next();
    } catch (error) {
        next(error);

    }
}