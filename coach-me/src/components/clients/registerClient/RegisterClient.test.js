import React from 'react';
import RegisterClient from './RegisterClient';
import { render } from '@testing-library/react';

describe('RegisterClient component', () => {
    it('renders without crashing', () => {
        render(<RegisterClient />);
    });
});