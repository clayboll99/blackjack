export default defineOAuthKeycloakEventHandler({
  config: {
    scope: ['openid', 'profile', 'email'],
  },
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: user,
      secure: {
        token: tokens.token,
      },
    })
    return sendRedirect(event, '/game')
  },
  onError(event, error) {
    console.error('Keycloak OAuth error:', error)
    return sendRedirect(event, '/')
  },
})
