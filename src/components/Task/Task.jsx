import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteTask(task.id));
  }
  function handleChange() {
    dispatch(toggleCompleted(task.id));
  }
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onClick={handleChange}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
