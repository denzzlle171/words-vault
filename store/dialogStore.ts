import { create } from 'zustand'

interface dialogState {
  dialogStaus: boolean;
  wordId: number | null;
  openDialog: (id: number) => void;
  closeDialog: () => void;
}

const useDialog = create<dialogState>((set) => ({
  dialogStaus: false,
  wordId: null,
  openDialog: (id) => set({ dialogStaus: true, wordId: id }),
  closeDialog: () => set({ dialogStaus: false, wordId: null }),
}));


 export default useDialog;