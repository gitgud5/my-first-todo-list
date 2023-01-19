import React from "react";
import LayoutContainer from "..";
import useTodayTasks from "../../../hooks/useTodayTasks";
import useDescriptionTitle from "../../../hooks/useDescriptionTitle";

const TodaysTasks = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("Today's tasks", "Today's tasks");

  return (
    <LayoutContainer
      title="Today's tasks"
      tasks={todaysTasks}
    ></LayoutContainer>
  );
};

export default TodaysTasks;
