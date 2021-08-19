import { render, screen } from '@testing-library/react';
import App from './App';
import StudentRegistration from './pages/student-registration';
import StudentsPage from "./pages/students";

test('renders Students Registration header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Students Registration/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Students link', ()=>{
  render(<App/>);
  const button = screen.getByText('Students');
  expect(button).toBeInTheDocument();
});

test('renders Register link', ()=>{
  render(<App/>);
  const button = screen.getByText('Register');
  expect(button).toBeInTheDocument();
});

test('renders Registration page', ()=>{
  render(<StudentRegistration/>);
});

test('renders Students page', ()=>{
  render(<StudentsPage/>);
});