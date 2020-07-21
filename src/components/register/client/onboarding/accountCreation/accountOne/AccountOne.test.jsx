import React from 'react';
import { Helper as render } from '../../../../../../utils/helpers';
import { fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AccountOne from './AccountOne';
afterEach(cleanup);

describe('AccountOne component', () => {
    it('reners without crashing', async () => {
        render(<AccountOne />);
    })
    it('Header text', async () => {
        const container = render(<AccountOne />)
        const text = container.getByText('Let\'s create your Coach Me account')
        expect(text).toBeTruthy()
    })
});