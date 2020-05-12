import React from 'react';
import { Helper as render } from '../../utils/helpers';
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
    it(('Buttons'), () => {
       const container = render(<RegisterClient />);
    })
}),

describe('RegisterClient input fields', () => {
    it('Email input text', async () => {
        const container = render(<RegisterClient />)
        const emailText = container.getByText('Email')
        expect(emailText).toBeTruthy()
    })
    it('Password input text', async () => {
        const container = render(<RegisterClient />)
        const passText = container.getByText('Password')
        expect(passText).toBeTruthy()
    })
    it(('Password eye'), () => {
        const container = render(<RegisterClient />);
        const image = container.getByAltText('eye')
        expect(image.src).toBe('http://localhost/show_password.png')
     })
}),

describe('RegisterClient social media links', () => {
    it('Facebook link', async () => {
        const container = render(<RegisterClient />)
        const fbLink = container.getByText('Facebook')
        const goLink = container.getByText('Google')
        expect(fbLink).toBeTruthy()
        expect(fbLink).toHaveClass('fb')
        expect(goLink).toBeTruthy()
        expect(goLink).toHaveClass('go')
    })
}),

describe('RegisterClient redirect links', () => {
    it('Login Link', async () => {
        const container = render(<RegisterClient />)
        const text = container.getByText('Already have an account?')
        const link = container.getByText('Login')
        expect(text).toBeTruthy()
        expect(link).toBeTruthy()
    })
});