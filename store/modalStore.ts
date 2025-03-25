import { create } from 'zustand'
import { TWord } from "@/app/types/word";

interface ModalState {
  modalStatus: "add" | "edit" | null;
  editWord: TWord | null;
  openModal: (type: "add" | "edit", id: TWord) => void;
  closeModal: () => void;
}

 const useModal = create<ModalState>((set) => ({
   modalStatus: null,
   editWord: null,
   openModal: (type, wordEdit) => set({ modalStatus: type, editWord: wordEdit }),
   closeModal: () => set({ modalStatus: null, editWord: null }),
 }));


 export default useModal;