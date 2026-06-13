import {defineNuxtRouteMiddleware, navigateTo, useUserSession} from "#imports";

export default defineNuxtRouteMiddleware((to) => {
    const { loggedIn, user, fetch } = useUserSession()

    if (to.path === '/auth/keycloak' || to.path === '/api/_auth/session' || to.path === '/') return

    if (!loggedIn.value) {
        return navigateTo('/')
    }
})