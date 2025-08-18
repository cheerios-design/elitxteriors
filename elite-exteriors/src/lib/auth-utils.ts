// Authentication utilities for Elite Exteriors Admin
const AUTH_SESSION_KEY = "elite_admin_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export interface AuthSession {
  authenticated: boolean;
  expiry: number;
  timestamp: number;
}

export const authUtils = {
  // Check if user has valid session
  isAuthenticated(): boolean {
    try {
      const session = localStorage.getItem(AUTH_SESSION_KEY);
      if (!session) return false;

      const sessionData: AuthSession = JSON.parse(session);
      return sessionData.expiry > Date.now();
    } catch {
      return false;
    }
  },

  // Create new session
  createSession(): void {
    const sessionData: AuthSession = {
      authenticated: true,
      expiry: Date.now() + SESSION_DURATION,
      timestamp: Date.now(),
    };

    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(sessionData));
  },

  // Clear session (logout)
  clearSession(): void {
    localStorage.removeItem(AUTH_SESSION_KEY);
  },

  // Get session info
  getSessionInfo(): AuthSession | null {
    try {
      const session = localStorage.getItem(AUTH_SESSION_KEY);
      return session ? JSON.parse(session) : null;
    } catch {
      return null;
    }
  },

  // Check if session expires soon (within 1 hour)
  sessionExpiresSoon(): boolean {
    const session = this.getSessionInfo();
    if (!session) return false;

    const oneHour = 60 * 60 * 1000;
    return session.expiry - Date.now() < oneHour;
  },
};
