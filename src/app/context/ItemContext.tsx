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
    const currentitems = [...items];

    if (item) {
      const index = currentitems.findIndex((p) => p.id === item.id);

      if (currentitems.length === 0) {
        const filtereditems = currentitems.filter(
          (artItem) => artItem.id !== item.id
        );
        setItems(filtereditems);
      } else if (index !== -1) {
        currentitems[index] = { ...item };
        setItems(currentitems);
      } else {
        setItems([...currentitems, item]);
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
