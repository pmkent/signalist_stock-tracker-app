import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}

let cached = global.mongooseCache

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null }
}

export const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
  }

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
  }
  try {
    cached.conn = await cached.promise
    // return cached.conn
  } catch (e) {
    cached.promise = null
    throw e
  }
  console.log(
    `Connected to MongoDB database ${process.env.NODE_ENV} ${MONGODB_URI}`
  )
}

export default connectToDatabase
