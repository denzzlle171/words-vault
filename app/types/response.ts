import { TWord } from "@/app/types/word";


export interface TResponse {
  words: TWord[];
  totalPages: number;
}