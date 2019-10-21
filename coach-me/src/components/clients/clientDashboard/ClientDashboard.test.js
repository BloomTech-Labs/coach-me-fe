import React from 'react';
import ReactDOM from 'react-dom';
import ClientDashboard from './ClientDashboard';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';

describe('App', () => {
    it('renders without crashing', () => {
        render(<ClientDashboard />);
    });
});
