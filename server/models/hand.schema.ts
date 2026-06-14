import {defineMongooseModel} from "#nuxt/mongoose";
import {User} from "#server/models/user.schema";

export const Hand = defineMongooseModel({
    name: 'Hand',
    schema: {
        player: { type: User.schema, required: true },
        hand: { type: Object, required: true},
        score: {type: Number}
    }
})