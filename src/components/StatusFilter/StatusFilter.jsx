import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  function handleFilterChange() {
    dispatch(setStatusFilter(filter));
  }

  return (
    <div className={css.wrapper}>
      <Button
        onClick={handleFilterChange}
        selected={filter === statusFilters.all}>
        All
      </Button>
      <Button
        onClick={handleFilterChange}
        selected={filter === statusFilters.active}>
        Active
      </Button>
      <Button
        onClick={handleFilterChange}
        selected={filter === statusFilters.completed}>
        Completed
      </Button>
    </div>
  );
};
