const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
    src: { type: String, required: true}, // 소스 통화 ('krw', 'usd')
    tgt: { type: String, required: true}, // 타겟 통화 ( 'usd', 'krw')
    rate: { type: Number, required: true}, // 환율 값
    date: { type: String, required: true}, // 기준 날짜

});

//복합 키 역할을 하거나 유니크하게 만들고 싶으면 인덱스 설정 가능
exchangeRateSchema.index({ src: 1, tgt: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('ExchangeRate', exchangeRateSchema);