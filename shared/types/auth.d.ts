// shared/types/auth.d.ts
declare module '#auth-utils' {
  interface User {
    sub: string
    email_verified: boolean
    name: string
    preferred_username: string
    given_name: string
    family_name: string
    email: string
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface UserSession {
    // Add your own fields
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface SecureSessionData {
    // Add your own fields
  }
}

export {}
