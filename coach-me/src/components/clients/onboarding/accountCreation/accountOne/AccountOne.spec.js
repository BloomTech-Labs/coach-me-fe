import React from 'react';
import { Helper as render } from '../../../../utils/helpers';
import AccountOne from './AccountOne';

describe('AccountOne component', () => {
    it('reners without crashing', async () => {
         await render(<AccountOne />);
    });
});