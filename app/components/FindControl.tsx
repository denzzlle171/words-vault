'use client';
import { useState } from "react";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import classnames from "classnames";
import { XMarkIcon } from "@heroicons/react/16/solid";



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
  const resetSearch = () => {
    setSearch("");
    params.delete("find");
    router.push(`?${params.toString
    }`);
  }


  return (
    <div>
      <div className=" flex items-center">
        <div className="relative flex items-center  z-0">
          <input
            className="pl-3 pr-10 py-1 rounded-full outline-none shadow-sm mr-2 z-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <Button
            position="absolute right-2"
            title={<XMarkIcon />}
            // color="bg-red-300"
            hoverColor="hover:bg-red-400"
            onClick={() => resetSearch()}
            size="round"
          />
        </div>
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
          "border shadow-sm px-3 py-1 rounded-full",
          { "bg-gray-800 text-white": currentSort === "asc" },
          { "bg-white text-black": currentSort !== "asc" }
        )}
      >
        asc
      </Link>
      <Link
        href={createSortedLink("desc")}
        className={classnames(
          "shadow-sm px-3 py-1 rounded-full",
          { "bg-gray-800 text-white": currentSort === "desc" },
          { "bg-white text-black": currentSort !== "desc" }
        )}
      >
        desc
      </Link>
    </div>
  );
};
