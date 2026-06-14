import {Hand} from "#server/models/hand.schema";

export default defineEventHandler(async (event) => {
    const game = await Game.findOne({ id: event.context?.params?.id })
    if (game) {
        const hands = game.hands
        for (let i = 0; i < hands.length; i += 1) {
            const newCard = game.deck.pop()
            if (newCard) {
                const currHand = await Hand.findById(hands.at(i)._id).exec()
                await Hand.findByIdAndUpdate(hands.at(i)._id, {
                    $push: {
                        hand: newCard,
                    }
                }).exec()
                await Game.updateOne({id: game.id},
                    {
                        $set: {
                            "hands.$[elem]": currHand
                        },
                    },
                    {
                        arrayFilters: [
                            {
                                "elem._id": currHand?._id
                            }
                        ]
                    }
                )
            }
        }

        await game.save()

        const newGame = await Game.findOne({ id: event.context?.params?.id })

        return {
            id: newGame?.id,
            hands: newGame?.hands,
            players: newGame?.players
        }
    }
    return null
})