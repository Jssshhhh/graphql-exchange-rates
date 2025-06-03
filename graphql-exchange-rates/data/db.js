// mongoDB 데이터베이스에 연결하기 위한 연결 함수

const mongoose = require('mongoose');

    //비동기 함수로 MongoDB 연결을 설정
async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/exchange', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

}

module.exports = connectDB;
