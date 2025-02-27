import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!MONGO_URI) {
        throw new Error('Mongo URI is missing');
    }

    cached.promise = cached.promise || await mongoose.connect(MONGO_URI, {
        dbName: 'MontyEvents',
        bufferCommands: false,
    });

    cached.conn = await cached.promise;

    return cached.conn;
};