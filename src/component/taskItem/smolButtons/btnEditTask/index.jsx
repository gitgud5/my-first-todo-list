import React, { useState } from "react";
import ModalCreateTask from "../../../modal/modalTask";
import { useDispatch } from "react-redux";
import { tasksSlice } from "../../../../store/slices/tasks";
import { ReactComponent as OptionsSvg } from "../../../../assets/options.svg";

const BtnEditTask = ({ task }) => {
  const tasksActions = tasksSlice.actions;
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModalEditTask = () => {
    setModalEditTaskOpen(false);
  };

  const openModalEditTask = () => {
    setModalEditTaskOpen(true);
  };

  const editTaskHandler = (task) => {
    dispatch(tasksActions.editTask(task));
  };

  return (
    <>
      <button
        title="edit task"
        className="grid h-6 transition w-7 sm:w-8 sm:h-8 place-items-center dark:hover:text-slate-200 hover:text-slate-700"
        onClick={openModalEditTask}
      >
        <OptionsSvg className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      {modalEditTaskOpen && (
        <ModalCreateTask
          onClose={closeModalEditTask}
          task={task}
          nameForm="Edit task"
          onConfirm={editTaskHandler}
        />
      )}
    </>
  );
};

export default BtnEditTask;
