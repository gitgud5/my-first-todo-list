import React from "react";
import { tasksSlice } from "../../../../store/slices/tasks";
import { ReactComponent as StarLine } from "../../../../assets/star-line.svg";
import { useDispatch } from "react-redux";

const BtnMarkAsImportant = ({ taskId, taskImportant }) => {
  const tasksActions = tasksSlice.actions;
  const dispatch = useDispatch();

  const markAsImportantHandler = () => {
    console.table(tasksActions)
    dispatch(tasksActions.markAsImportant(taskId));
  };

  return (
    <button
      title={taskImportant ? "unmark as important" : "mark as important"}
      onClick={markAsImportantHandler}
      className="ml-auto transition hover:text-slate-700 dark:hover:text-slate-200"
    >
      <StarLine
        className={`w-5 h-5 sm:w-6 sm:h-6 ${
          taskImportant ? "fill-rose-500 stroke-rose-500 " : "fill-none"
        }`}
      />
    </button>
  );
};

export default React.memo(BtnMarkAsImportant);
