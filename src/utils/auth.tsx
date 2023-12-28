import { useRouter } from 'next/navigation';

import { useUser, useItems } from '../context';

// Check that the user is logged in
export const requireUser = () => {
  try {
    const { user } = useUser();

    // If there is no user, clear the local storage and redirect to login page
    if (!user) {
      logout();
    }

    return user;
  } catch (error) {
    console.error('Error for required user check: ', error);
  }
};

export const logout = () => {
  try {
    if (typeof window !== 'undefined') {
      const router = useRouter();
      const { setUser } = useUser();
      const { setItems } = useItems();

      setUser(null);
      setItems(null);
      router.push('/login');
    }
  } catch (error) {
    console.error('Logout error: ', error);
  }
};
