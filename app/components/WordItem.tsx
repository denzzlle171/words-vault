import { TWord } from "@/app/types/word";

type propType = {
  word: TWord;
};

export const WordItem = ({ word }: propType) => {

  console.log(word);
  return (
    <li className="flex bg-indigo-50 rounded-lg  p-3 justify-around  w-60">
      <span>{word.word}</span>
      <span>-</span>
      <span>{word.translate}</span>
    </li>
  );
};
