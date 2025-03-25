'use client';

import  usePopUp  from "@/store/popUpStore";

export const PopUp = () => {

  const popUpMessage = usePopUp((state) => state.popUpMessage);
  return (
    <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center backdrop-blur-sm z-10">
      <div className="bg-white p-4 rounded-xl shadow-lg">{popUpMessage}</div>
    </div>
  );
}