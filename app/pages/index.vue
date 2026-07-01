<script setup lang="ts">
const { loggedIn, openInPopup } = useUserSession()
const loginUrl = import.meta.env.PROD ? '/auth/github' : '/auth/keycloak'
</script>

<template>
  <UButton v-if="!loggedIn" class="object-center" @click="openInPopup(loginUrl)"
    >Login</UButton
  >
  <UButton v-else to="/game" class="object-center">Start a Game</UButton>
</template>
