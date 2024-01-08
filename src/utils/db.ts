import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

const MongoURI: string | undefined = process.env.MONGODB_URL;

if (!MongoURI) {
  throw new Error("Undefined MONGOURI...");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function getConnectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MongoURI!, opts).then((mongoose) => {
      return mongoose;
    });

    try {
      cached.conn = await cached.promise;
    } catch (error) {
      cached.conn = null;

      throw error;
    }
    return cached.conn;
  }
}

export default getConnectDB;
