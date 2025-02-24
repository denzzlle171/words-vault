'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import classnames from "classnames";


export const FindControl = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const currentSort = searchParams.get("sort") || "desc";
  
  const createSortedLink = (direction: string) => {
    params.set("sort", direction);
    return `?${params.toString()}`;
  };

  return (
    <div>
      <div>
        <input type="text" />
        <button>Find</button>
      </div>
      <Link
        href={createSortedLink("asc")}
        className={classnames(
          "border border-gray-500 px-3 py-1 rounded",
          { "bg-gray-800 text-white": currentSort === "asc" },
          { "bg-white text-black": currentSort !== "asc" }
        )}
      >
        asc
      </Link>
      <Link
        href={createSortedLink("desc")}
        className={classnames(
          "border border-gray-500 px-3 py-1 rounded",
          { "bg-gray-800 text-white": currentSort === "desc" },
          { "bg-white text-black": currentSort !== "desc" }
        )}
      >
        desc
      </Link>
    </div>
  );
};
