//환율 정보를 메모리에 저장하고, 다른 파일에서 쓸 수 있게 내보내는 코드이다

//exchangeRates는 환율 정보를 담고 있는 배열이다.
let exchangeRates = [
    {id : "1", currency: "usd", rate : 1380.5},
];

module.exports = { exchangeRates };