import React from 'react';
import { Helper as render } from '../../../utils/helpers';
import { fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import EmailRequest from './EmailRequest';
afterEach(cleanup);

describe('EmailRequest component and texts', () => {
    it('Renders without crashing', async () => {
        render(<EmailRequest />);
    })
    it('Header and submit button text', async () => {
        const { getAllByText } = render(<EmailRequest />)
        expect(getAllByText(/Forgot Password/i)).toBeTruthy();
    })
    it('Email input text', async () => {
        const { getByText } = render(<EmailRequest />)
        expect(getByText(/Email/i)).toBeTruthy();
    })
    it('Request Password button text', async () => {
        const { getByText } = render(<EmailRequest />)
        expect(getByText(/Request Password/i)).toBeTruthy();
    })
});