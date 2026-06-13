<script setup lang="ts">
  const { user, loggedIn, clear } = useUserSession()

  const logout = () => {
    console.log('Logging Out')
    clear()
  }
</script>

<template>
  <UButton v-if="!loggedIn" to="/auth/keycloak">Login</UButton>
  <UButton v-else @click="logout">Logout</UButton>
</template>