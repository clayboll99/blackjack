<script setup lang="ts">
const { loggedIn, openInPopup } = useUserSession()
const loginUrl = import.meta.env.PROD ? '/auth/github' : '/auth/keycloak'
</script>

<template>
  <UButton v-if="!loggedIn" @click="openInPopup(loginUrl)">Login</UButton>
  <UButton v-else to="/game">Start a Game</UButton>
</template>
