import { useState, useCallback } from 'react';
import { Item, ItemStatus } from '../types';

const initialItems: Item[] = [
  {
    id: 1,
    title: "Apple Watch Series 7",
    description: "Found in the central park area, space gray color",
    location: "Central Park",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&q=80&w=1000",
    status: "pending",
    type: "found"
  },
  {
    id: 2,
    title: "Brown Leather Wallet",
    description: "Lost near the coffee shop, contains ID cards",
    location: "Downtown Coffee Shop",
    date: "2024-03-14",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000",
    status: "pending",
    type: "lost"
  }
];

export const useItems = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleStatusChange = useCallback((itemId: number, newStatus: ItemStatus) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, status: newStatus } : item
      )
    );
  }, []);

  const handleAddItem = useCallback((newItem: Omit<Item, 'id' | 'status'>) => {
    setItems(prevItems => [...prevItems, {
      ...newItem,
      id: prevItems.length + 1,
      status: 'pending'
    }]);
  }, []);

  return {
    items,
    handleStatusChange,
    handleAddItem
  };
};