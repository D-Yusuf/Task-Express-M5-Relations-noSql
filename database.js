const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
