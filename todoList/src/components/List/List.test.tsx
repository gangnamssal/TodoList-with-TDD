import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { describe, expect, it, vi } from 'vitest';

import List from './List';

describe('List have tasks', () => {
  const tasks = [
    { id: 1, title: '아무일도 하기 싫다.' },
    { id: 2, title: '건물 매입' },
  ];
  const handleClick = vi.fn();

  it('renders tasks', () => {
    render(<List tasks={tasks} />);
    const textEl = screen.getByRole('list');
    expect(textEl).toHaveTextContent('아무일도 하기 싫다.');
    expect(textEl).toHaveTextContent('건물 매입');
  });

  const user = userEvent.setup();
  it('renders complete button to delete', async () => {
    render(<List tasks={tasks} onClick={handleClick} />);

    const buttonEl = screen.getAllByRole('button');
    expect(buttonEl).toHaveLength(tasks.length);

    await user.click(buttonEl[0]);
    expect(handleClick).toBeCalledWith(1);
  });
});

describe('List don`t have tasks', () => {
  const tasks = [];

  it('renders no tasks message', () => {
    render(<List tasks={tasks} />);
    const textEl = screen.getByText('할 일이 없어요!');
    expect(textEl).toBeInTheDocument();
  });
});
