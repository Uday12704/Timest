import type {
  AppProfile,
  AuthSession,
  SubscriptionAccount,
} from "./types";

import {
  mockAccounts,
  mockProfiles,
} from "./mock-users";

const ACCOUNTS_STORAGE_KEY =
  "wood-calc-auth-accounts";

const PROFILES_STORAGE_KEY =
  "wood-calc-auth-profiles";

const SESSION_STORAGE_KEY =
  "wood-calc-auth-session";

const PENDING_ACCOUNT_KEY =
  "wood-calc-auth-pending-account";

/* ---------------------------------- */
/* Browser check */
/* ---------------------------------- */

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/* ---------------------------------- */
/* Accounts */
/* ---------------------------------- */

export function getAccounts(): SubscriptionAccount[] {
  if (!isBrowser()) {
    return mockAccounts;
  }

  const stored = window.localStorage.getItem(
    ACCOUNTS_STORAGE_KEY,
  );

  if (!stored) {
    window.localStorage.setItem(
      ACCOUNTS_STORAGE_KEY,
      JSON.stringify(mockAccounts),
    );

    return mockAccounts;
  }

  try {
    return JSON.parse(
      stored,
    ) as SubscriptionAccount[];
  } catch {
    window.localStorage.setItem(
      ACCOUNTS_STORAGE_KEY,
      JSON.stringify(mockAccounts),
    );

    return mockAccounts;
  }
}

export function saveAccounts(
  accounts: SubscriptionAccount[],
): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    ACCOUNTS_STORAGE_KEY,
    JSON.stringify(accounts),
  );
}

/* ---------------------------------- */
/* Profiles */
/* ---------------------------------- */

export function getProfiles(): AppProfile[] {
  if (!isBrowser()) {
    return mockProfiles;
  }

  const stored = window.localStorage.getItem(
    PROFILES_STORAGE_KEY,
  );

  if (!stored) {
    window.localStorage.setItem(
      PROFILES_STORAGE_KEY,
      JSON.stringify(mockProfiles),
    );

    return mockProfiles;
  }

  try {
    return JSON.parse(
      stored,
    ) as AppProfile[];
  } catch {
    window.localStorage.setItem(
      PROFILES_STORAGE_KEY,
      JSON.stringify(mockProfiles),
    );

    return mockProfiles;
  }
}

export function saveProfiles(
  profiles: AppProfile[],
): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    PROFILES_STORAGE_KEY,
    JSON.stringify(profiles),
  );
}

/* ---------------------------------- */
/* Session */
/* ---------------------------------- */

export function getStoredSession(): AuthSession | null {
  if (!isBrowser()) {
    return null;
  }

  const stored = window.localStorage.getItem(
    SESSION_STORAGE_KEY,
  );

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(
      stored,
    ) as AuthSession;
  } catch {
    window.localStorage.removeItem(
      SESSION_STORAGE_KEY,
    );

    return null;
  }
}

export function saveSession(
  session: AuthSession,
): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    SESSION_STORAGE_KEY,
    JSON.stringify(session),
  );
}

export function clearSession(): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(
    SESSION_STORAGE_KEY,
  );
}

/* ---------------------------------- */
/* Pending Account */
/* ---------------------------------- */

export function getPendingAccountId(): string | null {
  if (!isBrowser()) {
    return null;
  }

  return window.localStorage.getItem(
    PENDING_ACCOUNT_KEY,
  );
}

export function savePendingAccountId(
  accountId: string,
): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    PENDING_ACCOUNT_KEY,
    accountId,
  );
}

export function clearPendingAccountId(): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(
    PENDING_ACCOUNT_KEY,
  );
}