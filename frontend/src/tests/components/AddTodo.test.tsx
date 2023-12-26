import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddTodo from '../../components/todos/AddTodo';
import { createTodo } from '../../api/Todos';


jest.mock('../../src/api/Todos', () => ({
  createTodo: jest.fn(),
}));

describe('AddTodo Component', () => {
//   it('renders AddTodo component', () => {
//     render(<AddTodo />);
//     expect(screen.getByText(/Add new Todo/i)).toBeInTheDocument();
//   });

  it('submits form correctly', async () => {
    render(<AddTodo />);
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });

    fireEvent.click(screen.getByText(/Add Todo/i));

    await waitFor(() => {
      expect(createTodo).toHaveBeenCalledWith({
        title: 'Test Title',
        description: 'Test Description',
      });
    });
  });
});
