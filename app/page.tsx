import { WordItem } from "@/app/components/WordItem";
import { TWord } from "@/app/types/word";

const fetchWords = async (): Promise<TWord[]> => {
  const response = await fetch("http://localhost:3000/api/data", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch words");
  }
  return response.json();
};

const Home = async () => {
  const myData = await fetchWords();
  return (
    <>
      <div className="px-28 py-20 max-w-screen-lg m-auto border-x border-slate-300">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center ">
          {myData.map((word) => (
            <WordItem key={word.id} word={word} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;


