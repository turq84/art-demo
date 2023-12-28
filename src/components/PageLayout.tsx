import React from 'react';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';

import Header from './Header';
import { requireUser } from '../utils/auth';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  // Check if the user is on the login page - there's no need to show the header on the login page
  const pathname = usePathname();
  const stripPath = pathname.split('/')[1];
  const isLoginPage = stripPath === 'login' ? true : false;

  React.useEffect(() => {
    requireUser();
  }, []);

  return (
    <PageWrapper>
      {!isLoginPage && <Header />}
      <Main>{children}</Main>
    </PageWrapper>
  );
};
export default Layout;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  position: relative;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1 0 auto;
  padding-top: 150px;
`;
