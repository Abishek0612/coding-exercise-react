import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';
import { describe, it, expect, vi } from 'vitest';

describe('Search Component', () => {
  it('renders input with placeholder', () => {
    render(<Search value="" onChange={() => {}} placeholder="Test search" />);
    expect(screen.getByPlaceholderText('Test search')).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = vi.fn();
    render(<Search value="" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    
    expect(handleChange).toHaveBeenCalledWith('hello');
  });

  it('shows clear button when value is not empty', () => {
    render(<Search value="hello" onChange={() => {}} />);
    const clearButton = screen.getByLabelText('Clear search');
    expect(clearButton).toBeInTheDocument();
  });

  it('calls onChange with empty string when clear button is clicked', () => {
    const handleChange = vi.fn();
    render(<Search value="hello" onChange={handleChange} />);
    
    const clearButton = screen.getByLabelText('Clear search');
    fireEvent.click(clearButton);
    
    expect(handleChange).toHaveBeenCalledWith('');
  });
});
