import {defineMongooseModel} from "#nuxt/mongoose";

export const Game = defineMongooseModel({
    name: 'Game',
    schema: {
        id: { type: String, required: true, unique: true },
        players: { type: Array, required: true },
        deck: { type: Array, required: true },
        hands: { type: Array, required: true },
    }
})