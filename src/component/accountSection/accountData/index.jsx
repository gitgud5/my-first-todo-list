import React from "react";
import avatar1 from "../../../assets/avatar-1.jpg";
import { slice as MenuSlice } from "../../../store/slices/menu";
import DarkMode from "../DarkMode";
import DeleteTasks from "../DeleteTasks";
import TasksDone from "../TasksDone";
import LayoutMenus from "../layoutMenus";
import { useDispatch, useSelector } from "react-redux";

const AccountData = () => {


  const menuOpen = useSelector((state) => state.menu.menuAccountOpened);
  const menusActions = MenuSlice.actions;
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="flex flex-col h-full p-5">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Hi, User!</span>
          <img src={avatar1} alt="cat" className="w-10 ml-4 rounded-full" />
        </span>

        <DarkMode />

        <TasksDone />
        <DeleteTasks />
        <a
          href="https://github.com/gitgud5"
          // target={"_blank"}
          className="mt-4 bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-slate-700/[.3] dark:text-slate-200"
        >
          BRO's Github
        </a>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
