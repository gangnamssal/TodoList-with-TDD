import { useSelector, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { describe, expect, it, vi, Mock } from 'vitest';

import ListContainer from './ListContainer';

import tasks from '../../../fixtures/tasks';

vi.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = vi.fn();
  (useSelector as Mock).mockImplementation((selector) => selector({ Todo: tasks }));
  (useDispatch as Mock).mockImplementation(() => dispatch);

  const user = userEvent.setup();
  it('renders tasks', async () => {
    render(<ListContainer />);
    const textEl = screen.getByText('아무일도 하기 싫다.');
    const buttonEl = screen.getAllByRole('button');

    await user.click(buttonEl[0]);

    expect(textEl).toBeInTheDocument();
    expect(dispatch).toBeCalledWith({
      type: 'todo/deleteTask',
      payload: 1,
    });
  });
});
