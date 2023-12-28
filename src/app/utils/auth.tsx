import { useRouter } from 'next/navigation';

import { useUser, useItems } from '../context';

// Check that the user is logged in
export const requireUser = () => {
  try {
    const { user } = useUser();
    const router = useRouter();

    // If there is no user, clear the local storage and redirect to login page
    if (!user) {
      logout();
      router.push('/login');
    }
  } catch (error) {
    console.error('Error for required user check: ', error);
  }
};

export const logout = () => {
  try {
    if (typeof window !== 'undefined') {
      const { setUser } = useUser();
      const { setItems } = useItems();

      setUser(null);
      setItems(null);
    }
  } catch (error) {
    console.error('Logout error: ', error);
  }
};
