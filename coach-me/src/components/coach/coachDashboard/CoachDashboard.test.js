import React from 'react';
import ReactDOM from 'react-dom';
import CoachDashboard from './CoachDashboard';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';

describe('App', () => {
  it('renders without crashing', () => {
    render(<CoachDashboard />);
  });
});
