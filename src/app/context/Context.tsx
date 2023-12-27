'use client';

import React, { useState, useMemo } from 'react';
import { UserProvider } from './UserContext';
import { ItemProvider } from './ItemContext';

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <UserProvider>
      <ItemProvider>{children}</ItemProvider>
    </UserProvider>
  );
};

export function usePersistedState<State>(key: string) {
  const [state, setState] = useState<null | State>(() => {
    if (typeof window !== 'undefined') {
      const a = localStorage.getItem(key);

      if (!a) return null;

      try {
        return JSON.parse(a) as State;
      } catch (error) {
        return null;
      }
    }

    return null;
  });

  return useMemo(
    () =>
      [
        state,
        (s: State | null) => {
          setState(s);
          localStorage.setItem(key, JSON.stringify(s));
        },
      ] as const,
    [state, key]
  );
}
