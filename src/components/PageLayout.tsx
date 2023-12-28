import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import { requireUser } from '../utils/auth';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  React.useEffect(() => {
    requireUser();
  }, []);

  return (
    <PageWrapper>
      <Header />
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
