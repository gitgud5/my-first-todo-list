import { BtnAddTask } from "../..";
import { ReactComponent as MenuIcon } from "../../../assets/menu.svg";
import avatar1 from "../../../assets/avatar-1.jpg";
import { slice as MenuSlice } from "../../../store/slices/menu";
import SearchField from "./SearchField";
import Notification from "./Notification";
import { useDispatch } from "react-redux";

const HeaderTasks = () => {
  const dispatch = useDispatch();

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day.toString().padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}}`;

  const openMenuHeaderHandler = () => {
    dispatch(MenuSlice.actions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(MenuSlice.actions.openMenuAccount());
  };

  return (
    <header className='items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex'>
      <button className='block mr-6 xl:hidden' onClick={openMenuHeaderHandler} title='open menu'>
        <MenuIcon />
      </button>
      <SearchField />
      <div className='text-center'>
        <span className='block text-sm font-bold uppercase text-slate-600 dark:text-slate-200 xl:hidden'>
          To-do list
        </span>
        <time dateTime={dateTimeFormat}>{todayDate}</time>
      </div>
      <div className='flex flex-1'>
        <Notification />
        <BtnAddTask className='fixed z-10 shadow-lg sm:static bottom-3 right-3 sm:z-0 min-w-max shadow-slate-400 dark:shadow-slate-900 sm:shadow-transparent' />

        <button onClick={openMenuAccountHandler} className='block xl:hidden'>
          <img src={avatar1} alt='cat' className='w-10 h-10 ml-4 rounded-full' />
        </button>
      </div>
    </header>
  );
};

export default HeaderTasks;
