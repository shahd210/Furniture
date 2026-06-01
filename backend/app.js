const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const userRouter = require("./routers/user.routes");
const categoryRouter = require("./routers/category.routes");
const productRouter = require("./routers/product.routes");
const morgan = require('morgan');
const cors = require('cors');


async function DB_connection() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DataBase connected successfully");

    } catch (error) {
        console.log(error.message)
    }
}





app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
DB_connection()
app.use('/users',userRouter);
app.use('/category',categoryRouter);
app.use('/products', productRouter);

app.use('/uploads', express.static('uploads'));

app.all('/slot', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    err.statusCode = 404;
    next(err); 
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

app.listen(port, () => {
    console.log(`Server is connected on ${port}`);
})