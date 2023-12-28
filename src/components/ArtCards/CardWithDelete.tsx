'use client';
import React from 'react';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

import { Text } from '../../components/uikit';
import theme from '../../constants/theme';

// TODO: ADD A HOVER AFFECT FOR THE IMAGE - WHEN HOVERING, SHOW THE DESCRIPTION OF THE ARTWORK WITH A DARKER BACKGROUND

type Props = {
  artist_display: string;
  handleClick: (id: number) => void;
  id: number;
  itemId: number;
  thumbnail:
    | {
        lqip: string;
      }
    | undefined;
  title: string;
};

const CardWithDelete = ({
  artist_display,
  handleClick,
  id,
  itemId,
  thumbnail,
  title,
}: Props) => {
  return (
    <ItemCardContainer href={`/art-works/${itemId}`}>
      <DeleteButton onClick={() => handleClick(id)} title='Delete'>
        <MdDeleteForever size={18} color={theme.colors.primary} />
      </DeleteButton>

      {thumbnail?.lqip ? (
        <ArtImage src={thumbnail.lqip} alt={title} width={1} height={1} />
      ) : (
        <PlaceholderBox>
          <Text variant='body' color='primary'>
            No image available
          </Text>
        </PlaceholderBox>
      )}
      <ItemCard>
        <Text variant='body-small' color='secondary'>
          {artist_display}
        </Text>
        <Text variant='body' color='primary'>
          {title}
        </Text>
      </ItemCard>
    </ItemCardContainer>
  );
};
export default CardWithDelete;

const ItemCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  z-index: 0;
  transition: all 0.18ss linear 0s;

  &:hover {
    ${theme.shadows.medium};
    transition: all 0.18s linear 0s;
  }
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DeleteButton = styled.button`
  display: flex;
  position: absolute;
  top: -10px;
  right: -10px;
  padding: ${theme.spacing.xsmall};
  border-radius: 50%;
  background-color: ${theme.colors.tietary};
  border: none;
  z-index: 1;

  &:hover {
    background-color: ${theme.colors.tietaryMuted};
  }
`;

const ArtImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-height: 300px;
`;

const PlaceholderBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
