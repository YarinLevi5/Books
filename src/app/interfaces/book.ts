import { Character } from './character';
export interface Book {
  id?: number;
  title: string;
  characters: Character[];
  genre: string;
  image: string;
  price: number;
  quantity: number;
}
