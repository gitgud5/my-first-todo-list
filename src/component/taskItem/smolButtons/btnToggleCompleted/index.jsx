import React from "react";
import { tasksSlice } from "../../../../store/slices/tasks";
import { ReactComponent as SvgX } from "../../../../assets/x.svg";
import { ReactComponent as Check } from "../../../../assets/check.svg";
import { useDispatch } from "react-redux";

const BtnToggleCompleted = ({ taskCompleted, taskId, isListInView1 }) => {
  const tasksActions = tasksSlice.actions;
  const dispatch = useDispatch();

  const toggleTaskCompleted = (id) => {
    dispatch(tasksActions.toggleTaskCompleted(id));
  };

  return (
    <button
      title={taskCompleted ? "mark as uncompleted" : "mark as completed"}
      className={`${
        taskCompleted
          ? "bg-emerald-200 text-emerald-800 "
          : "bg-amber-200 text-amber-800 "
      } ${isListInView1 ? "mr-4" : "mr-4 order-0"} rounded-full font-medium`}
      onClick={() => toggleTaskCompleted(taskId)}
    >
      <span className="absolute invisible block px-3 py-1 sm:static sm:visible">
        {taskCompleted ? "completed" : "uncompleted"}
      </span>
      <span className="grid w-6 h-6 sm:hidden place-items-center">
        {taskCompleted ? (
          <Check className="w-3 h-3" />
        ) : (
          <SvgX className="w-3 h-3" />
        )}
      </span>
    </button>
  );
};

export default React.memo(BtnToggleCompleted);
