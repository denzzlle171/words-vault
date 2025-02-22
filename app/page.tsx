import { WordItem } from "@/app/components/WordItem";
import { fetchWords } from "@/utilities/gateWay";
import { Pagination } from "@/app/components/Pagination";


type Props = {
  searchParams?: { page?: string };
};

const Home = async ({ searchParams }: Props) => {

  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const { words, totalPages } = await fetchWords(page);
  return (
    <>
      <div className="px-28 py-20 max-w-screen-lg m-auto border-x border-slate-300">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center ">
          {words.map((word) => (
            <WordItem key={word.id} word={word} />
          ))}
        </ul>
      </div>
      <Pagination totalPages={totalPages} currentPage={page} />
    </>
  );
};

export default Home;


