'use client';
import React from 'react';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

import { Text, Stack } from '../../components/uikit';
import theme from '../../constants/theme';

// TODO: ADD A HOVER AFFECT FOR THE IMAGE - WHEN HOVERING, SHOW THE DESCRIPTION OF THE ARTWORK WITH A DARKER BACKGROUND

type Props = {
  artist_display: string;
  handleClick: (id: number) => void;
  id: number;
  imageUrl: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
  };
  title: string;
};

const CardWithDelete = ({
  artist_display,
  handleClick,
  id,
  thumbnail,
  title,
  imageUrl,
}: Props) => {
  return (
    <ItemCardContainer axis='y'>
      <DeleteButton onClick={() => handleClick(id)} title='Delete'>
        <MdDeleteForever size={18} color={theme.colors.primary} />
      </DeleteButton>
      {imageUrl ? (
        <ArtImage
          src={imageUrl}
          alt={title}
          width={thumbnail?.width || 300}
          height={thumbnail?.height || 300}
          blurDataURL={thumbnail.lqip || ''} // preview image
        />
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
        <Title href={`/art-works/${id}`}>{title}</Title>
      </ItemCard>
    </ItemCardContainer>
  );
};
export default CardWithDelete;

const ItemCardContainer = styled(Stack)`
  position: relative;
  text-decoration: none;
  z-index: 0;
  transition: all 0.18ss linear 0s;

  &:hover {
    a {
      text-decoration: underline;
    }
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

const Title = styled(Link)`
  text-decoration: none;
  ${theme.typography.body};
  color: ${theme.colors.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &:hover {
    text-decoration: underline;
  }
`;
