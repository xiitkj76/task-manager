import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders Task Manager heading', () => {
    render(<App />);
    const heading = screen.getByText(/Task Manager/i);
    expect(heading).toBeInTheDocument();
  });

  // test('renders Your Tasks section', () => {
  //   render(<App />);
  //   const yourTasks = screen.getByText(/Your Tasks/i);
  //   expect(yourTasks).toBeInTheDocument();
  // });

  test('renders TaskFilter dropdowns', () => {
  render(<App />);
  expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
});

  test('renders Clear All Tasks button', () => {
    render(<App />);
    const clearButton = screen.getByRole('button', { name: /Clear All Tasks/i });
    expect(clearButton).toBeInTheDocument();
  });

  test('renders AddTaskForm input fields', () => {
    render(<App />);
    const titleInput = screen.getByPlaceholderText(/Task title/i);
    const descInput = screen.getByPlaceholderText(/Task description/i);
    expect(titleInput).toBeInTheDocument();
    expect(descInput).toBeInTheDocument();
  });
});
