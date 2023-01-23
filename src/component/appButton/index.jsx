import { useDispatch } from "react-redux";
import { modalSlice } from "../../store/slices/modal";

const AppButton = ({ className }) => {
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(modalSlice.actions.openModalCreateTask());
  };
  return (
    <button
      className={`bg-violet-600 py-3 px-6 text-slate-50 rounded-lg w-auto transition dark:bg-violet-800 dark:hover:bg-violet-900 active:scale-95 ${className}`}
      onClick={onOpenModal}
    >
      Add new task
    </button>
  );
};

export default AppButton;
