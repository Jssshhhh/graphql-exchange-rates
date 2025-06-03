require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const resolvers = require('./resolvers');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const typeDefs = fs.readFileSync('./schema.graphql', 'utf-8');

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/graphql', expressMiddleware(server));

  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/exchange";
  await mongoose.connect(MONGO_URI);
  console.log("✅ MongoDB connected");

  app.listen(5110, () => {
    console.log("🚀 Server running at http://localhost:5110/graphql");
  });
}

startServer();
