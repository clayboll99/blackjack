export default defineEventHandler(async (event) => {
    const game = await Game.findOne({ id: event.context?.params?.id })
    if (game) {
        const hands = game.hands
        for (let i = 0; i < hands.length; i += 1) {
            hands.at(i).hand.push(game.deck.pop())
        }
        game.hands = hands
        game.save()
    }

    return {
        id: game?.id,
        hands: game?.hands,
        players: game?.players
    }
})