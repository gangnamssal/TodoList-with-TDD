import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders headline', () => {
    render(<TodoList />);

    const liEl = screen.getByRole('listitem');

    expect(liEl).toBeInTheDocument();
  });
});
