import React from 'react';
import { render } from '@testing-library/react';
import PollComponent from './PollComponent';  // Adjust the path

test('PollComponent matches snapshot', () => {
  const { asFragment } = render(<PollComponent />);
  expect(asFragment()).toMatchSnapshot();
});
