export type BookStatus = 'NEW' | 'IN_PROGRESS' | 'FINISHED';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  status: BookStatus;
}
