import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasksSlice } from "../../store/slices/tasks";
import ModalConfirm from "../modal/modalConfirm";

const DeleteTasks = () => {

  const tasksActions = tasksSlice.actions;
  const dispatch = useDispatch();

  const [showModal, setIsModalShown] = useState(false);

  const deleteAllDataHandler = () => {
    dispatch(tasksActions.deleteAllData());
  };

  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="All data will be deleted permanently."
          onConfirm={deleteAllDataHandler}
        />
      )}
      <button
        className="pt-4 mt-auto text-left transition hover:text-rose-600 dark:hover:text-slate-200 "
        onClick={() => setIsModalShown(true)}
      >
        Delete all data
      </button>
    </>
  );
};

export default React.memo(DeleteTasks);
