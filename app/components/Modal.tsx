import { XMarkIcon } from "@heroicons/react/16/solid";
import { Button } from "@/app/components/Button";
import { WordForm } from "@/app/components/WordForm";
import useModal from "@/store/modalStore";
import { IFormInput } from "@/app/types/form";

type ModalProps = {
  title: string;
  onSubmit: (data: IFormInput) => void;
  defaultValues?: IFormInput;
};

export const Modal: React.FC<ModalProps> = ({
  title,
  onSubmit,
  defaultValues,
}) => {
  const closeModal = useModal((state) => state.closeModal);

  return (
    <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center backdrop-blur-sm">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mt-1">{title}</h2>
          <Button
            title={<XMarkIcon />}
            hoverColor="hover:bg-red-500"
            colorText="text-red-600"
            onClick={closeModal}
            size="round"
          />
        </div>
        <WordForm onSubmit={onSubmit} defaultValues={defaultValues} />
        <div className="flex flex-col w-full gap-2 justify-between"></div>
      </div>
    </div>
  );
};
