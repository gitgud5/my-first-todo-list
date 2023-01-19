import React, { useState } from "react";
import { tasksSlice } from "../../../../store/slices/tasks";
import ModalConfirm from "../../../modal/modalConfirm";
import { ReactComponent as Trash } from "../../../../assets/trash.svg";
import { useDispatch } from "react-redux";

const BtnDeleteTask = ({ taskId }) => {
  const tasksActions = tasksSlice.actions;
  const [showModal, setIsModalShown] = useState(false);
  const dispatch = useDispatch();

  const removeTaskHandler = () => {
    dispatch(tasksActions.removeTask(taskId));
  };
  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="This task will be deleted permanently."
          onConfirm={removeTaskHandler}
        />
      )}
      <button
        onClick={() => setIsModalShown(true)}
        title="delete task"
        className="ml-2 transition hover:text-slate-700 dark:hover:text-slate-200"
      >
        <Trash className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </>
  );
};

export default React.memo(BtnDeleteTask)
