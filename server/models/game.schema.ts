import { defineMongooseModel } from '#nuxt/mongoose'
import { Hand } from '#server/models/hand.schema'

export const Game = defineMongooseModel({
  name: 'Game',
  schema: {
    id: { type: String, required: true, unique: true },
    players: [User.schema],
    deck: { type: Array, required: true },
    hands: [Hand.schema],
    status: { type: String, required: true },
    dealer_hand: {
      score: Number,
      hand: [
        {
          suit: String,
          value: String,
          flipped: Boolean,
        },
      ],
    },
  },
})
