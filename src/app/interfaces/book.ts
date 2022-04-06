import { Character } from './character';
export interface Book {
  id?: number;
  title: string;
  characters: Character[];
  date: Date;
  genre: string;
  image: string;
  price: number;
  quantity: number;
}
