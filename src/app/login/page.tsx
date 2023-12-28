'use client';
import React from 'react';
import styled from 'styled-components';
import { useFormState, useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';
import Image from 'next/image';

import { useUser, useItems } from '../../context';
import { loginFormAction } from '../../actions';
import type { User } from '../../mockdata/User';
import PageLayout from '../../components/PageLayout';
import Input from '../../components/Input';
import { Button } from '../../components/uikit';
import ArtLogo from '../../assets/artLogo.webp';
import type { Theme } from '../../constants/theme';
import theme from '../../constants/theme';
import { ClaimedItems } from '../../mockdata/ClaimedItems';

const Login = () => {
  const { pending } = useFormStatus();
  const { setUser, user } = useUser();
  const { items, insertItem } = useItems();
  const [redirectStatus, setRedirectStatus] = React.useState(false);

  const [formState, formAction] = useFormState(loginFormAction, {
    message: '',
    errors: undefined,
    fieldValues: {
      email: '',
      password: '',
    },
    user,
  });

  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (formState.message === 'success') {
      setUser(formState.user as User);

      // Add mock claimed art data for the user
      if (user) {
        ClaimedItems.forEach((item) => {
          if (item.userId === user.id) {
            insertItem({
              id: item.id,
              artist_display: item.artist_display,
              title: item.title,
              thumbnail: item.thumbnail,
              userId: user.id,
            });
          }
        });
        setRedirectStatus(true);
      }

      // Wait for the mock data to be added, then redirect to the dashboard
      if (redirectStatus) {
        redirect('/dashboard');
      }
    }
  }, [formState.message, setUser, redirectStatus]);

  return (
    <PageLayout>
      <Container>
        <Form ref={formRef} action={formAction}>
          <Stack axis='y' spacing='large' align='center'>
            <Logo src={ArtLogo} alt='Art Paradise logo' />
            <Input type='email' name='email' label='Email' />
            <Input type='password' name='password' label='Password' />
            <Button
              id='login-button'
              variant='primary'
              varianttype='button'
              type='submit'
              disabled={pending}
            >
              {pending ? 'Loading...' : 'Login'}
            </Button>
          </Stack>
        </Form>
      </Container>
    </PageLayout>
  );
};

export default Login;

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 100%;
`;

const Logo = styled(Image)`
  width: 200px;
  height: 75px;
`;

const Stack = styled.div<{
  axis: 'x' | 'y';
  spacing?: keyof Theme['spacing'];
  align?: React.CSSProperties['alignItems'];
}>`
  display: flex;
  flex-direction: ${(props) => (props.axis === 'x' ? 'row' : 'column')};
  justify-content: space-between;
  gap: ${(props) => theme.spacing[props.spacing || 'normal']};
  align-items: ${(props) => props.align || 'stretch'};
`;
