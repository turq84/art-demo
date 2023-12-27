'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useFormState, useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';

import { useUser } from '../context/UserContext';
import { loginFormAction } from '../actions';
import type { User } from '../data/User';

const Login = () => {
  const { pending } = useFormStatus();

  const { setUser, user } = useUser();

  const [formState, formAction] = useFormState(loginFormAction, {
    message: '',
    errors: undefined,
    fieldValues: {
      email: '',
      password: '',
    },
    user,
  });

  const formRef = useRef<HTMLFormElement>(null);

  console.log('formState: ', formState); // TODO: REMOVE

  useEffect(() => {
    // check if the user is already logged in
    if (user) {
      redirect('/dashboard');
    }

    if (formState.message === 'success') {
      setUser(formState.user as User);
      redirect('/dashboard');
    }
  }, [formState.message, setUser]);

  return (
    <div>
      {/* TODO: ADD LOGO */}
      status: {user && <div>Logged in as {user.email}</div>}
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {'user'}
        {JSON.stringify(user, null, 2)}
      </pre>
      <form ref={formRef} action={formAction}>
        <Input type='email' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Password' />
        <button type='submit' disabled={pending}>
          {pending ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Login;

const Input = styled.input``;
