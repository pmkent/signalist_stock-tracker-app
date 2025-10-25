import connectToDatabase from '../../../database/mongoose'

// app/api/test/route.js
export async function GET() {
  try {
    await connectToDatabase()

    return new Response(JSON.stringify({ message: 'Connected to database!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to connect to database' })
  }
}
