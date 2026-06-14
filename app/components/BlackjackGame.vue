<script setup lang="ts">
const gameStore = useGameStore()
gameStore.getOrCreateGame()
</script>

<template>
  <div> You have drawn the following cards: </div>
  <div v-for="card in gameStore.game?.hands[0].hand" :key="card">
    <PlayingCard :suit="card.suit" :value="card.value" />
  </div>
  <button @click="gameStore.drawCard()">Draw</button>
</template>

<style scoped>

</style>