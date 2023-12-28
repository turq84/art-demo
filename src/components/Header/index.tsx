import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';
import { IoMdLogOut } from 'react-icons/io';

import { Content, Button, Stack, Text } from '../uikit';
import MobileHeader from './MobileHeader';
import { HEADER_HEIGHT } from '../../constants';
import theme from '../../constants/theme';
import { requireUser } from '../../utils/auth';
import ArtLogo from '../../assets/artLogo.webp';

export type Links = {
  path: string;
  title: string;
};

const Header = () => {
  const { y: scrollY } = useWindowScroll();
  const [isStuck, setStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (scrollY >= HEADER_HEIGHT && !isStuck) {
      setStuck(true);
    } else if (scrollY < HEADER_HEIGHT && isStuck) {
      setStuck(false);
    }
  }, [scrollY, isStuck]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const user = requireUser();

  return (
    <>
      <Container ref={headerRef} stuck={isStuck}>
        <ContentContainer axis='x' justify='space-between' align='center'>
          <Nav href='/'>
            <Logo src={ArtLogo.toString()} alt='Art Paradise logo' />
          </Nav>

          {user && (
            <Stack axis='x' spacing='large' align='center'>
              <Text variant='body' color='secondary'>
                {user.username}
              </Text>
              <LogoutButton
                id='logout-button'
                variant='secondary'
                varianttype='button'
                type='submit'
                size='small'
              >
                <IoMdLogOut size={24} color={theme.colors.white} />
              </LogoutButton>
            </Stack>
          )}
        </ContentContainer>
      </Container>
      <MobileHeader username={user?.username || ''} />
    </>
  );
};

export default Header;

const Container = styled.nav<{ stuck: boolean }>`
  z-index: 4;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 75px;
  background-color: ${(props) =>
    props.stuck ? theme.colors.white : 'transparent'};
  ${(props) => props.stuck && theme.shadows.small};
  transition: all 200ms ease-in-out;

  ${theme.media.tablet} {
    display: none;
  }
`;

const ContentContainer = styled(Content)`
  width: 100%;
  padding: 24px 0px;
`;

const Nav = styled(Link)`
  width: max-content;
  height: max-content;
`;

const LogoutButton = styled(Button)`
  border-radius: 50%;
  background-color: ${theme.colors.primary};
`;

const Logo = styled.img`
  width: 100px;
`;
