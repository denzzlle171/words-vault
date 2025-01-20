import { NavLinks } from "@/app/components/Navlinks";
import { AddWord } from "@/app/components/AddWord";

export const Header = () => {
  
  return (
    <header className="bg-slate-400 h-16  flex items-center justify-between">
      <b>logo</b>
      <NavLinks />
      <AddWord/>
    </header>
  );
};
