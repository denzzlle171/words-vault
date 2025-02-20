"use client";
import { useRouter } from "next/navigation";
import { TWord } from "@/app/types/word";
import { Button } from "@/app/components/Button";
import { TrashIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { Modal } from "@/app/components/Modal";
import { Dialog } from "@/app/components/Dialog";
import { updateWord } from "@/utilities/gateWay";
import useModal from "@/store/modalStore";
import useDialog from "@/store/dialogStore";

type propType = {
  word: TWord;
};

export const WordItem = ({ word }: propType) => {
  const router = useRouter();

  const closeModal = useModal((state) => state.closeModal);
  const openModal = useModal((state) => state.openModal);
  const modalStatus = useModal((state) => state.modalStatus);

  const dialogStaus = useDialog((state) => state.dialogStaus);
  const openDialog = useDialog((state) => state.openModal);
 

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
          color="bg-yellow-300"
          onClick={() => openModal("edit")}
          title={<PencilSquareIcon className="h-4 w-4" />}
        />
        <Button
          hoverColor="hover:bg-red-600"
          color="bg-red-400"
          onClick={() => openDialog()}
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

      {dialogStaus === true && <Dialog title="Are you sure?" id={word.id} />}
    </li>
  );
};

//dialogStaus ===