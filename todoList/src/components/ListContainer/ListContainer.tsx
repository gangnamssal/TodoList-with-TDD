import { useSelector, useDispatch } from 'react-redux';
import List from '../List/List';
import { RootState } from '../../store/store';
import { deleteTask } from '../../store/todoSlice';

function ListContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.Todo);

  function handleClick(id: number) {
    dispatch(deleteTask(id));
  }

  return <List tasks={tasks} onClick={handleClick} />;
}

export default ListContainer;
