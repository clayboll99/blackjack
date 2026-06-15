<script setup lang="ts">
import type { DropdownMenuItem } from '#ui/components/DropdownMenu.vue'

const { loggedIn, user, clear } = useUserSession()

const logout = async () => {
  await clear()
  navigateTo('/')
}

const items = [
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      onSelect: logout,
    },
  ],
] satisfies DropdownMenuItem[][]
</script>

<template>
  <UApp>
    <h1>Welcome to Blackjack!</h1>
    <UDropdownMenu v-if="user" :items="items">
      <UButton
        color="neutral"
        variant="ghost"
        trailing-icon="i-lucide-chevron-down"
      >
        <UAvatar :src="user.id" />
      </UButton>
    </UDropdownMenu>
    <UButton v-if="!loggedIn" to="/auth/keycloak">Login</UButton>
    <NuxtPage />
  </UApp>
</template>
