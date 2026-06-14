import Deck from "#shared/deck";
import {Hand} from "#server/models/hand.schema";
import {User} from "#server/models/user.schema";

export default defineEventHandler(async (event) => {
    const player = await getUserSession(event)
    if (!player.user) {
        return null
    }

    const deck = new Deck()
    deck.shuffle()

    const currentHand = new Hand()
    const user = await User.findOneAndUpdate({ email: player.user?.email }, player.user, {
        upsert: true,
        returnDocument: 'after',
        runValidators: true
    })
    currentHand.hand = [deck.cards.pop()]
    currentHand.player = user
    currentHand.save()

    const game = new Game({
        id: crypto.randomUUID(),
        players: [player.user],
        deck: deck.cards,
        hands: [currentHand]
    })

    game.save()

    return {
        id: game.id,
        players: game.players,
        hands: game.hands
    }
})