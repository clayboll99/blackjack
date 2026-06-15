// shared/types/auth.d.ts
declare module '#auth-utils' {
  interface User {
    sub: String,
    email_verified: Boolean,
    name: String,
    preferred_username: String,
    given_name: String,
    family_name: String,
    email: String,
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {}
