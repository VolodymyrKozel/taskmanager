import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.all))}
        selected={filter === statusFilters.all}>
        All
      </Button>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.active))}
        selected={filter === statusFilters.active}>
        Active
      </Button>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.completed))}
        selected={filter === statusFilters.completed}>
        Completed
      </Button>
    </div>
  );
};
