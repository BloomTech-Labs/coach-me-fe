import React from 'react';
import { Helper as render } from '../../../utils/helpers';
import AboutUs from '../AboutUs';
import { fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('AboutUs', () => {
    it('renders without crashing', async () => {
        await render(<AboutUs />);
    });

    // it('Component displays correctly', async () => {
    //     const container = render(<Splash />);
      
    

    // });
});
