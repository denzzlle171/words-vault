import { Button } from '@/app/components/Button'
import useModal from "@/store/store";

export const Modal = () => {
    const closeModal = useModal((state) => state.closeModal);

  return (
    <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center backdrop-blur-sm">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Добавить новое слово</h2>
        <form>💢form💢</form>
        <div className="flex flex-col w-full gap-2 justify-between">
          <Button title="add" />
          <Button
            title="close"
            hoverColor="hover:bg-red-500"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
};