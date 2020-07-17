import React from 'react';
import { Helper as render } from '../../../../../../../utils/helpers';
import JoiningOptions from '../JoiningOptions';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('JoiningOptions component', () => {
    it('renders without crashing', async () => {
        await render(<JoiningOptions />);
    });

    it('Header text is correct', async () => {
        const container = render(<JoiningOptions />);
        const header = container.getByTestId('joining-header-text');
        expect(header.textContent).toEqual(
            'Are you joining Coach Me on your own or an organization, such as your employer or health insurance?'
        );
    });

    it('Has correct classes on buttons', async () => {
        const container = render(<JoiningOptions />);
        const ownSelf = container.getByText('On My Own.');
        const insurance = container.getByText('Through health insurance.');
        const joining = container.getByTestId('joining-options');
        expect(joining).toContainElement(ownSelf);
        expect(ownSelf).toHaveClass('option');
        expect(insurance).toHaveClass('option');

        act(() => {
            fireEvent.click(insurance);
        });
        expect(insurance).toHaveClass('option-selected');
        expect(ownSelf).not.toHaveClass('option-selected');
    });
});
