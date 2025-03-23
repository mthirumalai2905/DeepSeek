import mongoose from "mongoose";

let cached = globalThis.mongoose || { conn: null, promise: null };

export default async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        console.error("Error connecting to database:", error);
        cached.promise = null;
    }

    return cached.conn;
}
