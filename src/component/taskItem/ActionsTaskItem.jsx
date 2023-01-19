import React from "react";
import { BtnEditTask, BtnMarkAsImportant, BtnDeleteTask, BtnToggleCompleted } from "./smolButtons";

const ActionsTaskItem = ({
  task,
  isListInView1,
}) => {
  return (
    <>
      <div
        className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
          isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"
        }`}
      >
        <BtnToggleCompleted
          taskCompleted={task.completed}
          taskId={task.id}
          isListInView1={isListInView1}
        />
        <BtnMarkAsImportant taskId={task.id} taskImportant={task.important} />
        <BtnDeleteTask taskId={task.id} />
        <BtnEditTask task={task} />
      </div>
    </>
  );
};

export default ActionsTaskItem;
