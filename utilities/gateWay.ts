import { IFormInput } from "@/app/types/form";
import { TResponse } from "@/app/types/response";


const BASE_URL = "http://localhost:3000/api/data";

// fetch words _______________________________________________________
export const fetchWords = async (
  page: number = 1,
  sort: "asc" | "desc" = "desc",
  find?: string,
  limit: number = 10,
): Promise<TResponse> => {

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort,
  });

  if (find) {
    params.set("find", find);
  }
  const url = `${BASE_URL}?${params.toString()}`;

console.log(url); //🎈

  const response = await fetch(
    url,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch words!!!");
  }
  return response.json();
};

//add word _______________________________________________________
export const postWord = async (
  data: IFormInput,
  closeModal: () => void,
  router: any
) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    closeModal();
    router.refresh(); //возможно будет оптимизировано в будущем через обновление стейта 💨

    console.log(result); //🎈
  } catch (error) {
    console.error("Failed to add word:", error);
  }
};

// delete word _______________________________________________________
export const dellateWord = async (
  id: number,
  router: any,
  closeDialog: () => void
) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("failed to delete word");
    }
    closeDialog();
    router.refresh(); //возможно будет оптимизировано в будущем через обновление стейта 💨
  } catch (error) {
    console.error("Ошибка при удалении:", error);
  }
};

// update word _______________________________________________________
export const updateWord = async (
  id: number,
  data: IFormInput,
  closeModal: () => void,
  router: any
) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to update word");

    closeModal();
    router.refresh();
  } catch (error) {
    console.error("Error updating word:", error);
  }
};
