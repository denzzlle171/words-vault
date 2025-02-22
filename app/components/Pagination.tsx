"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  //

  function allPAges(num: number) {
    return Array.from({ length: num }, (e, i) => i + 1);
  }
  //

  return allPAges(totalPages).map((page) => (
    <Link
      key={page}
      href={`?page=${page}`}
      className={`px-4 py-2 rounded-lg ${
        currentPage === page
          ? "bg-blue-500 text-white"
          : "bg-yellow-500 text-black"
      }`}
    >
      {page}
    </Link>
  ));
};