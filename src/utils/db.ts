import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

const MongoURI: string | undefined = process.env.NEXT_PUBLIC_MONGODB_URL;

if (!MongoURI) {
  throw new Error("Undefined MONGOURI...");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

(async function getConnectDB() {
  console.log("Trying to connect to DB");

  if (cached.conn) {
    console.log("Connected to DB using Cache...");

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

    console.log("Connected to DB");
    return cached.conn;
  }
})();

// export default getConnectDB;
