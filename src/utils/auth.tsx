import { useRouter } from 'next/navigation';

import { useUser, useItems } from '../context';
import type { User } from '../mockdata/User';

// Check that the user is logged in
export const requireUser = () => {
  try {
    const logout = useLogout();
    const { user } = useUser();

    // If there is no user, clear the local storage and redirect to the login page
    if (!user) {
      logout();
    }

    return user as User;
  } catch (error) {
    console.error('Error for required user check: ', error);
  }
};

// Logout functionality
export const useLogout = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const { setItems } = useItems();

  const logout = () => {
    try {
      if (typeof window !== 'undefined') {
        setUser(null);
        setItems(null);
        router.push('/login');
      }
    } catch (error) {
      console.error('Logout error: ', error);
    }
  };

  return logout;
};
