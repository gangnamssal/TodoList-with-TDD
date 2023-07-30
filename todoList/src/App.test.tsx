import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    const { container } = render(<App />);

    const h1El = screen.getByRole('heading');

    expect(h1El.textContent).toBe('todoList');
    expect(container).toHaveTextContent('해야할 일이 있습니다.');
  });
});
