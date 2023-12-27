import React, { createContext, useContext } from 'react';

import { usePersistedState } from './Context';
import type { User } from '../data/User';

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<undefined | UserContextValue>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = usePersistedState<User>('users_');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const value = useContext(UserContext);
  if (!value) {
    throw Error('useUser should be used inside user context provider');
  }
  return value;
}
