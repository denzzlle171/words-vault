import { XMarkIcon } from "@heroicons/react/20/solid";

import { Button } from "@/app/components/Button";
import { WordForm } from "@/app/components/WordForm";
import useModal from "@/store/store";

export const Modal = () => {
  const closeModal = useModal((state) => state.closeModal);

  return (
    <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center backdrop-blur-sm">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mt-1 mr-6">Add your new word </h2>
          <Button
            title={<XMarkIcon />}
            hoverColor="hover:bg-red-500"
            colorText="text-red-600/100"
            onClick={closeModal}
            size="round"
          />
        </div>
        <WordForm />
        <div className="flex flex-col w-full gap-2 justify-between"></div>
      </div>
    </div>
  );
};


