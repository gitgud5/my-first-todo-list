import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer } from "../component";
import AccountData from "../component/accountSection/accountData";
import HeaderTasks from "../component/taskItem/headerTasks";
import Sidebar from "./sidebar";
import { modalSlice } from "../store/slices/modal";
import { tasksSlice } from "../store/slices/tasks";
import ModalCreateTask from "../component/modal/modalTask";

const AppLayout = () => {
  const modal = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const closeModalTask = () => {
    dispatch(modalSlice.actions.closeModalCreateTask());
  };

  const createNewTaskHandler = (task) => {
    dispatch(tasksSlice.actions.addNewTask(task));
  };
  return (
    <div className='bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs'>
      <Sidebar />
      <main className=' pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen'>
        <HeaderTasks />
        <Outlet />
      </main>
      <Footer />
      <AccountData />
      {modal.modalCreateTaskOpen && (
        <ModalCreateTask onClose={closeModalTask} nameForm='Add a task' onConfirm={createNewTaskHandler} />
      )}
    </div>
  );
};

export default AppLayout;
