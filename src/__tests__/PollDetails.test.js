import React from 'react';
import { render } from '@testing-library/react';
import PollDetails from '../components/PollDetails'; // Example component

it('matches the snapshot', () => {
  const { asFragment } = render(<PollDetails />);
  expect(asFragment()).toMatchSnapshot();
});
