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
        const emailText = container.getByText('Email')
        expect(emailText).toBeTruthy()
    })
    it('Password input field', async () => {
        const container = render(<LoginClient />)
        const passText = container.getByText('Password')
        expect(passText).toBeTruthy()
    })
    it(('Password eye'), () => {
        const container = render(<LoginClient />);
        const image = container.getByAltText('eye')
        expect(image.src).toBe('http://localhost/show_password.png')
     })
     it('Submit button', async () => {
        const container = render(<LoginClient />)
        const text = container.getByText('Log in')
        expect(text).toBeTruthy()
    })
}),

describe('LoginClient social media links', () => {
    it('texts and classes', async () => {
        const container = render(<LoginClient />)
        const fbLink = container.getByText('Facebook')
        const goLink = container.getByText('Google')
        expect(fbLink).toBeTruthy()
        expect(fbLink).toHaveClass('fb')
        expect(goLink).toBeTruthy()
        expect(goLink).toHaveClass('go')
    })
}),

describe('LoginClient redirect links', () => {
    it('Signup link ', async () => {
        const container = render(<LoginClient />)
        const prompt = container.getByText('Don\'t have an account?')
        const text = container.getByText('Signup')
        expect(prompt).toBeTruthy();
        expect(text).toBeTruthy();
    })
    it('Get New link', async () => {
        const container = render(<LoginClient />)
        const prompt = container.getByText('Forgot Password?')
        const text = container.getByText('Get new')
        expect(prompt).toBeTruthy();
        expect(text).toBeTruthy();
    })
});