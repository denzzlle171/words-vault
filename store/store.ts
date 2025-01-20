import { create } from 'zustand'

interface ModalState {
  isOpen: boolean; 
  openModal: () => void; 
  closeModal: () => void; 
}


 const useModal = create<ModalState>((set) => ({
   isOpen: false,
   openModal: () => set({ isOpen: true }),
   closeModal: () => set({ isOpen: false }),
 }));


 export default useModal;