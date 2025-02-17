"use client";
import useModal from "@/store/store";
import { Button } from "@/app/components/Button";
import { Modal } from "@/app/components/Modal"
import { useRouter } from "next/navigation";
import { postWord } from "@/utilities/gateWay";
// import { PopUp } from "@/app/components/PopUp" // its for popUp message 

export const AddWord = () => {
  const router = useRouter();
  const closeModal = useModal((state) => state.closeModal);
  const openModal = useModal((state) => state.openModal);
  const modalStatus = useModal((state) => state.modalStatus);

  return (
    <>
      <Button
        title="New Word"
        color="bg-yellow-300"
        hoverColor="hover:bg-yellow-400"
        onClick={() => openModal("add")}
        colorText="text-red-600/100"
      />
      {modalStatus === "add" && (
        <Modal
          title="Add new Word"
          onSubmit={(data) => postWord(data, closeModal, router)}
        />
      )}
      {/* <PopUp/> */}
    </>
  );
};
