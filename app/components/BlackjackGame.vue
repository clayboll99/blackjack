<script setup lang="ts">
import GameActions from '~/components/GameActions.vue'

const gameStore = useGameStore()
gameStore.getOrCreateGame()
</script>

<template>
  <UContainer class="game-table">
    <UContainer v-if="gameStore.isLoading"> Game is loading... </UContainer>
    <UContainer v-else>
      <UContainer class="grid grid-cols-2">
        <UContainer>
          <div>You have drawn the following cards:</div>
          <div class="hand">
            <PlayingCard
              v-for="card in gameStore.hand.hand"
              :key="card"
              :suit="card.suit"
              :value="card.value"
              class="overlapping-card"
            />
          </div>
          <div>Your Score: {{ gameStore.score }}</div>
        </UContainer>
        <UContainer class="break-after-column">
          <UContainer>
            <div>The dealer has the following cards:</div>
            <div class="hand">
              <PlayingCard
                v-for="card in gameStore.dealerHand"
                :key="card"
                :suit="card.suit"
                :value="card.value"
                :flipped="card.flipped"
                class="overlapping-card"
              />
            </div>
            <div>Dealer's Score: {{ gameStore.dealerScore }}</div>
          </UContainer>
        </UContainer>
      </UContainer>
      <GameActions />
    </UContainer>
  </UContainer>
</template>

<style scoped>
.game-table {
  padding: 20px;
}
.hand {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.overlapping-card {
  /* This pulls each card to the left, making them overlap */
  margin-left: -40px;

  /* Smoothly animates cards when they enter the screen */
  transition: all 0.3s ease;
}

/* This resets the very first card so it stays in place */
.overlapping-card:first-child {
  margin-left: 0;
}

/* Optional: Pushes the hovered card to the top so you can read it */
.overlapping-card:hover {
  transform: translateY(-10px);
  z-index: 10;
  cursor: pointer;
}
</style>
