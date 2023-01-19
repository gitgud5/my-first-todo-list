import React from "react";
import { useSelector } from "react-redux";
import LayoutContainer from "..";
import useCompletedTasks from "../../../hooks/useCompletedTask";
import useDescriptionTitle from "../../../hooks/useDescriptionTitle";



const DoneTasks = ({ done, title }) => {
    const tasks = useSelector((state) => state.tasks.tasks);

  const { tasks: tasksFiltered } = useCompletedTasks({ tasks, done });

  useDescriptionTitle("All tasks done", title);

  return (
    <LayoutContainer title={title} tasks={tasksFiltered}></LayoutContainer>
  );
};

export default DoneTasks;
