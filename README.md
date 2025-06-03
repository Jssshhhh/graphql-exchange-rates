# GraphQL Exchange Rates API

환율 데이터를 관리하는 GraphQL 서버 프로젝트
- 목표
  - 원화 (KRW) <> 미화(USD) 의 환율정보를 CRUD하는 Graphql API Server 구현
  - 환율정보는 mongodb database 에 저장
 
## 프로젝트 구조
graphql-exchange-rates/
├── index.js
├── resolvers.js
├── models/
│ └── ExchangeRate.js
├── data/
│ └── db.js
├── schema.graphql
├── package.json
└── README.md

---

## ⚙️ 사전 준비 사항

- Node.js 설치  
- MongoDB Atlas 또는 로컬 MongoDB 실행 중이어야 함
- `.env` 파일에 MongoDB 연결 정보 설정:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/exchange?retryWrites=true&w=majority
```

---
## 실행방법
서버 실행 후 graphql 클라이언트에서 테스트 해볼 수 있다.
1. 프로젝트 클론
   - git clone https://github.com/Jssshhhh/graphql-exchange-rates.git
   - cd graphql-exchange-rates
2. 패키지 설치
   - npm install
3.  서버 실행
     - node index.js
     
=> 실행되면 다음 주소에서 확인 가능 :
🔗 http://localhost:5110/graphql

---
## 테스트 스크립트
각 테스트 스크립트를 
- 환율 조회
query {
  getExchangeRate(src: "krw", tgt: "usd") {
    src
    tgt
    rate
    date
  }
}
- 환율 업데이트
mutation {
  postExchangeRate(info: {
    src: "krw"
    tgt: "usd"
    rate: 1300.0
    date: "2025-06-03"
  }) {
    src
    tgt
    rate
    date
  }
}


- 환율 삭제
mutation {
  deleteExchangeRate(info: {
    src: "krw",
    tgt: "usd",
    date: "2025-06-03"
  }) {
    src
    tgt
    rate
    date
  }
}

  
