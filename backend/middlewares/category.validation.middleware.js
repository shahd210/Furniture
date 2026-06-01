const {schema} = require("../validation/category.validation")

exports.categorySchema = (req,res,next)=>{
    try {
        const {error,value} = schema.validate(req.body,{abortEarly:false})
        if(error)
        {
            return res.status(400).json({Message:"Invalid inpute",error})
        }
        req.body= value;
        next();
    } catch (error) {
                next(error);
    }
}