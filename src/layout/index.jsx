import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../component";
import AccountData from "../component/accountSection/accountData";
import HeaderTasks from "../component/taskItem/headerTasks";
import Sidebar from "./sidebar";

const AppLayout = () => {
  return (
    <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
      <Sidebar />
      <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
        <HeaderTasks/>
        <Outlet />
      </main>
      <Footer/>
      <AccountData/>
    </div>
  );
};

export default AppLayout;
