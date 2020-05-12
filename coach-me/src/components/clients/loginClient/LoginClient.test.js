import React from 'react';
import { Helper as render } from '../../utils/helpers';
import { fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import LoginClient from './LoginClient';
afterEach(cleanup);

describe('LoginClient component and texts', () => {
    it('Renders without crashing', async () => {
        render(<LoginClient />);
    })
    it('Header and submit button text', async () => {
        const { getAllByText } = render(<LoginClient />)
        expect(getAllByText(/Login/i)).toBeTruthy();
    })
    it('Email input text', async () => {
        const { getByText } = render(<LoginClient />)
        expect(getByText(/Email/i)).toBeTruthy();
    })
    it('Facebook link text', async () => {
        const { getByText } = render(<LoginClient />)
        expect(getByText(/Facebook/i)).toBeTruthy();
    })
    it('Google link text', async () => {
        const { getByText } = render(<LoginClient />)
        expect(getByText(/Google/i)).toBeTruthy();
    })
    it('Signup Link prompt text', async () => {
        const { getByText } = render(<LoginClient />)
        expect(getByText(/Don't have an account?/i)).toBeTruthy();
    })
    it('Get New Link prompt text', async () => {
        const { getByText } = render(<LoginClient />)
        expect(getByText(/Forgot Password?/i)).toBeTruthy();
    })
    it('Signup button text', async () => {
        const { getByText } = render(<LoginClient />)
        expect(getByText(/Signup/i)).toBeTruthy();
    })
    it('Get new button text', async () => {
        const { getByText } = render(<LoginClient />)
        expect(getByText(/Get new/i)).toBeTruthy();
    })
});