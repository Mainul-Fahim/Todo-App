
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/common/Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText('Click me');

    // Ensure the button has the default class
    expect(button).toHaveClass('bg-blue-500');

    // Ensure the button renders with the correct text
    expect(button).toHaveTextContent('Click me');
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    const button = getByText('Click me');

    // Simulate a click on the button
    fireEvent.click(button);

    // Ensure the onClick function is called
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with a custom className', () => {
    const { getByText } = render(<Button className="custom-class">Click me</Button>);
    const button = getByText('Click me');

    // Ensure the button has the custom class
    expect(button).toHaveClass('custom-class');
  });
});
