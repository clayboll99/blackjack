export const useGameStore = defineStore('game', () => {
  const game = ref()
  const hand = computed(() => {
    if (game.value) {
      return game.value.hands.find(
        (hand) => hand.player.email === useUserSession().user.value?.email,
      )
    }
    return {
      player: useUserSession().user,
      hand: [],
      score: 0,
    }
  })
  const score = computed(() => {
    return hand.value.score
  })

  const dealerHand = computed(() => {
    if (game.value) {
      return game.value.dealer_hand.hand
    }
    return []
  })

  const dealerScore = computed(() => {
    if (game.value) {
      return game.value.dealer_hand.score
    }
    return 0
  })

  async function getOrCreateGame() {
    game.value = await $fetch('/api/game')
    if (!game.value) {
      game.value = await $fetch('/api/game/create', { method: 'POST' })
    }
  }

  async function drawCard() {
    const id = game.value.id ?? undefined
    if (id) {
      game.value = await $fetch(`/api/game/${id}/draw`)
    }
  }

  return {
    game,
    hand,
    getOrCreateGame,
    drawCard,
    score,
    dealerHand,
    dealerScore,
  }
})
