'use client';
import React from 'react';
import styled from 'styled-components';

import { Content } from '../components/uikit';
import PageLayout from '../components/PageLayout';
import Card from '../components/ArtCards/Card';
import type { ClaimedItem } from '../mockdata/ClaimedItems';
import { fetchArtItems } from '../utils/dataFetching';
import theme from '../constants/theme';
import type { ArtDataProps } from './art-works/[id]/page';

const Home = () => {
  // @ts-ignore
  const [artItems, setArtItems] = React.useState<ArtDataProps>([]);

  React.useEffect(() => {
    const fetchArt = async () => {
      const data = await fetchArtItems();
      setArtItems(data);
    };
    fetchArt();
  }, []);

  return (
    <PageLayout>
      <ContentContainer>
        {/* TODO: ADD SEARCH INPUT HERE - REMEMBER DEBOUNCER FOR API CALL */}

        <Items>
          {/* @ts-ignore */}
          {artItems.data?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              artist_display={item.artist_display}
              title={item.title}
              thumbnail={item.thumbnail}
              itemId={item.id}
            />
          ))}
        </Items>
      </ContentContainer>
    </PageLayout>
  );
};

export default Home;

const ContentContainer = styled(Content)`
  padding-bottom: 100px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme.spacing.xlarge} ${theme.spacing.large};
`;
