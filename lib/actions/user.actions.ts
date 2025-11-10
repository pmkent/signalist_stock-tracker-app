'use server'

import { connectToDatabase } from '@/database/mongoose'

export const getAllUsersForNewsEmail = async () => {
  try {
    const mongoose = await connectToDatabase()
    const db = mongoose?.connection.db
    if (!db) throw new Error('MongoDB connection not found')
    const usersCollection = await db?.collection('user').find().toArray()

    const users = await db
      .collection('user')
      .find(
        { email: { $exists: true, $ne: null } },
        { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 } }
      )
      .toArray()
    // return { success: true, data: response }
    return usersCollection
      .filter((user) => user.email && user.name)
      .map((user) => ({
        id: user.id || user._id.toString() || '',
        email: user.email,
        name: user.name,
      }))
  } catch (e) {
    console.error('Error fetching users for new email : ', e)
    // console.log('Get all users for news email failed', e)
    return [] //{ success: false, error: 'Get all users for news email failed' }
  }
}
