import React from 'react';
import { Helper as render } from '../../../../../../utils/helpers';
import ProfileOne from './ProfileOne';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ProfileOne component', () => {
    it('renders without crashing', async () => {
        await render(<ProfileOne />);
    });

    it('Header text is correct', async () => {
        const container = render(<ProfileOne />);
        const header = container.getByTestId('header');
        expect(header.textContent).toEqual(
            "Let's create your Coach Me profile."
        );
    });
});

it('Displays correct HTML in user-photo', async () => {
    const container = render(<ProfileOne />);
    const text = container.getByTestId('upload-text');
    expect(text.textContent).toEqual('Upload a photo');
});

it('Button is correct', async () => {
    const container = render(<ProfileOne />);
    const button = container.getByTestId('image-button');
    expect(button).toHaveClass(`button`);
    expect(button.textContent).toEqual(`Choose Image`);
});

it('Displays and updates the medication field', async () => {
    const container = render(<ProfileOne />);
    const medication = container.getByTestId('medication-div');
    const medicationField = container.getByTestId('medication-field');
    expect(medication).toContainElement(medicationField);
    expect(medicationField).not.toBeRequired();
    medicationField.focus();
    expect(medicationField).toHaveFocus();
    medicationField.blur();
    expect(medicationField).not.toHaveFocus();
    expect(medicationField).toHaveAttribute('type', 'text');

    act(() => {
        fireEvent.change(medicationField, {
            target: { value: 'All sorts of crap' }
        });
    });
    expect(medicationField).toHaveValue('All sorts of crap');
});
