import { Button } from "@/app/components/Button";
import useDialog from "@/store/dialogStore";
import { dellateWord } from "@/utilities/gateWay";
import { useRouter } from "next/navigation";

type propType = {
  title: string;
};

export const Dialog = ({ title }: propType) => {
  const router = useRouter();
  const closeDialog = useDialog((state) => state.closeDialog);
  const id = useDialog((state) => state.wordId);
  
  console.log(id); //🎈
if (!id) return null;
  return (
    <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center backdrop-blur-sm">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex justify-around mt-4">
          <Button
            title="Yes"
            hoverColor="hover:bg-red-600"
            color="bg-red-400"
            onClick={() => dellateWord(id, router, closeDialog)}
          />
          <Button
            title="No"
            hoverColor="hover:bg-green-600"
            color="bg-green-400"
            onClick={closeDialog}
          />
        </div>
      </div>
    </div>
  );
};
