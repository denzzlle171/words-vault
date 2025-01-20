"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkData {
  id: string; 
  path: string;
  linkName: string;
}

const linksData: LinkData[] = [
  {
    id: "1",
    path: "/",
    linkName: "Vault",
  },
  {
    id: "2",
    path: "/repeat",
    linkName: "Repeat",
  },
  {
    id: "3",
    path: "/about",
    linkName: "About",
  },
];

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {linksData.map(({ id, path, linkName }) => (
        <Link
          key={id}
          href={path}
          className={`px-4 py-2 rounded-2xl ${
            pathname === path
              ? "bg-white text-slate-800"
              : "text-black hover:text-white"
          }`}
        >
          {linkName}
        </Link>
      ))}
    </nav>
  );
};
