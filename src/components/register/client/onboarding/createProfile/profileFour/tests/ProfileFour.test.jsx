import React from 'react';
import { Helper as render } from '../../../../../../../utils/helpers';
import ProfileFour from '../ProfileFour';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('JoiningOptions component', () => {
    it('renders without crashing', async () => {
        await render(<ProfileFour />);
    });

    it('Header text is correct', async () => {
        const container = render(<ProfileFour />);
        const header = container.getByTestId('header-four');
        expect(header.textContent).toEqual('What is your main health goal?');
    });

    test('Buttons work correctly', async () => {
        const container = render(<ProfileFour />);
        const weight = container.getByText('Losing Weight');
        const nutrition = container.getByText('Improve Nutrition');
        const exercise = container.getByText('Boost Exercise');
        const stress = container.getByText('Manage Stress');
        const sleep = container.getByText('Get Better Sleep');
        const control = container.getByText('Control My Conditions');
        const smoking = container.getByText('Quit Smoking');
        const other = container.getByText('Something Else');
        expect(weight).toHaveClass('goal');
        expect(exercise).toHaveClass('goal');
        expect(stress).toHaveClass('goal');
        expect(sleep).toHaveClass('goal');
        expect(control).toHaveClass('goal');
        expect(smoking).toHaveClass('goal');
        expect(other).toHaveClass('goal');
        act(() => {
            fireEvent.click(weight);
        });
        act(() => {
            fireEvent.click(stress);
        });
        expect(weight).toHaveClass('goal-selected');
        expect(stress).toHaveClass('goal-selected');
        expect(smoking).not.toHaveClass('goal-selected');
    });
});
