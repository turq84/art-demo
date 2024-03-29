'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Content, Stack, Text, Button } from '../../../components/uikit';
import PageLayout from '../../../components/PageLayout';
import { fetchArtItem } from '../../../utils/dataFetching';
import { useItems, useUser } from '../../../context';
import Toast from '../../../components/Toast';

export type ArtDataProps = {
  artData: {
    data: {
      id: number;
      artist_display: string;
      title: string;
      thumbnail: {
        lqip: string;
        width: number;
        height: number;
      };
      place_of_origin: string;
      date_display: string;
      description: string;
    };
  };
  data: { imageData: [string] };
  imageData: string;
  imageUrl: string;
};

const ArtDetail = ({ params }: { params: { id: string } }) => {
  // @ts-ignore
  const [artItem, setArtItem] = React.useState<ArtDataProps>([]);
  const [showToast, setShowToast] = React.useState<boolean>(false);
  const { insertItem } = useItems();
  const { user } = useUser();

  // TODO: USE REACT QUERY INSTEAD OF USE STATE
  React.useEffect(() => {
    const fetchArt = async () => {
      const data = await fetchArtItem(parseInt(params.id));
      // @ts-ignore
      setArtItem(data);
    };
    fetchArt();
  }, []);

  const handleClaim = () => {
    if (!user) return;
    insertItem({
      id: artItem.artData.data.id,
      artist_display: artItem.artData.data.artist_display,
      title: artItem.artData.data.title,
      thumbnail: artItem.artData.data.thumbnail,
      imageUrl: artItem.data?.imageData[0],
      userId: user.id,
    });

    // Show a success message to user
    setShowToast(true);
  };

  const labelContent = [
    {
      label: 'Artist',
      value: artItem.artData?.data.artist_display || 'Unknown',
    },
    {
      label: 'Title',
      value: artItem.artData?.data.title || 'Unknown',
    },
    {
      label: 'Origin',
      value: artItem.artData?.data.place_of_origin || 'Unknown',
    },
    {
      label: 'Date',
      value: artItem.artData?.data.date_display || 'Unknown',
    },
    {
      label: 'Description',
      value: artItem.artData?.data.description || 'Unknown',
    },
  ];

  // Remove HTML tags from the description
  const sanitizeString = (input: string) => {
    if (typeof input === 'string') {
      return input.replace(/(<([^>]+)>)/gi, '');
    } else {
      return input;
    }
  };

  return (
    <PageLayout>
      <ContentContainer>
        <Stack axis='x' justify='space-between' spacing='xlarge'>
          {artItem.artData?.data?.thumbnail ? (
            <ArtImage
              src={artItem.imageUrl}
              alt={artItem.artData?.data.title}
              width={artItem.artData?.data?.thumbnail?.width || 300}
              height={artItem.artData?.data?.thumbnail?.height || 300}
            />
          ) : (
            <PlaceholderBox>
              <Text variant='body' color='primary'>
                No image available
              </Text>
            </PlaceholderBox>
          )}

          <ContentSection axis='y' spacing='medium'>
            {/* TODO: IF ITEM HAS BEEN ALREADY CLAIMED, SAY "CLAIMED" INSTEAD OF "CLAIM PIECE" */}
            <Button
              id='claim-art-button'
              variant='primary'
              varianttype='button'
              onClick={handleClaim}
            >
              Claim piece
            </Button>
            {labelContent.map(({ label, value }, index) => (
              <LabelContainer key={index} axis='y' spacing='none'>
                <Text variant='label'>{label}</Text>
                <Text variant='body'>{sanitizeString(value)}</Text>
              </LabelContainer>
            ))}
          </ContentSection>
        </Stack>
        {showToast && <Toast message='Art piece claimed!' />}
      </ContentContainer>
    </PageLayout>
  );
};

export default ArtDetail;

const ContentContainer = styled(Content)`
  padding-bottom: 100px;
`;

const ContentSection = styled(Stack)`
  width: 100%;
`;

const ArtImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-height: 300px;
`;

const LabelContainer = styled(Stack)``;

const PlaceholderBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
