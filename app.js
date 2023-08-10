require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const router = require('./router/product');
const PORT = process.env.PORT || 3004;

app.get('/', (req, res) => {
    res.send('HI code is running..');
});

app.use('/api/product', router);
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        });
    } catch (error) {
        console.log('Error', error);
    }
}

start();