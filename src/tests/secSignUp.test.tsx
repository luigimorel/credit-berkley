import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpSecondary from '../accounts/secSignUp/secSignUp';

test('renders wildan    ', () => {
    render(<SignUpSecondary />);
    const signUpText = screen.getByText(/sign up/i);
    expect(signUpText).toBeInTheDocument();
});
