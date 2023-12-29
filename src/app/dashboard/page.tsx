'use client';
import React from 'react';
import styled from 'styled-components';

import PageLayout from '../../components/PageLayout';
import { Content, Text, Button } from '../../components/uikit';
import { useUser, useItems } from '../../context';
import Toast from '../../components/Toast';
import CardWithDelete from '../../components/ArtCards/CardWithDelete';
import theme from '../../constants/theme';

// TODO: ADD A HOVER AFFECT FOR THE IMAGE - WHEN HOVERING, SHOW THE DESCRIPTION OF THE ARTWORK WITH A DARKER BACKGROUND

// TODO: GET STATIC PROPS FOR FETCHING THE IMAGE DATA
// REFERENCE: https://blog.anishde.dev/amazing-preview-images-with-nextjs-and-lqip-modern

const Dashboard = () => {
  const { user } = useUser();
  const { items, removeItem } = useItems();
  const [showToast, setShowToast] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  // Creating an illusion of loading state for mock data
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  // Filter through the claimed items and only return the items that match the logged in user id
  const userClaimedItems = items.filter((item) => item.userId === user?.id);

  const handleItemDelete = (id: number) => {
    try {
      // Remove the item from the context
      // @ts-ignore
      removeItem(id);

      // Show a success message to user
      setShowToast(true);
    } catch (error) {
      console.error('handleItemDelete error: ', error);
    }
  };

  return (
    <PageLayout>
      <Content>
        <Button
          id='search-button'
          variant='primary'
          varianttype='link'
          href='/'
          title='Click here to search for art'
        >
          Search art
        </Button>
        <Text variant='body' color='primary'>
          Your claimed art pieces
        </Text>
        {isLoading && (
          <Text variant='body' color='secondary'>
            Loading...
          </Text>
        )}
        {!isLoading ? (
          userClaimedItems.length > 0 ? (
            <>
              <Items>
                {userClaimedItems.map((item, index) => (
                  <CardWithDelete
                    key={index}
                    id={item.id}
                    artist_display={item.artist_display}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    imageUrl={item.imageUrl}
                    handleClick={handleItemDelete}
                  />
                ))}
              </Items>
              {showToast && <Toast message='Update successful!' showIcon />}
            </>
          ) : (
            <Text variant='body' color='secondary'>
              You have not claimed any art pieces yet
            </Text>
          )
        ) : null}
      </Content>
    </PageLayout>
  );
};
export default Dashboard;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme.spacing.xlarge} ${theme.spacing.large};
`;
