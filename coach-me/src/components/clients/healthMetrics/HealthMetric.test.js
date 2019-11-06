import React from 'react';
import HealthMetric from './HeathMetric';

import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';

describe('HealthMetric component', () => {
    it('renders without crashing', () => {
        render(<HealthMetric />);
    });
});
