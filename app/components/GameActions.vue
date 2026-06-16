<script setup lang="ts">
const game = useGameStore()
</script>

<template>
  <UContainer v-if="game.winner === ''">
    <UButton @click="game.drawCard()">Hit</UButton>
    <UButton @click="game.dealersTurn()">Stand</UButton>
  </UContainer>
  <UContainer v-else>
    The winner is {{ game.winner }}!
  </UContainer>
</template>
<style scoped></style>
