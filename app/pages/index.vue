<script setup lang="ts">
import {useUserSession} from "../../.nuxt/imports";

const { loggedIn, openInPopup } = useUserSession()

</script>

<template>
  <UButton v-if="!loggedIn" @click="openInPopup('/auth/keycloak')">Login</UButton>
  <UButton v-else to="/game">Start a Game</UButton>
</template>
