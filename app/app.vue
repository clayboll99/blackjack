<script setup lang="ts">
import type { DropdownMenuItem } from '#ui/components/DropdownMenu.vue'

const { loggedIn, user, clear, openInPopup } = useUserSession()

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
    <UHeader>
      <template #title>
        <UIcon name="i-streamline-flex-gambling-remix" /> Blackjack
      </template>
      <template #right>
        <UDropdownMenu v-if="user" :items="items">
          <UButton
            color="neutral"
            variant="ghost"
            trailing-icon="i-lucide-chevron-down"
          >
            <UAvatar icon="i-lucide-user" />
          </UButton>
        </UDropdownMenu>
      </template>
    </UHeader>

    <UMain>

      <NuxtPage />
    </UMain>
  </UApp>
</template>
