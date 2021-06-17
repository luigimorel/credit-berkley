import React from 'react';
import { render, screen } from '@testing-library/react';
import Discussions from '../ui/feed-ui/components/discussions';

test('should render the discussions component', () => {
    render(<Discussions />);
    const discussText = screen.getByText(/top discussions/i);
    expect(discussText).toBeInTheDocument();
});
