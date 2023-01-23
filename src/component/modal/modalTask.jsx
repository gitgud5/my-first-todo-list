import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./index";

const InputCheckbox = ({ isChecked, setChecked, label }) => {
  return (
    <label className='flex items-center mb-0 cursor-pointer'>
      <div className='mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700'>
        {isChecked && <span className='block w-2 h-2 rounded-full bg-rose-500'></span>}
      </div>
      <span className='flex-1 order-1'>{label}</span>
      <input
        type='checkbox'
        className='sr-only'
        checked={isChecked}
        onChange={() => setChecked((prev) => !prev)}
      />
    </label>
  );
};

const ModalCreateTask = ({ onClose, task, nameForm, onConfirm }) => {
  const directories = useSelector((state) => state.tasks.directories);

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();
  if (day < 10) {
    day = +("0" + day);
  }
  if (month < 10) {
    month = +("0" + month);
  }

  const todayDate = year + "-" + month + "-" + day;
  const maxDate = year + 1 + "-" + month + "-" + day;

  const [description, setDescription] = useState(() => {
    if (task) {
      return task.description;
    }
    return "";
  });
  const [title, setTitle] = useState(() => {
    if (task) {
      return task.title;
    }
    return "";
  });
  const [date, setDate] = useState(() => {
    if (task) {
      return task.date;
    }
    return todayDate;
  });
  const isTitleValid = useRef(false);
  const isDateValid = useRef(false);

  const [isImportant, setIsImportant] = useState(() => {
    if (task) {
      return task.important;
    }
    return false;
  });

  const [isCompleted, setIsCompleted] = useState(() => {
    if (task) {
      return task.completed;
    }
    return false;
  });

  const [selectedDirectory, setSelectedDirectory] = useState(() => {
    if (task) {
      return task.dir;
    }
    return directories[0];
  });

  const addNewTaskHandler = (event) => {
    event.preventDefault();

    isTitleValid.current = title.trim().length > 0;
    isDateValid.current = date.trim().length > 0;

    if (isTitleValid.current && isDateValid.current) {
      const newTask = {
        title: title,
        dir: selectedDirectory,
        description: description,
        date: date,
        completed: isCompleted,
        important: isImportant,
        id: task?.id ? task.id : Date.now().toString(),
      };
      onConfirm(newTask);
      onClose();
    }
  };
  return (
    <Modal onClose={onClose} title={nameForm}>
      <form className='flex flex-col' onSubmit={addNewTaskHandler}>
        <label className='mb-4 text-slate-600 dark:text-slate-500'>
          Title
          <input
            className={`bg-slate-100 text-slate-600 rounded-lg p-3 outline-transparent border-2 border-transparent hover:border-violet-600 focus:border-violet-600 focus:outline-none transition dark:bg-slate-800 block w-full mt-1 placeholder:text-slate-400 placeholder:dark:text-slate-400`}
            type='text'
            placeholder='e.g, study for the test'
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <label className='mb-4 text-slate-600 dark:text-slate-500'>
          Date
          <input
            className={`bg-slate-100 text-slate-600 rounded-lg p-3 outline-transparent border-2 border-transparent hover:border-violet-600 focus:border-violet-600 focus:outline-none transition dark:bg-slate-800 block w-full mt-1 placeholder:text-slate-400 placeholder:dark:text-slate-400`}
            type='date'
            value={date}
            required
            onChange={({ target }) => setDate(target.value)}
            min={todayDate}
            max={maxDate}
          />
        </label>
        <label className='mb-4 text-slate-600 dark:text-slate-500'>
          Description (optional)
          <textarea
            placeholder='e.g, study for the test'
            className={`bg-slate-100 text-slate-600 rounded-lg p-3 outline-transparent border-2 border-transparent hover:border-violet-600 focus:border-violet-600 focus:outline-none transition dark:bg-slate-800 block w-full mt-1 placeholder:text-slate-400 placeholder:dark:text-slate-400`}
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          ></textarea>
        </label>
        <label className='mb-4 text-slate-600 dark:text-slate-500'>
          Select a directory
          <select
            className={`bg-slate-100 text-slate-600 rounded-lg p-3 outline-transparent border-2 border-transparent hover:border-violet-600 focus:border-violet-600 focus:outline-none transition dark:bg-slate-800 block w-full mt-1 placeholder:text-slate-400 placeholder:dark:text-slate-400`}
            value={selectedDirectory}
            onChange={({ target }) => setSelectedDirectory(target.value)}
          >
            {directories.map((dir) => (
              <option key={dir} value={dir} className='bg-slate-100 dark:bg-slate-800'>
                {dir}
              </option>
            ))}
          </select>
        </label>
        <InputCheckbox isChecked={isImportant} setChecked={setIsImportant} label='Mark as important' />
        <InputCheckbox isChecked={isCompleted} setChecked={setIsCompleted} label='Mark as completed' />
        <button
          type='submit'
          className='mt-5 bg-violet-600 py-3 px-6 text-slate-50 rounded-lg w-auto transition dark:bg-violet-800 dark:hover:bg-violet-900 active:scale-95'
        >
          {nameForm}
        </button>
      </form>
    </Modal>
  );
};

export default ModalCreateTask;
