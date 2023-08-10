const mongoose = require('mongoose');

const connectDB = (connectionUri) => {
    return mongoose.connect(connectionUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
          console.log('Connected to MongoDB Atlas');
        })
        .catch((error) => {
          console.error('Error connecting to MongoDB Atlas:', error);
        });
}

module.exports = connectDB;