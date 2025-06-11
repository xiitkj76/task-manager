// import { render, screen } from '@testing-library/react';
// import App from './App';

// test.skip('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Manager heading', () => {
  render(<App />);
  const heading = screen.getByText(/Task Manager/i);
  expect(heading).toBeInTheDocument();
});

test('renders empty task message', () => {
  render(<App />);
  const message = screen.getByText(/No tasks available/i);
  expect(message).toBeInTheDocument();
}); 
