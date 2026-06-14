export default defineEventHandler(async (event) => {
    const player = await getUserSession(event)
    const game = new Game({
        id: crypto.randomUUID(),
        players: [player],
        deck: ['card1', 'card2', 'card3'],
        hands: [{
            player: player,
            hand: ['card4']
        }]
    })

    game.save()

    return {
        id: game.id,
        players: game.players,
        hands: game.hands
    }
})