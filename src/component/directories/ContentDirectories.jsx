import React from "react";
import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksSlice  } from "../../store/slices/tasks";
import ModalDirectory from "../modal/modalDirectory";
import ItemDirectory from "./ItemDirectory";

const ContentDirectories = ({
  classActive,
}) => {
  const tasksActions = tasksSlice.actions;
  const directories = useSelector((store) => store.tasks.directories);
  const [modalDirIsShown, setModalDirIsShown] = useState(false);

  const dispatch = useDispatch();

  const createNewDirectoryHandler = (inputValue) => {
    const newDirectoryName = inputValue.trim();

    if (newDirectoryName.length === 0) return;

    const directoryDoesNotExist = directories.every(
      (dir) => dir !== newDirectoryName
    );

    if (directoryDoesNotExist) {
      dispatch(tasksActions.createDirectory(newDirectoryName));
    }
  };

  const closeModalDirectoryHandler = () => {
    setModalDirIsShown(false);
  };


  return (
    <>
      {modalDirIsShown && (
        <ModalDirectory
          onClose={closeModalDirectoryHandler}
          onConfirm={createNewDirectoryHandler}
          btnText="Create"
          title="Create new directory"
        />
      )}




      <ul className="overflow-auto max-h-36">
        {directories.map((dir) => (
          <ItemDirectory key={dir} classActive={classActive} dir={dir} />
        ))}
      </ul>
      <button
        onClick={() => setModalDirIsShown(true)}
        className="px-3 py-1 mt-2 border-2 border-dashed rounded-md border-slate-300 dark:border-slate-700 ml-9 hover:text-violet-500"
      >
        + New
      </button>
    </>
  );
};

export default ContentDirectories;
