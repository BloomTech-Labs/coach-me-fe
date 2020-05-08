import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AccountOne from './AccountOne';
import { render } from '@testing-library/react';

describe('AccountOne component', () => {
    it('renders without crashing', async () => {
        const { getByText } = await render(<Router><AccountOne /></Router>);
        expect(getByText(/Let's create your Coach Me account/i)).toBeTruthy();
    })
});