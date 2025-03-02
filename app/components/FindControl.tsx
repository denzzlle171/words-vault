'use client';
import { useState } from "react";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import classnames from "classnames";



export const FindControl = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const currentSort = searchParams.get("sort") || "desc";
  
  const createSortedLink = (direction: string) => {
    params.set("sort", direction);
    return `?${params.toString()}`;
  };

  const createSearchPath = (q: string) => {
    params.set("find", q);
    if (!q) {
      params.delete("find");
    }
    router.push(`?${params.toString()}`);
  };


  return (
    <div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <Button
          title="Search"
          size="sm"
          color="bg-blue-300"
          hoverColor="hover:bg-blue-400"
          onClick={() => createSearchPath(search)}
        />
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
