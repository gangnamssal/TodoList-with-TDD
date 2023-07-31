import tasks from '../../fixtures/tasks';
import reducer, { deleteTask, setTasks } from './todoSlice';

describe('reducer', () => {
  describe('setTasks', () => {
    it('is setting initial task', () => {
      const state = reducer([], setTasks(tasks));
      expect(state).toHaveLength(tasks.length);
    });
  });

  describe('deleteTask', () => {
    it('is delete task', () => {
      const state = reducer([{ id: 1, title: '설거지' }], deleteTask(1));
      expect(state).toHaveLength(0);
    });
  });
});
