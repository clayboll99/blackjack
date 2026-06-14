export const useGameStore = defineStore('game', () => {
    const game = ref()
    const hand = computed(() => {
        if (game.value) {
            return game.value.hands.find((hand) => hand.player.email === useUserSession().user.value?.email)
        }
        return {
            player: useUserSession().user,
            hand: [],
            score: 0
        }
    })
    const score = computed(() => {
        return hand.value.score
    })

    async function getOrCreateGame() {
        game.value = await $fetch('/api/game')
        if (!game.value) {
            game.value = await $fetch('/api/game/create', { method: 'POST'})
        }
    }

    async function drawCard() {
        const id = game.value.id ?? undefined
        if (id) {
            game.value = await $fetch(`/api/game/${id}/draw`)
        }
    }

    return {game, hand, getOrCreateGame, drawCard, score}
})