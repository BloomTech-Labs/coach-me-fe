import React from 'react';
import { Helper as render } from '../../../utils/helpers';
import Login from '../Login';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Login', () => {
    it('renders without crashing', async () => {
        await render(<Login />);
    });

    it('Component displays correctly', async () => {
        const container = render(<Login />);
        const div = container.getByTestId('login-div')
        const buttons = container.getByTestId('buttons')
        expect(div).toContainElement(buttons);
      
    

    });
});
