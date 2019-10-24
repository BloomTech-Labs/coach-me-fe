import React from 'react';
import LoginClient from './LoginClient';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';

describe('LoginClient component', () => {
    it('renders without crashing', () => {
        render(<LoginClient />);
    });
});
