<script setup lang="ts">
const game = useGameStore()
</script>

<template>
  <UButton @click="game.drawCard()">Hit</UButton>
  <UButton @click="game.dealersTurn()">Start Dealer's Turn</UButton>
</template>
<style scoped></style>
