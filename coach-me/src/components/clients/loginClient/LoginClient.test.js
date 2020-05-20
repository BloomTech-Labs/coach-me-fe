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
    it(('Header text'), () => {
        const container = render(<LoginClient />)
        const text = container.getByText('Login')
        expect(text).toBeTruthy()
    })
}),

describe('LoginClient Form', () => {
    it('Email input field', async () => {
        const container = render(<LoginClient />)
        const emailField = container.getByTestId('email-field')
        expect(emailField).toBeTruthy()
        act(() => {
            fireEvent.change(emailField, {
                target: { value: 'test@email.com' }
            })
        })
        expect(emailField).toHaveValue('test@email.com')
    })
    it('Password input field', async () => {
        const container = render(<LoginClient />)
        const passwordField = container.getByTestId('password-field')
        expect(passwordField).toBeTruthy()
        act(() => {
            fireEvent.change(passwordField, {
                target: { value: 'testPassword' }
            })
        })
        expect(passwordField).toHaveValue('testPassword')
    })
    it(('Password eye'), () => {
        const container = render(<LoginClient />);
        const image = container.getByAltText('eye')
        expect(image.src).toBe('http://localhost/show_password.png')
        act(() => {
            fireEvent.click(image)
        })
        expect(image.src).toBe('http://localhost/hide_password.png')
     })
     it('Submit button', async () => {
        const container = render(<LoginClient />)
        const text = container.getByText('Log in')
        expect(text).toBeTruthy()
    })
}),

describe('LoginClient redirect links', () => {
    it('Signup link ', async () => {
        const container = render(<LoginClient />)
        const prompt = container.getByText('Don\'t have an account?')
        const link = container.getByText('Signup')
        expect(prompt).toBeTruthy()
        expect(link).toBeTruthy()
    })
    it('Get New link', async () => {
        const container = render(<LoginClient />)
        const link = container.getByText('Forgot Password?')
        expect(link).toBeTruthy()
    })
});