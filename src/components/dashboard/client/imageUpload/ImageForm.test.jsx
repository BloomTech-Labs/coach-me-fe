import React from 'react';
import { Helper as render } from '../../../../utils/helpers';
import ImageForm from './ImageForm';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Image Circle', () => {
    it('renders without crashing', async () => {
        await render(<ImageForm />);
    });

    it('Component displays correctly', async () => {
        const container = render(<ImageForm />);
        const imageForm = container.getByTestId('image-form');
        const chooser = container.getByTestId('chooser');
        const submit = container.getByTestId('submit');
        const imageInput = container.getByTestId('image-input')
        const cancel = container.getByTestId('cancel')
       
        expect(imageForm).toHaveClass('form-boi');
        expect(chooser).toHaveClass('file-chooser');
        expect(imageForm).toContainElement(chooser)
        expect(imageForm).toContainElement(imageInput)
        expect(imageForm).toContainElement(submit);
        expect(cancel).toHaveClass('far fa-window-close cancel')
    });
});
