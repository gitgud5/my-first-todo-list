import React from "react";
import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import LayoutContainer from "..";
import useDescriptionTitle from "../../../hooks/useDescriptionTitle";

const Directory = () => {

    


  const tasks = useSelector((state) => state.tasks.tasks);
  const directories = useSelector((state) => state.tasks.directories);
  const params = useParams();
  const navigate = useNavigate();

  useDescriptionTitle(
    `Tasks in "${params.dir}"`,
    params.dir ? params.dir + " directory" : ""
  );

  const [tasksInCurrentDirectory, setTasksInCurrentDirectory] = useState([]);

  useEffect(() => {
    const dirExists = directories.includes(params.dir);
    if (!dirExists) {
      navigate("/");
    }
    const tasksFiltered = tasks.filter((task) => task.dir === params.dir);
    setTasksInCurrentDirectory(tasksFiltered);
  }, [directories, navigate, params.dir, tasks]);

  return (
    <LayoutContainer
      title={`${params.dir}'s tasks`}
      tasks={tasksInCurrentDirectory}
    />
  );
};

export default Directory;
