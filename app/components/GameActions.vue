<script setup lang="ts">
const game = useGameStore()
</script>

<template>
  <UContainer v-if="game.winner === ''">
    <UButton @click="game.drawCard()">Hit</UButton>
    <UButton class="ml-px" @click="game.dealersTurn()">Stand</UButton>
  </UContainer>
  <UContainer v-else>
    The winner is {{ game.winner }}!
    <UButton @click="game.getOrCreateGame()">Start New Game</UButton>
  </UContainer>
</template>
<style scoped></style>
