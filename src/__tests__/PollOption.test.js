import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PollOption from '../components/PollOption';

it('updates the UI when the option is clicked', () => {
  const { getByText } = render(<PollOption optionText="Option 1" />);
  
  const option = getByText('Option 1');
  fireEvent.click(option);
  
  expect(option).toHaveClass('selected'); // on click
});
