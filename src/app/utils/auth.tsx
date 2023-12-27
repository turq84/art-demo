import { redirect } from 'next/navigation';

import { useUser } from '../context/UserContext';
import { useItems } from '../context/ItemContext';

const { setUser, user } = useUser();
const { setItems } = useItems();

export const requiredUser = () => {
  try {
    if (!user) {
      logout();
      redirect('/login');
    }
  } catch (error) {
    console.error('Error for required user check: ', error);
  }
};

export const logout = () => {
  try {
    if (typeof window !== 'undefined') {
      setUser(null);
      setItems(null);
    }
  } catch (error) {
    console.error('Logout error: ', error);
  }
};
