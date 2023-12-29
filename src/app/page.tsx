'use client';
import React from 'react';
import styled from 'styled-components';

import { Content } from '../components/uikit';
import PageLayout from '../components/PageLayout';
import Card from '../components/ArtCards/Card';
import { fetchArtItems } from '../utils/dataFetching';
import theme from '../constants/theme';
import type { ArtDataProps } from './art-works/[id]/page';

const Home = () => {
  // @ts-ignore
  const [artItems, setArtItems] = React.useState<ArtDataProps>([]);

  // TODO: USE REACT QUERY INSTEAD OF USE STATE
  React.useEffect(() => {
    const fetchArt = async () => {
      const data = await fetchArtItems();
      // @ts-ignore
      setArtItems(data);
    };

    fetchArt();
  }, []);

  return (
    <PageLayout>
      <ContentContainer>
        {/* TODO: ADD SEARCH INPUT HERE - REMEMBER DEBOUNCER FOR API CALL */}
        <Items>
          {Array.isArray(artItems.artData?.data) &&
            artItems.artData?.data.map((artItem) => (
              <Card
                key={artItem.id}
                id={artItem.id}
                artist_display={artItem.artist_display}
                title={artItem.title}
                thumbnail={artItem.thumbnail}
                imageUrl={
                  artItems.imageData[artItems.artData.data.indexOf(artItem)]
                }
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
