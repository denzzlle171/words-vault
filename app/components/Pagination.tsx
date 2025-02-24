"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import { usePathname } from "next/navigation";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
  
    const createPararmsLink = (param: string, value: number) => {
      params.set(param, value.toString());
      return `?${params.toString()}`;
    };

  function allPAges(num: number) {
    return Array.from({ length: num }, (e, i) => i + 1);
  }

  return allPAges(totalPages).map((page) => (
    <Link
      key={page}
      href={createPararmsLink("page", page)}
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