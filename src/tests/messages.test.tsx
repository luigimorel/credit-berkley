import React from 'react';
import { render, screen } from '@testing-library/react';
import Messages from '../ui/messenger/components/messages';

test('renders wildan    ', () => {
    render(<Messages />);
    const msgText = screen.getByText(/wildan/i);
    expect(msgText).toBeInTheDocument();
});
