import React, { useEffect, useState } from "react";
import useDescriptionTitle from "../../../hooks/useDescriptionTitle";
import LayoutContainer from "..";
import { useSelector } from "react-redux";

const ImportantTasks = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
  const [importantTasks, setImportantTasks] = useState([
    {
      title: "Task 1",
      important: false,
      description: "This is the description for this important task",
      date: "2023-04-12",
      dir: "Main",
      completed: true,
      id: "t1",
    },
  ]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => task.important);
    setImportantTasks(filteredTasks);
  }, [tasks]);

  useDescriptionTitle("Tasks marked as important", "Important tasks");

  return (
    <LayoutContainer
      title="Important tasks"
      tasks={importantTasks}
    ></LayoutContainer>
  );
};

export default ImportantTasks;
