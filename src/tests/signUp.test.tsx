import { fireEvent, render, screen } from '@testing-library/react';
import SignUp from '../accounts/signup/signUp';

test('user clicks the create account button', () => {
    render(<SignUp />);
    // User clicking  the Create Account button
    const createAccountBtn = screen.getByTestId('create-account');
    fireEvent.click(createAccountBtn);
    expect(createAccountBtn).not.toHaveClass('Mui-disabled');
});
