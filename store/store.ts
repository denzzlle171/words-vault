import { create } from 'zustand'

interface ModalState {
  modalStatus: "add" | "edit" | null; 
  openModal: (type: "add" | "edit") => void;
  closeModal: () => void; 
}


 const useModal = create<ModalState>((set) => ({
   modalStatus: null,
   openModal: (type) => set({ modalStatus: type }),
   closeModal: () => set({ modalStatus: null }),
 }));


 export default useModal;