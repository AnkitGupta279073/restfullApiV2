require('dotenv').config();
const productModel = require('./models/productSchema');
const connectDB = require('./db/connect');
const productJson = require('./product.json');

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await productModel.create(productJson);
        console.log('collection created successfully');
    } catch (error) {
        console.log(error);
    }
}

start();

