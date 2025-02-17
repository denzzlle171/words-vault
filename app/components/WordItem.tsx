"use client";
import { useRouter } from "next/navigation";
import { TWord } from "@/app/types/word";
import { Button } from "@/app/components/Button";
import { TrashIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { dellateWord } from "@/utilities/gateWay";
import { Modal } from "@/app/components/Modal";
import { updateWord } from "@/utilities/gateWay";
import  useModal  from "@/store/store";

type propType = {
  word: TWord;
};

export const WordItem = ({ word }: propType) => {
  const router = useRouter();

  const closeModal = useModal((state) => state.closeModal);
  const openModal = useModal((state) => state.openModal);
  const modalStatus = useModal((state) => state.modalStatus);

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
          onClick={() => openModal("edit")}
          title={<PencilSquareIcon className="h-4 w-4" />}
        />
        <Button
          hoverColor="hover:bg-red-500"
          onClick={() => dellateWord(word.id, router)}
          size="round"
          title={<TrashIcon className="h-4 w-4" />}
        />
      </div>

      {modalStatus === "edit" && (
        <Modal
          title="Edit Word"
          defaultValues={word}
          onSubmit={(data) => updateWord(word.id, data, closeModal, router)}
        />
      )}
    </li>
  );
};
