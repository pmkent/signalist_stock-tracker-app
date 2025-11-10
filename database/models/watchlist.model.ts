// Playlist
// import { Schema, model, models, type Document, type Model } from 'mongoose'

// export interface WatchlistItem extends Document {
//   userId: string
//   symbol: string
//   company: string
//   addedAt: Date
// }

// const WatchlistSchema = new Schema<WatchlistItem>(
//   {
//     userId: { type: String, required: true, index: true },
//     symbol: { type: String, required: true, uppercase: true, trim: true },
//     company: { type: String, required: true, trim: true },
//     addedAt: { type: Date, default: Date.now },
//   },
//   {
//     timestamps: false,
//   }
// )

// // Prevent duplicate symbols per user
// WatchlistSchema.index({ userId: 1, symbol: 1 }, { unique: true })

// export const Watchlist: Model<WatchlistItem> =
//   (models?.WatchList as Model<WatchlistItem>) ||
//   model<WatchlistItem>('Watchlist', WatchlistSchema)

import { Schema, model, models, type Document, type Model } from 'mongoose'

export interface WatchlistItem extends Document {
  userId: string
  symbol: string
  company: string
  addedAt: Date
}

const WatchlistSchema = new Schema<WatchlistItem>(
  {
    userId: { type: String, required: true, index: true },
    symbol: { type: String, required: true, uppercase: true, trim: true },
    company: { type: String, required: true, trim: true },
    addedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
)

// Prevent duplicate symbols per user
WatchlistSchema.index({ userId: 1, symbol: 1 }, { unique: true })

export const Watchlist: Model<WatchlistItem> =
  (models?.Watchlist as Model<WatchlistItem>) ||
  model<WatchlistItem>('Watchlist', WatchlistSchema)

// export const createWatchlist = async (symbol: string, name: string, exchange: string, type: string) => await Watchlist.create({ symbol, name, exchange, type })

// export const deleteWatchlist = async (symbol: string) => await Watchlist.deleteOne({ symbol })

// export const getWatchlist = async (symbol: string) => await Watchlist.findOne({ symbol })

// export const getWatchlistBySymbol = async (symbol: string) => await Watchlist.find({ symbol })

// export const getWatchlistByExchange = async (exchange: string) => await Watchlist.find({ exchange })

// export const getWatchlistByType = async (type: string) => await Watchlist.find({ type })

// export const getWatchlistByTypeAndExchange = async (type: string, exchange: string) => await Watchlist.find({ type, exchange })

// export const getWatchlistByTypeAndSymbol = async (type: string, symbol: string) => await Watchlist.find({ type, symbol })

// export const getWatchlistByTypeAndSymbolAndExchange = async (type: string, symbol: string, exchange: string) => await Watchlist.find({ type, symbol, exchange })

// export const updateWatchlist = async (symbol: string, name: string, exchange: string, type: string) => await Watchlist.updateOne({ symbol }, { name, exchange, type })

// export const updateWatchlistType = async (symbol: string, type: string) => await Watchlist.updateOne({ symbol }, { type })

// export const updateWatchlistExchange = async (symbol: string, exchange: string) => await Watchlist.updateOne({ symbol }, { exchange })

// export const updateWatchlistName = async (symbol: string, name: string) => await Watchlist.updateOne({ symbol }, { name })
// })
