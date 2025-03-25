import { create } from 'zustand'

interface popUpState {
  popUpMessage: string;
  popUpStaus: boolean;
  setPopUp: (message: string) => void;
  openPopUp: () => void;
  closePopUp: () => void;
}

const usePopUp = create<popUpState>((set) => ({
  popUpMessage: "ups....!!!",
  popUpStaus: false,
  // popUpStaus: true,
  setPopUp: (message: string) => set({ popUpMessage: `${message}` }),
  openPopUp: () => set({ popUpStaus: true }),
  closePopUp: () => set({ popUpStaus: false }),
}));


 export default usePopUp;