import { render, screen } from '@testing-library/react';
import ResetPassword from '../accounts/resetPassword/resetPassword';

test('should  render the reset password component', () => {
    render(<ResetPassword />);
    const placeholderText = screen.getByPlaceholderText(/new password/i);
    expect(placeholderText).toBeInTheDocument();
});
