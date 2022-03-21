const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let db;

const initMongooseDB = async () => {
  console.log("connecting to DB");
  if (!db) {
    const mongoServer = await MongoMemoryServer.create();
    db = await mongoose.connect(mongoServer.getUri(), { dbName: "revealio" });
  }

  console.log("connection established");
  return db;
};

module.exports = { initMongooseDB };
