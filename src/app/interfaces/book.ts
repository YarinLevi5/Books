import { Character } from './character';
export interface Book {
  title: string;
  characters: Character[];
  date: Date;
}
