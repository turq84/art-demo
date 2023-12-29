'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { Text } from '../../components/uikit';
import theme from '../../constants/theme';

// TODO: ADD A HOVER AFFECT FOR THE IMAGE - WHEN HOVERING, SHOW THE DESCRIPTION OF THE ARTWORK WITH A DARKER BACKGROUND

type Props = {
  artist_display: string;
  id: number;
  imageUrl: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
  };
  title: string;
};

const Card = ({ artist_display, id, thumbnail, title, imageUrl }: Props) => {
  return (
    <ItemCardContainer href={`/art-works/${id}`}>
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
export default Card;

const ItemCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
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
