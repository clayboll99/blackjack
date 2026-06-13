<script setup lang="ts">
const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()
onMounted(() => {
  fetch()
})
</script>

<template>
  <UApp>
    <h1>Welcome to Blackjack!</h1>
    <NuxtPage/>
  </UApp>
</template>
