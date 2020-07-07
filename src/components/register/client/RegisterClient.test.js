import React from 'react';
import { Helper as render } from "../../../utils/helpers"
import { fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import RegisterClient from './RegisterClient';
afterEach(cleanup);

describe('RegisterClient Header', () => {
    it('Renders without crashing', async () => {
        render(<RegisterClient />)
    })
    it(('Header text'), () => {
        const container = render(<RegisterClient />)
        const text = container.getByText('Signup')
        expect(text).toBeTruthy()
    })
}),

describe('RegisterClient Form', () => {
    it('Email input field', async () => {
        const container = render(<RegisterClient />)
        const text = container.getByText('Email')
        expect(text).toBeTruthy()
    })
    it('Password input field', async () => {
        const container = render(<RegisterClient />)
        const text = container.getByText('Password')
        expect(text).toBeTruthy()
    })
    it(('Password eye'), () => {
        const container = render(<RegisterClient />);
        const image = container.getByAltText('eye')
        expect(image.src).toBe('http://localhost/show_password.png')
     })
     it('Submit button', async () => {
        const container = render(<RegisterClient />)
        const text = container.getByText('Sign up')
        expect(text).toBeTruthy()
    })
}),

describe('RegisterClient redirect link', () => {
    it('Login link', async () => {
        const container = render(<RegisterClient />)
        const text = container.getByText('Already have an account?')
        const link = container.getByText('Login')
        expect(text).toBeTruthy()
        expect(link).toBeTruthy()
    })
});