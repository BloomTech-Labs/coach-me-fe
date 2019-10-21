import React from 'react';
import HealthMetricForm from './HeathMetricForm';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';

describe('HealthMetricForm component', () => {
    it('renders without crashing', () => {
        render(<HealthMetricForm />);
    });
});
