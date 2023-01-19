import React from "react";
import { useSelector } from "react-redux";
import LayoutContainer from "..";
import useDescriptionTitle from "../../../hooks/useDescriptionTitle";



const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(`This is the tasks  =  ${tasks}`);
  console.log(tasks);

  useDescriptionTitle("Organize your tasks", "All tasks");
  return <LayoutContainer title="All tasks" tasks={tasks}></LayoutContainer>;
};

export default Home;
