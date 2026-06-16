export const useGameStore = defineStore('game', () => {
  const game = ref()
  const loading = ref(true)
  const isLoading = computed(() => {
    return loading.value
  })
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
  const winner = computed(() => {
    return game.value.winner
  })

  const dealerHand = computed(() => {
    if (game.value) {
      return game.value.dealer_hand?.hand ?? []
    }
    return []
  })

  const dealerScore = computed(() => {
    if (game.value) {
      return game.value.dealer_hand?.score ?? 0
    }
    return 0
  })

  async function getOrCreateGame() {
    loading.value = true
    game.value = await $fetch('/api/game')
    if (!game.value) {
      game.value = await $fetch('/api/game/create', { method: 'POST' })
    }
    loading.value = false
  }

  async function drawCard() {
    const id = game.value.id ?? undefined
    if (id) {
      game.value = await $fetch(`/api/game/${id}/draw`)
    }
  }

  async function dealersTurn() {
    game.value = await $fetch(`/api/game/${game.value.id}/dealers_turn`)
  }

  return {
    game,
    hand,
    getOrCreateGame,
    drawCard,
    score,
    dealerHand,
    dealerScore,
    isLoading,
    dealersTurn,
    winner
  }
})
