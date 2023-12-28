'use server';
import * as Z from 'zod';

import type { User } from './data/User';
import { UserData } from './data/User';
import { useUser } from './context/UserContext';

// Login action
const loginSchema = Z.object({
  email: Z.string({
    required_error: 'Email is required',
  }).email('Please enter a valid email address'),
  password: Z.string().optional(),
});

type Fields = {
  email: string;
  password: string;
};

export type FormState = {
  message: string;
  errors: Record<keyof Fields, string> | undefined;
  fieldValues: Fields;
};

export const loginFormAction = (prevState: FormState, formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    // Validating the form data
    loginSchema.parse({ email, password });

    // Check if the user exists
    const user = UserData.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      throw new Error('User not found');
    }

    // Remove password from user object
    const { password: _password, ...userWithoutPassword } = user;

    return {
      message: 'success',
      errors: undefined,
      fieldValues: {
        email: '',
        password: '',
      },
      user: userWithoutPassword,
    };
  } catch (error) {
    const errors = error as Z.ZodError;
    return {
      message: 'error',
      errors: undefined, // TODO: FIX THIS
      fieldValues: {
        email,
        password,
      },
      user: null,
    };
  }
};
