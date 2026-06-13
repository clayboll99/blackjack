<script setup lang="ts">
const cards = ["Old Card"]

const drawCard = () => {
  cards.push("New Card")
}
</script>

<template>
  <div> You have drawn the following cards: </div>
  <div v-for="card in cards" :key="card">
    {{ card}}
  </div>
  <button @click="drawCard()">Draw</button>
</template>

<style scoped>

</style>