import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useWindowScroll } from 'react-use';
import { BiMenu } from 'react-icons/bi';
import { IoMdClose, IoMdLogOut } from 'react-icons/io';

import ArtLogo from '../../assets/artLogo.webp';
import { MOBILE_HEADER_HEIGHT } from '../../constants';
import { Button, Content, Text } from '../uikit';
import theme from '../../constants/theme';
import type { User } from '../../mockdata/User';

type Props = {
  username: User['username'] | string;
};

const MobileHeader = ({ username }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const keyPress = React.useCallback(
  //   (e: React.KeyboardEvent<HTMLElement>) => {
  //     if (e.key === 'Escape' && showMenu) {
  //       setShowMenu(false);
  //     }
  //   },
  //   [setShowMenu, showMenu]
  // );

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showMenu, setShowMenu]);

  const { y: scrollY } = useWindowScroll();
  const [isStuck, setStuck] = React.useState(false);

  React.useEffect(() => {
    if (scrollY >= MOBILE_HEADER_HEIGHT && !isStuck) {
      setStuck(true);
    } else if (scrollY < MOBILE_HEADER_HEIGHT && isStuck) {
      setStuck(false);
    }
  }, [scrollY, isStuck]);

  return (
    <Container stuck={isStuck}>
      <MenuContainer>
        <Nav href='/'>
          <MobileImage src={ArtLogo.toString()} alt='Art Paradise' />
        </Nav>
        <IconContainer onClick={toggleMenu}>
          {showMenu ? (
            <IoMdClose color={theme.colors.primary} size={30} />
          ) : (
            <BiMenu color={theme.colors.primary} size={32} />
          )}
        </IconContainer>
      </MenuContainer>
      <MenuContent isOpen={showMenu} className={showMenu ? 'isOpen' : ''}>
        <ButtonContainer>
          <Text variant='body' color='secondary'>
            {username}
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
        </ButtonContainer>
      </MenuContent>
    </Container>
  );
};

export default MobileHeader;

const Nav = styled(Link)`
  width: max-content;
  height: max-content;
`;

const Container = styled.nav<{ stuck: boolean }>`
  display: none;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  position: fixed;
  z-index: 4;
  background-color: ${theme.colors.white};
  width: 100%;
  ${(props) => props.stuck && theme.shadows.small};

  ${theme.media.tablet} {
    display: flex;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  width: 90%;
  margin: auto;
`;

const MenuContent = styled.div<{ isOpen: boolean }>`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  position: fixed;
  opacity: 0;
  visibility: hidden;
  height: 0%;
  transition: opacity 0.75s, visibility 0.75s, height 0.75s;
  overflow: hidden;
  margin-top: 70px;

  &.isOpen {
    opacity: 1;
    visibility: visible;
    height: calc(100vh - 68px);
    border-top: 1px solid ${theme.colors.border};
  }
`;

const MobileImage = styled.img`
  width: 124px;

  ${theme.media.mobileXL} {
    width: 90px;
  }
`;

const IconContainer = styled.span`
  margin-right: ${theme.spacing.normal};
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 32px 0px;
  width: 100%;
  border-top: 1px solid ${theme.colors.border};
`;

const LogoutButton = styled(Button)`
  border-radius: 50%;
  background-color: ${theme.colors.primary};
`;
