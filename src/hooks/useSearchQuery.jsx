import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSearchQuery = (searchQuery) => {


  const taskSelector = useSelector((state) => state.tasks)


    


  const tasks = taskSelector.tasks;

  const [matchedTasks, setMatchedTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (searchQuery.trim().length) {
      setMatchedTasks(filteredTasks);
    } else {
      setMatchedTasks([]);
    }
  }, [searchQuery, tasks]);

  return matchedTasks;
};

export default useSearchQuery;
