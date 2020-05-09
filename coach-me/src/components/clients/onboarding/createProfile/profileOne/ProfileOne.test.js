import React from 'react';
import { Helper as render } from '../../../../utils/helpers';
import ProfileOne from './ProfileOne';

describe('ProfileOne component', () => {
    it('renders without crashing', async () => {
        await render(<ProfileOne />);
    });
    it('Header text', async () => {
        const { getAllByText } = render(<ProfileOne />);
        expect(
            getAllByText(/Let's create your Coach Me Profile/i)
        ).toBeTruthy();
    });
});
