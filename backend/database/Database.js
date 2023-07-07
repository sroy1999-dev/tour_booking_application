const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    }catch(err) {
        throw err;
    }
}

module.exports = connectDB;