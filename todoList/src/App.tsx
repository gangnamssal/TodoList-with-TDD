import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from './store/todoSlice';
import ListContainer from './components/ListContainer/ListContainer';
import tasks from '../fixtures/tasks';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);
  return (
    <main>
      <h1>todo</h1>
      <ListContainer />
    </main>
  );
}

export default App;
