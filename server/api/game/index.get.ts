import type {Query} from "mongoose";

export default defineEventHandler(async (event) => {
    const user = await getUserSession(event)
    const game = await Game.findOne().elemMatch('players', function (elem: Query<any, any>) {
        elem.where({'email': user.user?.email})
    }).exec()
    return game ? {
        id: game.id,
        players: game.players,
        hands: game.hands,
    } : null
})