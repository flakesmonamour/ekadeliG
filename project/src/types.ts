export type ItemStatus = 'approved' | 'declined' | 'pending';

export interface Item {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  status: ItemStatus;
  type: 'lost' | 'found';
}