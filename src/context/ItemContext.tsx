import React, { createContext, useContext } from 'react';
import { usePersistedState } from './Context';

type Item = {
  id: number;
  title: string;
  artist_display: string;
  thumbnail?: {
    lqip: string;
    alt_text?: string;
  };
  imageUrl?: string;
  userId: number;
};

interface ItemsContextValue {
  items: Item[];
  setItems: (items: Item[] | null) => void;
  insertItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}

export const ItemContext = createContext<undefined | ItemsContextValue>(
  undefined
);

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [_items, setItems] = usePersistedState<Item[]>('items_');
  const items = _items || [];

  const insertItem = (item: Item) => {
    const currentItems = [...items];

    if (item) {
      // Check if the art item already exists in the items array and if so, ignore it
      const itemIndex = currentItems.findIndex(
        (currentItem) => currentItem.id === item.id
      );

      if (itemIndex !== -1) {
        // Item already exists, so igoring the item
        return;
      }

      setItems([...currentItems, item]);
    }
  };

  const removeItem = (id: Item['id']) => {
    const currentItems = [...items];
    if (currentItems) {
      const itemIndex = currentItems.findIndex(
        (currentItem) => currentItem.id === id
      );
      if (itemIndex !== -1) {
        currentItems.splice(itemIndex, 1);
        setItems([...currentItems]);
      }
    }
  };

  return (
    // @ts-ignore
    <ItemContext.Provider value={{ items, setItems, insertItem, removeItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const value = useContext(ItemContext);
  if (!value) {
    throw Error('useItems should be used inside items context provider');
  }
  return value;
};
