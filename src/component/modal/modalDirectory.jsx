import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./index";

const ModalDirectory = ({ onClose, dirName, onConfirm, btnText, title }) => {
  const directories = useSelector((store) => store.tasks.directories);

  const [errorDirectoryName, setErrorDirectoryName] = useState(false);
  const [newDirName, setNewDirName] = useState(dirName ? dirName : "");

  const checkDirNameExists = (val) => {
    const directoryDoesNotExist = directories.every((dir) => dir !== val);

    if (directoryDoesNotExist || dirName === val) {
      setErrorDirectoryName(false);
    } else {
      setErrorDirectoryName(true);
    }
  };

  const confirmDirNameHandler = (e) => {
    e.preventDefault();
    if (errorDirectoryName) return;
    onConfirm(newDirName);
    onClose();
  };

  return (
    <Modal onClose={onClose} title={title}>
      <form>
        <div className='relative'>
          <label htmlFor='dir-name' className='mb-4 text-slate-600 dark:text-slate-500'>
            Title
          </label>
          <input
            type='text'
            id='dir-name'
            placeholder='Enter a directory name'
            value={newDirName}
            onChange={({ target }) => setNewDirName(target.value)}
            className={`bg-slate-100 text-slate-600 rounded-lg p-3 outline-transparent border-2 border-transparent hover:border-violet-600 focus:border-violet-600 focus:outline-none transition dark:bg-slate-800 block w-full mt-1 placeholder:text-slate-400 placeholder:dark:text-slate-400`}
            onInput={({ currentTarget }) => checkDirNameExists(currentTarget.value)}
          />
          {errorDirectoryName && (
            <div className='absolute z-20 w-full p-2 text-sm font-medium rounded-md bg-rose-500 text-slate-200 top-full'>
              Directory name already exists
            </div>
          )}
        </div>
        <button
          className='mt-6 bg-violet-600 py-3 px-6 text-slate-50 rounded-lg w-auto transition dark:bg-violet-800 dark:hover:bg-violet-900 active:scale-95'
          onClick={confirmDirNameHandler}
        >
          {btnText}
        </button>
      </form>
    </Modal>
  );
};

export default ModalDirectory;
