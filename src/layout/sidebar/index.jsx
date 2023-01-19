import React, {useState} from "react";
import { useSelector } from "react-redux";
import { BtnAddTask, NavLinks, Directories } from "../../component";
import useScreenMedia from "../../hooks/useScreenMedia";
import {slice as MenuSlice} from "../../store/slices/menu"

const classLinkActive =
"text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

const Sidebar = () => {
    const [menuOpen, setmenuOpen] = useState(false);
    const {menuHeaderOpened} = useSelector(state=>state.menu);
    console.log(MenuSlice.actions);
    const mediaQueries = useScreenMedia();
  return (
    <div
      className={`bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 left-0 ${
        menuHeaderOpened || mediaQueries.xl ? "block" : "hidden"
      }`}
    >
      <header className="flex flex-col h-full">
        <h1 className="hidden mt-8 text-lg font-bold tracking-wide text-center uppercase xl:block">
          To-do list
        </h1>
        <BtnAddTask className="mx-4 my-8" />
        <NavLinks classActive={classLinkActive} />
        <Directories classActive={classLinkActive} />
      </header>
    </div>
  );
};

export default Sidebar;
