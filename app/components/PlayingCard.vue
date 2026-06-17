<script setup lang="ts">
const props = defineProps<{
  suit: string
  value: string
  flipped?: boolean
}>()

const color = computed(() => {
  if (props.suit === 'Hearts' || props.suit === 'Diamonds') {
    return 'red'
  }
  return 'black'
})
const suit = computed(() => {
  if (props.suit === 'Diamonds') {
    return '♦'
  }
  switch (props.suit) {
    case 'Diamonds':
      return '♦'
    case 'Hearts':
      return '♥'
    case 'Clubs':
      return '♣'
    case 'Spades':
      return '♠'
    default:
      return 'Joker'
  }
})
</script>

<template>
  <div v-if="!props.flipped" class="card" :style="{ color: color }">
    <div class="card-corner top-left">
      <div>{{ props.value }}</div>
      <div>{{ suit }}</div>
    </div>
    <div class="card-center">
      {{ suit }}
    </div>
    <div class="card-corner bottom-right">
      <div>{{ props.value }}</div>
      <div>{{ suit }}</div>
    </div>
  </div>
  <div v-else class="card card-back">
  </div>
</template>

<style scoped>
.card {
  width: 100px;
  height: 140px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
  position: relative;
  display: flex;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}

.card-corner {
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-left {
  top: 8px;
  left: 8px;
}
.bottom-right {
  bottom: 8px;
  right: 8px;
  transform: rotate(180deg);
}

.card-center {
  margin: auto;
  font-size: 40px;
}

.card-back {
  background-color: #b31010;
  background-image: 
    linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 75%),
    linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 75%),
    linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%),
    linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%);
}

</style>
