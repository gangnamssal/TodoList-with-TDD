import { useSelector, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { describe, expect, it, vi, Mock } from 'vitest';

import App from './App';
import tasks from '../fixtures/tasks';

vi.mock('react-redux');

describe('App', () => {
  const dispatch = vi.fn();
  (useDispatch as Mock).mockImplementation(() => dispatch);
  (useSelector as Mock).mockImplementation((selector) => selector({ Todo: tasks }));

  it('renders tasks', () => {
    render(<App />);
    const textEl = screen.getByText('아무일도 하기 싫다.');
    expect(textEl).toBeInTheDocument();
  });
});
