import { create } from 'zustand'

interface dialogState {
  dialogStaus: boolean
  openModal: () => void;
  closeModal: () => void;
}

 const useDialog = create<dialogState>((set) => ({
   dialogStaus: false,
   openModal: () => set({ dialogStaus: true }),
   closeModal: () => set({ dialogStaus: false }),
 }));


 export default useDialog;