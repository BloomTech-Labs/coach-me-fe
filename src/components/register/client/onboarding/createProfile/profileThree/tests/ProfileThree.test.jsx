import React from 'react';
import { Helper as render } from '../../../../../../../utils/helpers';
import ProfileThree from '../ProfileThree';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ProfileThree component', () => {
    it('renders without crashing', async () => {
        await render(<ProfileThree />);
    });

    it('Header text is correct', async () => {
        const container = render(<ProfileThree />);
        const header = container.getByTestId('header-text');
        expect(header.textContent).toEqual(
            "We'll need a little bit of information to get started."
        );
    });
});
