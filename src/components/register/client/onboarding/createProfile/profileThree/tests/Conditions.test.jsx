import React from 'react';
import { Helper as render } from '../../../../../../../utils/helpers';
import Conditions from '../Conditions';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Conditions component', () => {
    it('renders without crashing', async () => {
        await render(<Conditions />);
    });

    it('Header text is correct', async () => {
        const container = render(<Conditions />);
        const header = container.getByTestId('conditions-header-text');
        expect(header.textContent).toEqual(
            'Do you have any of the following conditions?'
        );
    });

    it('Has correct classes on buttons', async () => {
        const container = render(<Conditions />);
        const anxiety = container.getByText('Anxiety');
        const cholesterol = container.getByText('High Cholesterol');
        const conditions = container.getByTestId('conditions');
        const diabetes = container.getByText('Diabetes');
        expect(conditions).toContainElement(anxiety);
        expect(anxiety).toHaveClass('option');
        expect(cholesterol).toHaveClass('option');
        expect(diabetes).toHaveClass('option');

        act(() => {
            fireEvent.click(anxiety);
        });
        expect(anxiety).toHaveClass('option-selected');
        expect(cholesterol).not.toHaveClass('option-selected');
        expect(diabetes).not.toHaveClass('option-slected');
    });
});
