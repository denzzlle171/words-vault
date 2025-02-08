"use client";
import { useRouter } from "next/navigation";
import { TWord } from "@/app/types/word";
import { Button } from "@/app/components/Button";
import { TrashIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

type propType = {
  word: TWord;
};

export const WordItem = ({ word }: propType) => {
  const router = useRouter();

// винести в отдельний файл
  const dellateWord = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/data/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("failed to delete word");
      }
      router.refresh(); //возможно будет оптимизировано в будущем через обновление стейта 💨

    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  return (
    <li className="flex bg-indigo-50 rounded-lg  p-3 justify-around  w-60">
      <div>
        <span>{word.word}</span>
        <span>-</span>
        <span>{word.translate}</span>
      </div>
      <div className="flex gap-2">
        <Button
          hoverColor="hover:bg-yellow-400"
          size="round"
          title={<PencilSquareIcon className="h-4 w-4" />}
        />
        <Button
          hoverColor="hover:bg-red-500"
          onClick={() => dellateWord(word.id)}
          size="round"
          title={<TrashIcon className="h-4 w-4" />}
        />
      </div>
    </li>
  );
};
