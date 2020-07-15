import React from 'react';
import { Helper as render } from '../../../utils/helpers';
import Splash from '../Splash';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Splash', () => {
    it('renders without crashing', async () => {
        await render(<Splash />);
    });

    it('Component displays correctly', async () => {
        const container = render(<Splash />);
        const splashDiv = container.getByTestId('splash');
        const hero = container.getByTestId('hero-text')
        const about = container.getByTestId('about');
        const aboutBold = container.getByTestId('about-bold')
       
        // const imageUploader = container.getByTestId('image-uploader');
        // const uploadButton = container.getByTestId('image-upload-button')
        // const displayName = container.getByTestId('client-display-name');
        // expect(imageContainer).toHaveClass('image-circle-container');
        // expect(imageUploader).toHaveClass('upload-circle');
        // expect(imageUploader).toContainElement(uploadButton)
        // expect(uploadButton).toHaveClass('upload')
        expect(splashDiv).toHaveClass('splash-screen');
        expect(splashDiv).toContainElement(hero);
        expect(hero).toHaveClass('hero-text');
        expect(about).toContainElement(aboutBold);
    

    });
});
