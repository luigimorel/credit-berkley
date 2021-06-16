import { render, screen } from '@testing-library/react';
import UserLogin from '../accounts/login/login';

test('render the password and email fields', () => {
    render(<UserLogin />);

    const passwordField = screen.getByPlaceholderText(/password/i);
    const emailField = screen.getByPlaceholderText(/email/i);

    expect(passwordField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
});
