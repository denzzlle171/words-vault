"use client";
import useModal from "@/store/store";
import { Button } from "@/app/components/Button";
 import { Modal } from "@/app/components/Modal"
// import { PopUp } from "@/app/components/PopUp" // its for popUp message 

export const AddWord = () => {
  const openModal = useModal((state) => state.openModal);
   const isOpen = useModal((state) => state.isOpen);

  return (
    <>
      <Button
        title="New Word"
        color="bg-yellow-300"
        hoverColor="hover:bg-yellow-400"
        onClick={openModal}
        colorText="text-red-600/100"
      />
      {isOpen && <Modal />}
     {/* <PopUp/> */}
    </>
  );
};
