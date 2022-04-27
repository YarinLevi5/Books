import { Character } from './character';
export interface Book {
  id?: string;
  title: string;
  characters: Character[];
  genre: string;
  image: string;
  price: number;
  quantity: number;
}
