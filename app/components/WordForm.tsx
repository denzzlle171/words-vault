import{useRouter} from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/Button";
import classnames from "classnames";
import useModal from "@/store/store";

interface IFormInput {
  word: string;
  translate: string;
  tag: string;
}

export const WordForm = () => {
const router = useRouter();
 const closeModal = useModal((state) => state.closeModal);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    defaultValues: {
      word: "",
      translate: "",
      tag: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await fetch("http://localhost:3000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      closeModal();
      router.refresh()

      console.log(result); //🎈

    } catch (error) {
      console.error("Failed to add word:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 my-6 "
    >
      <div className="relative">
        <input
          {...register("word", {
            required: "field is empty",
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters",
            },
          })}
          placeholder="Your Word"
          className={classnames("input-style", { "bg-red-200": errors.word })}
        />
        {errors.word && (
          <span className="input-messege-err">{errors.word.message}</span>
        )}
      </div>

      <div className="relative">
        <input
          {...register("tag", {
            required: "field is empty",
            maxLength: {
              value: 15,
              message: "Maximum length is 15 characters",
            },
          })}
          placeholder="Word's tag"
          className={classnames("input-style", { "bg-red-200": errors.tag })}
        />
        {errors.tag && (
          <span className="input-messege-err">{errors.tag.message}</span>
        )}
      </div>

      <div className="relative">
        <input
          {...register("translate", {
            required: "field is empty",
            maxLength: {
              value: 50,
              message: "Maximum length is 50 characters",
            },
          })}
          placeholder="Translate Word"
          className={classnames("input-style", {
            "bg-red-200": errors.translate,
          })}
        />
        {errors.translate && (
          <span className="input-messege-err">{errors.translate.message}</span>
        )}
      </div>

      <Button
        title="add"
        size="lg"
        color={isValid ? "bg-blue-400" : "bg-blue-200"}
        hoverColor="hover:bg-blue-500"
        isAvailable={!isValid}
      />
    </form>
  );
};

