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
};

interface ItemsContextValue {
  items: Item[];
  setItems: (items: Item[] | null) => void;
  upsertItem: (item: Item) => void;
}

export const ItemContext = createContext<undefined | ItemsContextValue>(
  undefined
);

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [_items, setItems] = usePersistedState<Item[]>('items_');
  const items = _items || [];

  const upsertItem = (item: Item) => {
    const currentItems = [...items];

    if (item) {
      const index = currentItems.findIndex((p) => p.id === item.id);

      if (currentItems.length === 0) {
        const filteredItems = currentItems.filter(
          (artItem) => artItem.id !== item.id
        );
        setItems(filteredItems);
      } else if (index !== -1) {
        currentItems[index] = { ...item };
        setItems(currentItems);
      } else {
        setItems([...currentItems, item]);
      }
    }
  };

  return (
    <ItemContext.Provider value={{ items, setItems, upsertItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export function useItems() {
  const value = useContext(ItemContext);
  if (!value) {
    throw Error('useItems should be used inside items context provider');
  }
  return value;
}
