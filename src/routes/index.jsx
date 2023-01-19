import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import Home from "../containers/layoutContainer/home";
import DoneTasks from "../containers/layoutContainer/completedTasks";
import ImportantTasks from "../containers/layoutContainer/importantTasks";
import TodaysTasks from "../containers/layoutContainer/todayTasks";
import SearchResults from "../containers/layoutContainer/searchResults";
import Directory from "../containers/layoutContainer/directory";
import NotFound from "../containers/NotFound";
import TaskOnly from "../containers/layoutContainer/taskOnly";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<DoneTasks done={true} title="Completed tasks"/>} />
          <Route path="/uncompleted" element={<DoneTasks done={false} title="Incomplete tasks"/>} />
          <Route path="/important" element={<ImportantTasks />} />
          <Route path="/today" element={<TodaysTasks/>}  />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/dir/:dir" element={<Directory />} />
          <Route path="/task/:taskId" element={<TaskOnly />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
