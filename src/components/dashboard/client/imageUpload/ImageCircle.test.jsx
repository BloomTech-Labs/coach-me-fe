import React from 'react';
import { Helper as render } from '../../../../utils/helpers';
import ImageCircle from './ImageCircle';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Image Circle', () => {
    it('renders without crashing', async () => {
        await render(<ImageCircle />);
    });

    it('Component displays correctly', async () => {
        const container = render(<ImageCircle />);
        const imageContainer = container.getByTestId('image-container');
        const imageUploader = container.getByTestId('image-uploader');
        const uploadButton = container.getByTestId('image-upload-button')
        const displayName = container.getByTestId('client-display-name');
        expect(imageContainer).toHaveClass('image-upload-container');
        expect(imageUploader).toHaveClass('upload-circle');
        expect(imageUploader).toContainElement(uploadButton)
        expect(uploadButton).toHaveClass('upload')
        expect(displayName).toHaveClass('client-name');
    });
});
