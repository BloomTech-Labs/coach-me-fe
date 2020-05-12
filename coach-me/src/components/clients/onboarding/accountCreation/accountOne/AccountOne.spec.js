import React from 'react';
import { Helper as render } from '../../../../utils/helpers';
import AccountOne from './AccountOne';

describe('AccountOne component', () => {
    it('reners without crashing', async () => {
        await render(<AccountOne />);
    });
    it('Header text', async () => {
        const { getAllByText } = render(<AccountOne />);
        expect(
            getAllByText(/Let's create your Coach Me account/i)
        ).toBeTruthy();
    });
});
