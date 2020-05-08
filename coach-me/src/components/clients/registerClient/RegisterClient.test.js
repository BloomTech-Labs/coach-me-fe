import React from 'react';
import { Helper as render } from '../../utils/helpers';
import { fireEvent, cleanup } from '@testing-library/react';
import RegisterClient from './RegisterClient';
afterEach(cleanup);

describe('RegisterClient component and texts', () => {
    it('Renders without crashing', async () => {
         await render(<RegisterClient />);
    })
    it('Header and submit button text', async () => {
        const { getAllByText } = await render(<RegisterClient />)
        expect(getAllByText(/Signup/i)).toBeTruthy();
    })
    it('Login button text', async () => {
        const { getByText } = await render(<RegisterClient />)
        expect(getByText(/Login/i)).toBeTruthy();
    })
    it('Email input text', async () => {
        const { getByText } = await render(<RegisterClient />)
        expect(getByText(/Email/i)).toBeTruthy();
    })
    it('Password input text', async () => {
        const { getByText } = await render(<RegisterClient />)
        expect(getByText(/Password/i)).toBeTruthy();
    })
    it('Facebook link text', async () => {
        const { getByText } = await render(<RegisterClient />)
        expect(getByText(/Facebook/i)).toBeTruthy();
    })
    it('Twitter link text', async () => {
        const { getByText } = await render(<RegisterClient />)
        expect(getByText(/Twitter/i)).toBeTruthy();
    })
});